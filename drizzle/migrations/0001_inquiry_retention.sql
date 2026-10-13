ALTER TABLE public.property_inquiries
  ADD COLUMN IF NOT EXISTS last_contact_at timestamptz NOT NULL DEFAULT now(),
  ADD COLUMN IF NOT EXISTS retention_status text NOT NULL DEFAULT 'inquiry',
  ADD COLUMN IF NOT EXISTS retention_note text NOT NULL DEFAULT '';

UPDATE public.property_inquiries SET last_contact_at = created_at WHERE last_contact_at > created_at;

ALTER TABLE public.property_inquiries
  ADD CONSTRAINT property_inquiries_retention_status_check
  CHECK (retention_status IN ('inquiry','closed','business_relationship','legal_hold'));

COMMENT ON COLUMN public.property_inquiries.last_contact_at IS 'Date of the last meaningful communication; inquiries/closed rows are deleted 6 months after this.';
COMMENT ON COLUMN public.property_inquiries.retention_status IS 'inquiry|closed = auto-deleted after 6 months; business_relationship|legal_hold = never auto-deleted (separate retention).';

CREATE INDEX IF NOT EXISTS property_inquiries_retention_idx ON public.property_inquiries (retention_status, last_contact_at);

CREATE OR REPLACE FUNCTION public.purge_expired_inquiries()
RETURNS integer LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE removed integer;
BEGIN
  DELETE FROM public.property_inquiries
  WHERE retention_status IN ('inquiry','closed')
    AND last_contact_at < now() - interval '6 months';
  GET DIAGNOSTICS removed = ROW_COUNT;
  RETURN removed;
END $$;

-- GDPR erasure request: deletes all inquiries of one email except those under a business relationship or legal hold.
CREATE OR REPLACE FUNCTION public.erase_inquiries_for_email(p_email text)
RETURNS integer LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE removed integer;
BEGIN
  DELETE FROM public.property_inquiries
  WHERE lower(email) = lower(trim(p_email))
    AND retention_status IN ('inquiry','closed');
  GET DIAGNOSTICS removed = ROW_COUNT;
  RETURN removed;
END $$;

REVOKE ALL ON FUNCTION public.purge_expired_inquiries() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.erase_inquiries_for_email(text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.purge_expired_inquiries() TO service_role;
GRANT EXECUTE ON FUNCTION public.erase_inquiries_for_email(text) TO service_role;

CREATE EXTENSION IF NOT EXISTS pg_cron;
SELECT cron.schedule('purge-expired-inquiries', '17 3 * * *', $$SELECT public.purge_expired_inquiries();$$);
CREATE TABLE public.property_inquiries (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 kind text NOT NULL CHECK (kind IN ('kontakt','bewertung','verkaufen','suchprofil')),
 name text NOT NULL,
 email text NOT NULL,
 phone text NOT NULL DEFAULT '',
 details jsonb NOT NULL DEFAULT '{}'::jsonb,
 privacy_consent boolean NOT NULL CHECK (privacy_consent = true)
);
GRANT ALL ON public.property_inquiries TO service_role;
ALTER TABLE public.property_inquiries ENABLE ROW LEVEL SECURITY;
CREATE INDEX property_inquiries_email_created ON public.property_inquiries(email, created_at);
CREATE FUNCTION public.save_property_inquiry(p_kind text, p_name text, p_email text, p_phone text, p_details jsonb) RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE new_id uuid;
BEGIN
 PERFORM pg_advisory_xact_lock(hashtextextended(lower(p_email), 0));
 IF (SELECT count(*) FROM public.property_inquiries WHERE email = lower(p_email) AND created_at > now() - interval '1 hour') >= 5 THEN
 RAISE EXCEPTION 'inquiry_rate_limit';
 END IF;
 INSERT INTO public.property_inquiries(kind,name,email,phone,details,privacy_consent) VALUES(p_kind,p_name,lower(p_email),p_phone,p_details,true) RETURNING id INTO new_id;
 RETURN new_id;
END;
$$;
REVOKE ALL ON FUNCTION public.save_property_inquiry(text,text,text,text,jsonb) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.save_property_inquiry(text,text,text,text,jsonb) TO service_role;
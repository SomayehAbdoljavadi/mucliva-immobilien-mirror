import { createServerFn } from '@tanstack/react-start';
import { inquirySchema } from './inquiry-schema';
export const getInquiryChallenge = createServerFn({ method: 'GET' }).handler(async () => {
 const secret = process.env['SUPABASE_SERVICE_ROLE_KEY'];
 if (!secret) throw new Error('Das Formular ist momentan nicht verfügbar.');
 const payload = `${Date.now()}.${crypto.randomUUID()}`;
 const key = await crypto.subtle.importKey('raw',new TextEncoder().encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);
 const signature = await crypto.subtle.sign('HMAC',key,new TextEncoder().encode(payload));
 return `${payload}.${Array.from(new Uint8Array(signature),b=>b.toString(16).padStart(2,'0')).join('')}`;
});
export const submitInquiry = createServerFn({ method: 'POST' }).inputValidator((input: unknown) => inquirySchema.parse(input)).handler(async ({ data }) => {
 if (data.website) throw new Error('Die Anfrage konnte nicht gespeichert werden.');
 const [timestamp,nonce,signature] = data.challenge.split('.');
 const age = Date.now()-Number(timestamp);
 if (!nonce || !signature || !Number.isFinite(age) || age < 1500 || age > 7200000 || !/^[a-f0-9]{64}$/.test(signature)) throw new Error('Bitte laden Sie das Formular neu und versuchen Sie es erneut.');
 const secret = process.env['SUPABASE_SERVICE_ROLE_KEY'];
 if (!secret) throw new Error('Das Formular ist momentan nicht verfügbar.');
 const key = await crypto.subtle.importKey('raw',new TextEncoder().encode(secret),{name:'HMAC',hash:'SHA-256'},false,['verify']);
 const valid = await crypto.subtle.verify('HMAC',key,new Uint8Array(signature.match(/.{2}/g)?.map(s=>parseInt(s,16)) ?? []),new TextEncoder().encode(`${timestamp}.${nonce}`));
 if (!valid) throw new Error('Bitte laden Sie das Formular neu.');
 // Public intake is intentionally write-only: validated consent, signed challenge,
 // honeypot and an atomic database rate limit precede privileged storage.
 const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
 const { data: id, error } = await supabaseAdmin.rpc('save_property_inquiry',{ p_kind:data.kind,p_name:data.name,p_email:data.email,p_phone:data.phone,p_details:data.details });
 if (error || !id) throw new Error(error?.message.includes('inquiry_rate_limit') ? 'Zu viele Anfragen. Bitte versuchen Sie es in einer Stunde erneut.' : 'Ihre Anfrage konnte nicht gespeichert werden. Bitte versuchen Sie es erneut.');
 // Notify the team; storage already succeeded, so an email failure is reported, not hidden.
 let emailed = false;
 try {
  const { sendTemplateEmail } = await import('@/lib/email-templates/send-email');
  const submittedAt = new Intl.DateTimeFormat('de-DE',{dateStyle:'medium',timeStyle:'short',timeZone:'Europe/Berlin'}).format(new Date());
  const result = await sendTemplateEmail('inquiry-notification','info@mucliva.de',{ templateData:{ id:String(id), kind:data.kind, name:data.name, email:data.email, phone:data.phone, submittedAt, details:data.details }, idempotencyKey:`inquiry-notification-${id}`, replyTo:data.email });
  emailed = result.sent;
 } catch (e) { console.error('Inquiry notification failed', e); }
 return { id, saved: true, emailed };
});

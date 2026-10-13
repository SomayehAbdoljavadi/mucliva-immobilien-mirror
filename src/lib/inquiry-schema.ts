import { z } from 'zod';
export const inquirySchema = z.object({
 kind: z.enum(['kontakt', 'bewertung', 'verkaufen', 'suchprofil']),
 name: z.string().trim().min(2, 'Bitte geben Sie Ihren vollständigen Namen an.').max(100),
 email: z.string().trim().email('Bitte geben Sie eine gültige E-Mail-Adresse an.').max(254),
 phone: z.string().trim().max(40),
 privacy: z.boolean().refine(v => v, 'Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu.'),
 details: z.record(z.string().max(50), z.string().trim().max(3000)),
 website: z.string().max(100).default(''),
 challenge: z.string().max(500),
}).superRefine((d,ctx) => {
 const required = d.kind === 'kontakt' ? ['message','method','category'] : d.kind === 'suchprofil' ? ['type','districts','budget','area','rooms','timeframe'] : ['type','postcode','district','area','rooms','year','condition','timeframe'];
 for (const k of required) if (!d.details[k]) ctx.addIssue({ code: 'custom', message: 'Bitte vervollständigen Sie Ihre Angaben.', path: ['details', k] });
 if (d.kind !== 'kontakt') {
  for (const k of ['area','rooms']) if (!Number.isFinite(Number(d.details[k])) || Number(d.details[k]) <= 0) ctx.addIssue({ code: 'custom', message: 'Bitte geben Sie einen positiven Wert an.', path: ['details',k] });
  if (d.kind === 'suchprofil' && !(Number(d.details['budget'])>0)) ctx.addIssue({code:'custom',message:'Bitte geben Sie Ihr Budget an.',path:['details','budget']});
  if (d.kind !== 'suchprofil' && !/^\d{5}$/.test(d.details['postcode'] ?? '')) ctx.addIssue({code:'custom',message:'Bitte geben Sie eine fünfstellige Postleitzahl an.',path:['details','postcode']});
  if (d.kind !== 'suchprofil' && (!(Number(d.details['year'])>=1600) || Number(d.details['year'])>new Date().getFullYear()+5)) ctx.addIssue({code:'custom',message:'Bitte prüfen Sie das Baujahr.',path:['details','year']});
 }
 if (d.details['method'] === 'Telefon' && d.phone.length < 5) ctx.addIssue({code:'custom',message:'Bitte geben Sie Ihre Telefonnummer an.',path:['phone']});
});
export type Inquiry = z.infer<typeof inquirySchema>;

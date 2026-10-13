import { describe, expect, it } from 'vitest';
import { inquirySchema } from '@/lib/inquiry-schema';
const contact = { kind:'kontakt',name:'Website Test',email:'test@example.com',phone:'',privacy:true,details:{message:'Eine Frage zur Immobilie.',method:'E-Mail',category:'Allgemeine Anfrage'},website:'',challenge:'signed-challenge' };
describe('Inquiry validation',()=>{
 it('accepts a complete contact inquiry',()=>expect(inquirySchema.safeParse(contact).success).toBe(true));
 it('requires privacy consent',()=>expect(inquirySchema.safeParse({...contact,privacy:false}).success).toBe(false));
 it('rejects invalid email',()=>expect(inquirySchema.safeParse({...contact,email:'not-an-email'}).success).toBe(false));
 it('rejects missing message',()=>expect(inquirySchema.safeParse({...contact,details:{...contact.details,message:''}}).success).toBe(false));
 it('requires a number for telephone contact',()=>expect(inquirySchema.safeParse({...contact,details:{...contact.details,method:'Telefon'}}).success).toBe(false));
 it('rejects incomplete valuation data',()=>expect(inquirySchema.safeParse({...contact,kind:'bewertung'}).success).toBe(false));
 it('rejects zero budget in buyer profile',()=>expect(inquirySchema.safeParse({...contact,kind:'suchprofil',details:{type:'Wohnung',districts:'Schwabing',budget:'0',area:'80',rooms:'3',timeframe:'In 3–6 Monaten'}}).success).toBe(false));
});
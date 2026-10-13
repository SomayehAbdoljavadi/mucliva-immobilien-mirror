import { describe, expect, it } from 'vitest';
import { translate } from '@/lib/preferences';
describe('Language translations',()=>{
 it('keeps German unchanged',()=>expect(translate('Wohnung','de')).toBe('Wohnung'));
 it('translates property types into English',()=>expect(translate('Wohnung','en')).toBe('Apartment'));
 it('translates property types into Persian',()=>expect(translate('Wohnung','fa')).toBe('آپارتمان'));
 it('preserves unknown values',()=>expect(translate('81925','fa')).toBe('81925'));
 it('preserves non-string children',()=>expect(translate(42,'en')).toBe(42));
 it('translates validation errors',()=>expect(translate('Bitte vervollständigen Sie Ihre Angaben.','en')).toBe('Please complete your details.'));
});
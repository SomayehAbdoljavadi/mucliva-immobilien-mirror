import { describe, expect, it } from 'vitest';
import { translate } from '@/lib/preferences';
describe('German-only content',()=>{
 it('keeps German unchanged',()=>expect(translate('Wohnung')).toBe('Wohnung'));
 it('preserves non-string children',()=>expect(translate(42)).toBe(42));
});

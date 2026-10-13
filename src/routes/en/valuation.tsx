import { createFileRoute } from '@tanstack/react-router';
import { ValuationPage } from '@/components/mucliva/pages';
import { pageHead } from '@/lib/site';
export const Route = createFileRoute('/en/valuation')({
 head: () => pageHead('Property Valuation Munich', 'An individual basis for your property value in Munich. Request a personal assessment from MUCLIVA.', '/en/valuation'),
 component: ValuationPage,
});

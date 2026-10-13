import { createFileRoute } from '@tanstack/react-router';
import { SellPage } from '@/components/mucliva/pages';
import { pageHead } from '@/lib/site';
export const Route = createFileRoute('/en/sell')({
 head: () => pageHead('Sell Property in Munich', 'Selling your property in Munich: an individual strategy, careful presentation and personal guidance.', '/en/sell'),
 component: SellPage,
});

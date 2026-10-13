import { createFileRoute } from '@tanstack/react-router';
import { SellPage } from '@/components/mucliva/pages';
import { pageHead } from '@/lib/site';
export const Route = createFileRoute('/verkaufen')({
 head: () => pageHead('Immobilien verkaufen in München', 'Ihr Immobilienverkauf in München: individuelle Strategie, sorgfältige Präsentation und persönliche Begleitung.', '/verkaufen'),
 component: SellPage,
});

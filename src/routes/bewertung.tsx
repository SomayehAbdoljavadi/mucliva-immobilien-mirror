import { createFileRoute } from '@tanstack/react-router';
import { ValuationPage } from '@/components/mucliva/pages';
import { pageHead } from '@/lib/site';
export const Route = createFileRoute('/bewertung')({
 head: () => pageHead('Immobilienbewertung München', 'Eine individuelle Grundlage für Ihren Immobilienwert in München. Fragen Sie eine persönliche Einschätzung bei MUCLIVA an.', '/bewertung'),
 component: ValuationPage,
});

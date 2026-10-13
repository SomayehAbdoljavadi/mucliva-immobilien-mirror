import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/mucliva/pages';
import { pageHead } from '@/lib/site';
export const Route = createFileRoute('/')({
 head: () => pageHead('Immobilienmakler München', 'Persönliche Immobilienvermittlung in München: Immobilien verkaufen, Werte verstehen und ein neues Zuhause finden.', '/'),
 component: HomePage,
});

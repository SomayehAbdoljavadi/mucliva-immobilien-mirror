import { createFileRoute } from '@tanstack/react-router';
import { PropertiesPage } from '@/components/mucliva/pages';
import { pageHead } from '@/lib/site';
export const Route = createFileRoute('/immobilien')({
 head: () => pageHead('Immobilien in München', 'Wohnung, Haus oder Grundstück in München suchen. Immobilienangebote filtern und ein persönliches Suchprofil erstellen.', '/immobilien'),
 component: PropertiesPage,
});

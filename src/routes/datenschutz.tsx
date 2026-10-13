import { createFileRoute } from '@tanstack/react-router';
import { DatenschutzPage } from '@/components/mucliva/datenschutz';
import { pageHead } from '@/lib/site';
export const Route = createFileRoute('/datenschutz')({
 head: () => pageHead('Datenschutz', 'Datenschutzhinweise von MUCLIVA Immobilien, einer Marke der Munich Construction GmbH: Verarbeitung von Anfragen, Hosting und Ihre Rechte.', '/datenschutz'),
 component: DatenschutzPage,
});

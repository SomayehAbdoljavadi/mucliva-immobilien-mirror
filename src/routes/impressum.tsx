import { createFileRoute } from '@tanstack/react-router';
import { ImpressumPage } from '@/components/mucliva/impressum';
import { pageHead } from '@/lib/site';
export const Route = createFileRoute('/impressum')({
 head: () => pageHead('Impressum', 'Impressum von MUCLIVA Immobilien – eine Marke der Munich Construction GmbH, Heiterwanger Straße 30, 81373 München.', '/impressum'),
 component: ImpressumPage,
});

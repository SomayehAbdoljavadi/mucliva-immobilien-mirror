import { createFileRoute } from '@tanstack/react-router';
import { ImpressumPage } from '@/components/mucliva/impressum';
import { pageHead } from '@/lib/site';
export const Route = createFileRoute('/en/legal-notice')({
 head: () => pageHead('Legal Notice', 'Legal notice of MUCLIVA Immobilien – a brand of Munich Construction GmbH, Heiterwanger Straße 30, 81373 München.', '/en/legal-notice'),
 component: ImpressumPage,
});

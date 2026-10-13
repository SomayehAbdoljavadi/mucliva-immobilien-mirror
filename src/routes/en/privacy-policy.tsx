import { createFileRoute } from '@tanstack/react-router';
import { DatenschutzPage } from '@/components/mucliva/datenschutz';
import { pageHead } from '@/lib/site';
export const Route = createFileRoute('/en/privacy-policy')({
 head: () => pageHead('Privacy Policy', 'Privacy policy of MUCLIVA Immobilien, a brand of Munich Construction GmbH: processing of inquiries, hosting and your rights.', '/en/privacy-policy'),
 component: DatenschutzPage,
});

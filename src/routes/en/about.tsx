import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/mucliva/pages';
import { pageHead } from '@/lib/site';
export const Route = createFileRoute('/en/about')({
 head: () => pageHead('About MUCLIVA Immobilien', 'Regional, reliable and sustainable: the values behind MUCLIVA Immobilien in Munich.', '/en/about'),
 component: AboutPage,
});

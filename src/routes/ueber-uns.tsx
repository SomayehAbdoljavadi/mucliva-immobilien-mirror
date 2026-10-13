import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/mucliva/pages';
import { pageHead } from '@/lib/site';
export const Route = createFileRoute('/ueber-uns')({
 head: () => pageHead('Über MUCLIVA Immobilien', 'Regional, zuverlässig und nachhaltig: die Haltung hinter MUCLIVA Immobilien in München.', '/ueber-uns'),
 component: AboutPage,
});

import { createFileRoute } from '@tanstack/react-router';
import { PropertiesPage } from '@/components/mucliva/pages';
import { pageHead } from '@/lib/site';
export const Route = createFileRoute('/en/properties')({
 head: () => pageHead('Properties in Munich', 'Find an apartment, house or plot in Munich. Filter property listings and create a personal search profile.', '/en/properties'),
 component: PropertiesPage,
});

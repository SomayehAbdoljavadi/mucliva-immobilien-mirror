import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/mucliva/pages';
import { pageHead } from '@/lib/site';
export const Route = createFileRoute('/en/')({
 head: () => pageHead('Estate Agent in Munich', 'Personal real estate services in Munich: sell your property, understand its value and find a new home.', '/en'),
 component: HomePage,
});

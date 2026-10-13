import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/mucliva/pages';
import { pageHead } from '@/lib/site';
export const Route = createFileRoute('/en/contact')({
 head: () => pageHead('Contact MUCLIVA', 'Get in touch with MUCLIVA Immobilien in Munich. Questions about selling, property value or your next home.', '/en/contact'),
 component: ContactPage,
});

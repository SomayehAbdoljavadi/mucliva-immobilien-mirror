import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/mucliva/pages';
import { pageHead } from '@/lib/site';
export const Route = createFileRoute('/kontakt')({
 head: () => pageHead('Kontakt zu MUCLIVA', 'Ihr Kontakt zu MUCLIVA Immobilien in München. Fragen zu Verkauf, Immobilienwert oder Ihrem nächsten Zuhause.', '/kontakt'),
 component: ContactPage,
});

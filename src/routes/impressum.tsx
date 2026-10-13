import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/mucliva/pages';
import { pageHead } from '@/lib/site';
export const Route = createFileRoute('/impressum')({
 head: () => pageHead('Impressum', 'Rechtliche Anbieterinformationen zu MUCLIVA Immobilien. Entwurf zur Vervollständigung und rechtlichen Prüfung.', '/impressum'),
 component: LegalPage,
});

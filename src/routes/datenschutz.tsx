import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/mucliva/pages';
import { pageHead } from '@/lib/site';
export const Route = createFileRoute('/datenschutz')({
 head: () => pageHead('Datenschutz', 'Informationen zum Datenschutz und zur Verarbeitung von Anfragen bei MUCLIVA Immobilien. Entwurf zur rechtlichen Prüfung.', '/datenschutz'),
 component: () => <LegalPage privacy />,
});

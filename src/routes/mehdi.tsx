import { createFileRoute } from '@tanstack/react-router';
import { DigitalCardPage } from '@/components/mucliva/digital-card';
import { cardHead, cards } from '@/lib/digital-cards';

export const Route = createFileRoute('/mehdi')({
  head: () => cardHead(cards.mehdi, 'de'),
  component: () => <DigitalCardPage card={cards.mehdi} lang="de" />,
});

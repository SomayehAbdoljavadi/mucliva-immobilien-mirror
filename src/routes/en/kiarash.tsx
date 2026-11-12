import { createFileRoute } from '@tanstack/react-router';
import { DigitalCardPage } from '@/components/mucliva/digital-card';
import { cardHead, cards } from '@/lib/digital-cards';

export const Route = createFileRoute('/en/kiarash')({
  head: () => cardHead(cards.kiarash, 'en'),
  component: () => <DigitalCardPage card={cards.kiarash} lang="en" />,
});

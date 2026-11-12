import { createFileRoute } from '@tanstack/react-router';
import { DigitalCardPage } from '@/components/mucliva/digital-card';
import { cardHead, cards } from '@/lib/digital-cards';

export const Route = createFileRoute('/kiarash-pahlevani')({
  head: () => cardHead(cards.kiarash, 'de'),
  component: () => <DigitalCardPage card={cards.kiarash} lang="de" />,
});

import { createFileRoute } from '@tanstack/react-router';
import { Phone, Mail, Globe, MapPin, Download, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import photo1 from '@/assets/team/kiarash-photo1.webp';
import photo1Small from '@/assets/team/kiarash-photo1-640.webp';
import photo2 from '@/assets/team/kiarash-photo2.webp';
import photo2Small from '@/assets/team/kiarash-photo2-640.webp';

/** Administrators: switch the profile photo here ('photo1' = default, 'photo2' = alternative). */
const ACTIVE_PHOTO: 'photo1' | 'photo2' = 'photo1';
const photos = { photo1: { large: photo1, small: photo1Small }, photo2: { large: photo2, small: photo2Small } };

const title = 'Kiarash Pahlevani, M.Sc. – Immobilienberater | MUCLIVA Immobilien';
const description = 'Digitale Visitenkarte von Kiarash Pahlevani, M.Sc., Immobilienberater bei MUCLIVA Immobilien in München – Spezialist für Immobilienkauf und -verkauf.';

export const Route = createFileRoute('/kiarash-pahlevani')({
  head: () => ({
    meta: [
      { title }, { name: 'description', content: description },
      { property: 'og:title', content: title }, { property: 'og:description', content: description },
      { property: 'og:type', content: 'profile' }, { name: 'twitter:card', content: 'summary' },
    ],
    links: [{ rel: 'canonical', href: '/kiarash-pahlevani' }],
  }),
  component: ProfilePage,
});

const actions = [
  { label: 'Mobil anrufen', href: 'tel:+491784784982', icon: Phone },
  { label: 'Büro anrufen', href: 'tel:+498957843675', icon: Building2 },
  { label: 'E-Mail senden', href: 'mailto:info@mucliva.de', icon: Mail },
  { label: 'MUCLIVA besuchen', href: 'https://mucliva.de', icon: Globe },
];

function ProfilePage() {
  const p = photos[ACTIVE_PHOTO];
  return (
    <section className="container py-12 md:py-20">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        <img src={p.large} srcSet={`${p.small} 640w, ${p.large} 1254w`} sizes="(min-width: 768px) 420px, 90vw"
          width={1254} height={1254} alt="Kiarash Pahlevani, Immobilienberater bei MUCLIVA Immobilien"
          className="aspect-square w-full rounded-sm border border-border object-cover shadow-sm" />
        <div>
          <p className="eyebrow">MUCLIVA Immobilien · Digitale Visitenkarte</p>
          <h1 className="mt-3 text-4xl md:text-5xl">Kiarash Pahlevani, M.Sc.</h1>
          <p className="mt-3 text-xl text-primary">Immobilienberater</p>
          <p className="mt-1 text-muted-foreground">Spezialist für Immobilienkauf und -verkauf</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {actions.map(({ label, href, icon: Icon }) => (
              <Button key={href} variant="outline" size="lg" asChild className="justify-start">
                <a href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}><Icon />{label}</a>
              </Button>
            ))}
            <Button size="lg" asChild className="justify-start sm:col-span-2">
              <a href="/downloads/kiarash/MUCLIVA_KiarashPahlevani.vcf" download="MUCLIVA_KiarashPahlevani.vcf"><Download />Kontakt speichern</a>
            </Button>
          </div>
          <dl className="mt-10 grid gap-4 border-t border-border pt-8 text-sm">
            <Row icon={Phone} label="Mobil"><a href="tel:+491784784982">+49 178 4784982</a></Row>
            <Row icon={Building2} label="Büro"><a href="tel:+498957843675">+49 89 57843675</a></Row>
            <Row icon={Mail} label="E-Mail"><a href="mailto:info@mucliva.de">info@mucliva.de</a></Row>
            <Row icon={Globe} label="Web"><a href="https://mucliva.de" target="_blank" rel="noopener">www.mucliva.de</a> · <a href="https://www.munichconstruction.de" target="_blank" rel="noopener">www.munichconstruction.de</a></Row>
            <Row icon={MapPin} label="Büro­adresse">Heiterwanger Straße 30, 81373 München, Deutschland</Row>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Row({ icon: Icon, label, children }: { icon: typeof Phone; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
      <dt className="w-24 shrink-0 text-muted-foreground">{label}</dt>
      <dd className="min-w-0 break-words [&_a]:underline-offset-4 hover:[&_a]:underline">{children}</dd>
    </div>
  );
}

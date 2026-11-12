import kiarashPhoto from '@/assets/team/kiarash-photo.webp';
import kiarashPhotoSmall from '@/assets/team/kiarash-photo-640.webp';
import mehdiPhoto from '@/assets/team/mehdi-photo.webp';
import mehdiPhotoSmall from '@/assets/team/mehdi-photo-640.webp';

export const PRODUCTION_ORIGIN = 'https://mucliva.de';

export type DigitalCard = {
  slug: string; name: string; title: { de: string; en: string }; specialty?: { de: string; en: string };
  mobile: { display: string; e164: string }; whatsapp: string; vcf: string; filePrefix: string;
  paths: { de: string; en: string }; photo: { large: string; small: string }; extraWebsite?: string;
};

const office = { display: '+49 89 57 84 3675', e164: '+498957843675' };
export const cardOffice = office;
export const cardEmail = 'info@mucliva.de';
export const cardAddress = 'Heiterwanger Straße 30, 81373 München, Deutschland';

export const cards = {
  kiarash: {
    slug: 'kiarash', name: 'Kiarash Pahlevani, M.Sc.',
    title: { de: 'Immobilienberater', en: 'Real Estate Consultant' },
    specialty: { de: 'Spezialist für Immobilienkauf und -verkauf', en: 'Specialist in buying and selling property' },
    mobile: { display: '+49 178 4784982', e164: '+491784784982' }, whatsapp: '491784784982',
    vcf: '/downloads/cards/MUCLIVA_KiarashPahlevani.vcf', filePrefix: 'MUCLIVA_KiarashPahlevani',
    paths: { de: '/kiarash-pahlevani', en: '/en/kiarash' }, photo: { large: kiarashPhoto, small: kiarashPhotoSmall },
    extraWebsite: 'https://www.munichconstruction.de',
  },
  mehdi: {
    slug: 'mehdi', name: 'Mehdi Mardi',
    title: { de: 'Geschäftsführer', en: 'Managing Director' },
    mobile: { display: '+49 176 3235 4815', e164: '+4917632354815' }, whatsapp: '4917632354815',
    vcf: '/downloads/cards/MUCLIVA_MehdiMardi.vcf', filePrefix: 'MUCLIVA_MehdiMardi',
    paths: { de: '/mehdi', en: '/en/mehdi' }, photo: { large: mehdiPhoto, small: mehdiPhotoSmall },
  },
} satisfies Record<string, DigitalCard>;

export function cardHead(card: DigitalCard, lang: 'de' | 'en') {
  const t = `${card.name} – ${card.title[lang]} | MUCLIVA Immobilien`;
  const d = lang === 'de'
    ? `Digitale Visitenkarte von ${card.name}, ${card.title.de} bei MUCLIVA Immobilien in München.`
    : `Digital business card of ${card.name}, ${card.title.en} at MUCLIVA Immobilien in Munich.`;
  return {
    meta: [{ title: t }, { name: 'description', content: d }, { property: 'og:title', content: t }, { property: 'og:description', content: d },
      { property: 'og:type', content: 'profile' }, { name: 'twitter:card', content: 'summary' }],
    links: [{ rel: 'canonical', href: PRODUCTION_ORIGIN + card.paths[lang] },
      { rel: 'alternate', hrefLang: 'de', href: PRODUCTION_ORIGIN + card.paths.de },
      { rel: 'alternate', hrefLang: 'en', href: PRODUCTION_ORIGIN + card.paths.en }],
  };
}

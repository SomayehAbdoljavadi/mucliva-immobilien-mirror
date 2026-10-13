import { alternatesFor, languageFromPath } from './i18n-routes';
import villa from '@/assets/munich-villa.jpg';
import interior from '@/assets/altbau-interior.jpg';
import neighborhood from '@/assets/munich-neighborhood.jpg';
export const images = { villa, interior, neighborhood };
export const districts = ['Altstadt & Lehel', 'Schwabing', 'Bogenhausen', 'Nymphenburg', 'Haidhausen', 'Harlaching'];
export const districtCopy = ['Historische Häuser, stille Innenhöfe und die Isar vor der Tür.', 'Lebendige Straßen, charaktervolle Altbauten und Nähe zum Englischen Garten.', 'Großzügige Wohnlagen zwischen gewachsener Architektur und grünen Rückzugsorten.', 'Wohnen zwischen Schlosspark, Villenvierteln und ruhigen Alleen.', 'Ein Viertel mit Nachbarschaft, kleinen Plätzen und besonderem Altbaucharme.', 'Grüne Wohnlagen, Isarnähe und Raum für ein ruhiges Zuhause.'];
export const navigation = [{ to: '/', label: 'Start' }, { to: '/verkaufen', label: 'Verkaufen' }, { to: '/bewertung', label: 'Bewertung' }, { to: '/immobilien', label: 'Immobilien' }, { to: '/ueber-uns', label: 'Über uns' }, { to: '/kontakt', label: 'Kontakt' }] as const;
export function pageHead(title: string, description: string, path: string) {
 const language = languageFromPath(path); const alt = alternatesFor(path); const home = language === 'en' ? '/en' : '/';
 return { meta: [{ title: `${title} | MUCLIVA Immobilien` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | MUCLIVA Immobilien` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { property: 'og:url', content: path }, { property: 'og:locale', content: language === 'en' ? 'en_GB' : 'de_DE' }, { property: 'og:locale:alternate', content: language === 'en' ? 'de_DE' : 'en_GB' }, { name: 'twitter:card', content: 'summary_large_image' }], links: [{ rel: 'canonical', href: path }, { rel: 'alternate', hrefLang: 'de', href: alt.de }, { rel: 'alternate', hrefLang: 'en', href: alt.en }, { rel: 'alternate', hrefLang: 'x-default', href: alt.de }], scripts: path === home ? [{ type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@type': 'RealEstateAgent', name: 'MUCLIVA Immobilien', areaServed: { '@type': 'City', name: 'München' }, knowsLanguage: ['de', 'en'] }) }] : [{ type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: language === 'en' ? 'Home' : 'Start', item: home }, { '@type': 'ListItem', position: 2, name: title, item: path }] }) }] };
}
export type Property = { id: string; title: string; district: string; price: number; area: number; rooms: number; type: string; transaction: string; image: string; description: string };
// Only verified owner-supplied listings belong here. An empty catalog is intentional.
export const properties: Property[] = [];
export const team: { name: string; role: string; biography: string; image?: string }[] = [];

export type Language = 'de' | 'en';

// German paths are canonical in code; English URLs are their localized counterparts.
export const deToEn = {
  '/': '/en',
  '/verkaufen': '/en/sell',
  '/bewertung': '/en/valuation',
  '/immobilien': '/en/properties',
  '/ueber-uns': '/en/about',
  '/kontakt': '/en/contact',
  '/impressum': '/en/legal-notice',
  '/datenschutz': '/en/privacy-policy',
} as const;

const enToDe: Record<string, string> = Object.fromEntries(Object.entries(deToEn).map(([de, en]) => [en, de]));

function stripTrailing(path: string) {
  return path.length > 1 ? path.replace(/\/+$/, '') : path;
}

export function languageFromPath(pathname: string): Language {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'de';
}

/** Maps a German path (optionally with #hash) to the given language. */
export function localizePath(to: string, language: Language): string {
  if (language === 'de') return to;
  const [path, hash] = to.split('#');
  const mapped = (deToEn as Record<string, string>)[stripTrailing(path ?? '/')] ?? path ?? '/';
  return hash ? `${mapped}#${hash}` : mapped;
}

/** Returns both language versions of the current page. */
export function alternatesFor(pathname: string): { de: string; en: string } {
  const p = stripTrailing(pathname);
  if (languageFromPath(p) === 'en') return { de: enToDe[p] ?? '/', en: p };
  return { de: p, en: (deToEn as Record<string, string>)[p] ?? '/en' };
}

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { useLocation, useNavigate } from '@tanstack/react-router';
import { en } from './translations';
import { alternatesFor, languageFromPath, type Language } from './i18n-routes';

export type { Language };
// Language comes from the URL (/en/* = English) so server and client render identically.
type Preferences = { language: Language; dark: boolean; toggleTheme: () => void; t: <T>(text: T) => T };
export function translate<T>(text: T, language: Language = 'de'): T {
  if (language === 'en' && typeof text === 'string') return ((en[text] ?? text) as unknown) as T;
  return text;
}
const identity = <T,>(text: T) => text;
const PreferencesContext = createContext<Preferences>({ language: 'de', dark: false, toggleTheme: () => {}, t: identity });
const LANG_KEY = 'mucliva-language';

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const language = languageFromPath(pathname);
  const restored = useRef(false);

  useEffect(() => {
    try { setDark(localStorage.getItem('mucliva-theme') === 'dark'); } catch { /* optional */ }
  }, []);

  // Returning visitors land in their last chosen language (only once, on first load).
  useEffect(() => {
    if (restored.current) return;
    restored.current = true;
    try {
      if (localStorage.getItem(LANG_KEY) === 'en' && language === 'de') {
        void navigate({ to: alternatesFor(pathname).en as never, ...(hash ? { hash } : {}), replace: true });
      }
    } catch { /* optional */ }
  }, [language, pathname, hash, navigate]);

  useEffect(() => {
    if (!restored.current) return;
    try { localStorage.setItem(LANG_KEY, language); } catch { /* optional */ }
    document.documentElement.lang = language;
    document.documentElement.dir = 'ltr';
  }, [language]);

  useEffect(() => { document.documentElement.classList.toggle('dark', dark); }, [dark]);

  const toggleTheme = () => setDark(previous => { try { localStorage.setItem('mucliva-theme', previous ? 'light' : 'dark'); } catch { /* optional */ } return !previous; });
  const t = <T,>(text: T) => translate(text, language);
  return <PreferencesContext.Provider value={{ language, dark, toggleTheme, t }}>{children}</PreferencesContext.Provider>;
}
export const useLanguage = () => useContext(PreferencesContext);

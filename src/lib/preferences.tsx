import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { translations } from './translations';

export type Language = 'de' | 'en' | 'fa';
type Preferences = { language: Language; setLanguage: (language: Language) => void; dark: boolean; toggleTheme: () => void; t: <T>(text: T) => T };
export function translate<T>(text: T, language: Language): T {
  if (typeof text !== 'string' || language === 'de') return text;
  const pair = translations[text];
  if (pair) return pair[language === 'en' ? 0 : 1] as T;
  return text.replace(/\S[^·]*?(?=\s*·|$)/g, part => {
    const value = translations[part.trim()];
    return value ? value[language === 'en' ? 0 : 1] : part;
  }) as T;
}
const PreferencesContext = createContext<Preferences>({ language:'de', setLanguage:()=>{}, dark:false, toggleTheme:()=>{}, t:text=>text });
export function PreferencesProvider({children}:{children:ReactNode}) {
  const [language,setLanguageState] = useState<Language>('de');
  const [dark,setDark] = useState(false);
  useEffect(()=>{
    try {
      const stored = localStorage.getItem('mucliva-language');
      if(stored==='de'||stored==='en'||stored==='fa') setLanguageState(stored);
      setDark(localStorage.getItem('mucliva-theme')==='dark');
    } catch { /* Preference storage is optional. */ }
  },[]);
  useEffect(()=>{
    document.documentElement.lang=language;
    document.documentElement.dir=language==='fa'?'rtl':'ltr';
    document.documentElement.classList.toggle('dark',dark);
  },[language,dark]);
  const setLanguage=(next:Language)=>{setLanguageState(next);try{localStorage.setItem('mucliva-language',next)}catch{}};
  const toggleTheme=()=>setDark(previous=>{try{localStorage.setItem('mucliva-theme',previous?'light':'dark')}catch{}return !previous});
  return <PreferencesContext.Provider value={{language,setLanguage,dark,toggleTheme,t:text=>translate(text,language)}}>{children}</PreferencesContext.Provider>;
}
export const useLanguage=()=>useContext(PreferencesContext);
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

// The public site is German-only; t() stays as an identity helper so components need no rewrite.
export type Language = 'de';
type Preferences = { language: Language; dark: boolean; toggleTheme: () => void; t: <T>(text: T) => T };
export function translate<T>(text: T): T { return text; }
const PreferencesContext = createContext<Preferences>({ language:'de', dark:false, toggleTheme:()=>{}, t:text=>text });
export function PreferencesProvider({children}:{children:ReactNode}) {
  const [dark,setDark] = useState(false);
  useEffect(()=>{
    try { localStorage.removeItem('mucliva-language'); setDark(localStorage.getItem('mucliva-theme')==='dark'); } catch { /* optional */ }
  },[]);
  useEffect(()=>{
    document.documentElement.lang='de';
    document.documentElement.dir='ltr';
    document.documentElement.classList.toggle('dark',dark);
  },[dark]);
  const toggleTheme=()=>setDark(previous=>{try{localStorage.setItem('mucliva-theme',previous?'light':'dark')}catch{}return !previous});
  return <PreferencesContext.Provider value={{language:'de',dark,toggleTheme,t:translate}}>{children}</PreferencesContext.Provider>;
}
export const useLanguage=()=>useContext(PreferencesContext);

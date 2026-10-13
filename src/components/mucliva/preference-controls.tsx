import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage, type Language } from '@/lib/preferences';

export function PreferenceControls(){
  const {language,setLanguage,dark,toggleTheme,t}=useLanguage();
  return <div className="preference-controls">
    <div className="language-switch" role="group" aria-label={t('Sprache wählen')}>
      {([{code:'de',label:'DE',name:'Deutsch'},{code:'en',label:'EN',name:'English'},{code:'fa',label:'فارسی',name:'فارسی'}] as {code:Language;label:string;name:string}[]).map(item=><Button key={item.code} type="button" variant="onDark" size="sm" className="language-button" aria-label={item.name} aria-pressed={language===item.code} onClick={()=>setLanguage(item.code)}>{item.label}</Button>)}
    </div>
    <Button variant="onDark" type="button" size="icon" className="theme-toggle" aria-label={t(dark?'Hellen Modus aktivieren':'Dunklen Modus aktivieren')} title={t(dark?'Hellen Modus aktivieren':'Dunklen Modus aktivieren')} aria-pressed={dark} onClick={toggleTheme}>{dark?<Sun/>:<Moon/>}</Button>
  </div>;
}
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/preferences';

export function PreferenceControls(){
  const {dark,toggleTheme}=useLanguage();
  const label=dark?'Hellen Modus aktivieren':'Dunklen Modus aktivieren';
  return <div className="preference-controls">
    <Button variant="onDark" type="button" size="icon" className="theme-toggle" aria-label={label} title={label} aria-pressed={dark} onClick={toggleTheme}>{dark?<Sun/>:<Moon/>}</Button>
  </div>;
}

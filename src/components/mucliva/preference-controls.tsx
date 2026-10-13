import { Moon, Sun } from 'lucide-react';
import { Link, useLocation } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/preferences';
import { alternatesFor } from '@/lib/i18n-routes';

export function LanguageSwitch({ className = '' }: { className?: string }) {
  const { language, t } = useLanguage();
  const { pathname, hash } = useLocation();
  const alt = alternatesFor(pathname);
  return (
    <nav className={`language-switch ${className}`} aria-label={t('Sprache wählen')}>
      {(['de', 'en'] as const).map((l, i) => (
        <span key={l} className="contents">
          {i > 0 && <span aria-hidden="true" className="language-sep">|</span>}
          <Link to={alt[l] as never} {...(hash ? { hash } : {})} hrefLang={l} lang={l} aria-current={language === l ? 'true' : undefined} className={language === l ? 'active' : undefined}>
            {l.toUpperCase()}
          </Link>
        </span>
      ))}
    </nav>
  );
}

export function PreferenceControls() {
  const { dark, toggleTheme, t } = useLanguage();
  const label = t(dark ? 'Hellen Modus aktivieren' : 'Dunklen Modus aktivieren');
  return <div className="preference-controls">
    <LanguageSwitch className="language-switch--desktop" />
    <Button variant="onDark" type="button" size="icon" className="theme-toggle" aria-label={label} title={label} aria-pressed={dark} onClick={toggleTheme}>{dark ? <Sun /> : <Moon />}</Button>
  </div>;
}

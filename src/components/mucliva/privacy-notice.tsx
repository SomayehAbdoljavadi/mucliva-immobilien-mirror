import { Link } from './localized-link';
import { useEffect, useState } from "react";

// Information-only notice: the site uses strictly necessary technologies only,
// so no consent choice is required. Dismissal is remembered (non-personal flag).
const KEY = "mucliva-privacy-notice";

export function PrivacyNotice() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    try { if (!localStorage.getItem(KEY)) setOpen(true); } catch { setOpen(true); }
  }, []);
  if (!open) return null;
  const close = () => {
    try { localStorage.setItem(KEY, "1"); } catch { /* ignore */ }
    setOpen(false);
  };
  return (
    <aside className="privacy-notice" role="region" aria-label="Hinweis zum Datenschutz">
      <div className="privacy-notice__text">
        <p className="privacy-notice__title">Wir respektieren Ihre Privatsphäre</p>
        <p>
          Wir verwenden ausschließlich notwendige Technologien, um unsere Website sicher und zuverlässig bereitzustellen. Analyse-, Marketing- oder Tracking-Dienste setzen wir nicht ein.{" "}
          <Link to="/datenschutz">Datenschutzerklärung</Link> · <Link to="/impressum">Impressum</Link>
        </p>
      </div>
      <button type="button" className="privacy-notice__btn" onClick={close}>Verstanden</button>
    </aside>
  );
}

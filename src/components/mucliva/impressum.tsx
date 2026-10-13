import { useLanguage } from '@/lib/preferences';

function Pending({ children }: { children: string }) {
  const { t } = useLanguage();
  return <span className="legal-pending">{t(children)}</span>;
}

export function ImpressumPage() {
  const { t } = useLanguage();
  return (
    <article className="container legal-page page-enter">
      <span className="eyebrow">{t('RECHTLICHE INFORMATIONEN')}</span>
      <h1>{t('Impressum')}</h1>
      <p className="legal-subtitle">{t('Rechtliche Angaben zu MUCLIVA Immobilien')}</p>

      <section className="legal-block">
        <h2>{t('Angaben gemäß § 5 DDG')}</h2>
        <p>
          <strong>MUCLIVA Immobilien</strong><br />{t('Eine Marke der Munich Construction GmbH')}
        </p>
        <address className="not-italic">
          <p>Munich Construction GmbH<br />Heiterwanger Straße 30<br />81373 München<br />{t('Deutschland')}</p>
        </address>
      </section>

      <section className="legal-block">
        <h2>{t('Vertreten durch')}</h2>
        <p>{t('Geschäftsführer')}:<br />Dipl.-Ing. Mehdi Mardi</p>
      </section>

      <section className="legal-block">
        <h2>{t('Kontakt')}</h2>
        <p>
          {t('Telefon')}: <a href="tel:+498957843675">+49 (0) 89 57 84 3675</a><br />
          {t('E-Mail')}: <Pending>Wird ergänzt</Pending><br />
          {t('Website')}: <Pending>Wird ergänzt</Pending>
        </p>
      </section>

      <section className="legal-block">
        <h2>{t('Handelsregister')}</h2>
        <p>{t('Registergericht')}: {t('Amtsgericht München')}<br />{t('Registernummer')}: HRB 264907</p>
      </section>

      <section className="legal-block">
        <h2>{t('Umsatzsteuer-Identifikationsnummer')}</h2>
        <p><Pending>Wird ergänzt</Pending></p>
      </section>

      <section className="legal-block">
        <h2>{t('Gewerberechtliche Angaben')}</h2>
        <p>
          {t('Tätigkeit')}: {t('Immobilienvermittlung / Immobilienmakler')}<br />
          {t('Rechtsgrundlage')}: § 34c Abs. 1 Satz 1 Nr. 1 GewO<br />
          {t('Status der Gewerbeerlaubnis')}: <Pending>In Klärung</Pending>
        </p>
      </section>

      <section className="legal-block">
        <h2>{t('Zuständige Aufsichtsbehörde')}</h2>
        <p>
          {t('Industrie- und Handelskammer für München und Oberbayern')}<br />Max-Joseph-Straße 2<br />80333 München<br />{t('Deutschland')}<br />
          <a href="https://www.ihk-muenchen.de" target="_blank" rel="noopener noreferrer">www.ihk-muenchen.de</a>
        </p>
      </section>

      <section className="legal-block">
        <h2>{t('Berufsrechtliche Regelungen')}</h2>
        <ul>
          <li><a href="https://www.gesetze-im-internet.de/gewo/__34c.html" target="_blank" rel="noopener noreferrer">§ 34c Gewerbeordnung (GewO)</a></li>
          <li><a href="https://www.gesetze-im-internet.de/mabv/" target="_blank" rel="noopener noreferrer">Makler- und Bauträgerverordnung (MaBV)</a></li>
        </ul>
      </section>

      <section className="legal-block">
        <h2>{t('Verantwortlich für redaktionelle Inhalte gemäß § 18 Abs. 2 MStV')}</h2>
        <p>Mehdi Mardi<br />Heiterwanger Straße 30<br />81373 München</p>
      </section>
    </article>
  );
}

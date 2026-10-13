import { Link } from './localized-link';
import { useLanguage } from '@/lib/preferences';
import { PrivacyPolicyEn } from './privacy-policy-en';

export function DatenschutzPage() {
  const { language } = useLanguage();
  if (language === 'en') return <PrivacyPolicyEn />;
  return (
    <article className="container legal-page page-enter">
      <span className="eyebrow">RECHTLICHE INFORMATIONEN</span>
      <h1>Datenschutz</h1>
      <p className="legal-subtitle">Informationen zur Verarbeitung personenbezogener Daten auf mucliva.de</p>

      <section className="legal-block">
        <h2>1. Verantwortliche Stelle</h2>
        <p>
          Munich Construction GmbH<br />MUCLIVA Immobilien – eine Marke der Munich Construction GmbH<br />
          Heiterwanger Straße 30<br />81373 München<br />Deutschland
        </p>
        <p>
          Vertreten durch den Geschäftsführer Dipl.-Ing. Mehdi Mardi<br />
          Telefon: <a href="tel:+498957843675">+49 (0) 89 57 84 3675</a><br />
          E-Mail: <a href="mailto:info@mucliva.de">info@mucliva.de</a>
        </p>
      </section>

      <section className="legal-block">
        <h2>2. Aufruf der Website</h2>
        <p>
          Beim Aufruf dieser Website verarbeitet unser Hostinganbieter technisch notwendige Verbindungsdaten wie IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite sowie Browser- und Geräteinformationen. Diese Verarbeitung ist erforderlich, um die Website sicher und stabil auszuliefern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt im sicheren und fehlerfreien Betrieb der Website.
        </p>
      </section>

      <section className="legal-block">
        <h2>3. Hosting und Datenbank</h2>
        <p>
          Die Website wird über die Plattform Lovable bereitgestellt. Formularanfragen werden in der zugehörigen Datenbankumgebung (Lovable Cloud) gespeichert. Die Anbieter verarbeiten die Daten in unserem Auftrag. Soweit dabei Daten in Länder außerhalb der EU bzw. des EWR übermittelt werden, erfolgt dies auf Grundlage geeigneter Garantien gemäß Art. 44 ff. DSGVO, insbesondere von EU-Standardvertragsklauseln oder eines Angemessenheitsbeschlusses.
        </p>
      </section>

      <section className="legal-block">
        <h2>4. Kontaktformular und Immobilienanfragen</h2>
        <p>Wenn Sie uns über das Kontaktformular, die Bewertungs- oder Verkaufsanfrage oder ein Suchprofil kontaktieren, verarbeiten wir folgende Angaben:</p>
        <ul>
          <li>Name, E-Mail-Adresse und – freiwillig – Telefonnummer</li>
          <li>Ihre Nachricht, Ihr Anliegen und den bevorzugten Kontaktweg</li>
          <li>Angaben zur Immobilie, etwa Art, Postleitzahl, Stadtteil, optional Straße, Fläche, Zimmerzahl, Baujahr, Zustand und Zeitrahmen</li>
          <li>bei Suchprofilen: gewünschte Lagen, Budget, Fläche, Zimmerzahl und Zeitrahmen</li>
          <li>Datum und Uhrzeit der Anfrage</li>
        </ul>
        <p>
          Wir verwenden diese Daten ausschließlich zur Bearbeitung Ihrer Anfrage und zur Kontaktaufnahme mit Ihnen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen auf Ihre Anfrage) sowie Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO, die Sie jederzeit mit Wirkung für die Zukunft widerrufen können. Nach dem Absenden wird Ihre Anfrage zusätzlich per E-Mail an unser Postfach info@mucliva.de weitergeleitet; der Versand erfolgt über den E-Mail-Dienst der Plattform Lovable. Eine automatische Preisbewertung oder automatisierte Entscheidungsfindung findet nicht statt.
        </p>
        <p>
          Zum Schutz vor Missbrauch prüfen wir Formularübermittlungen technisch, unter anderem durch ein verstecktes Prüffeld, ein zeitlich begrenztes Sicherheitsmerkmal und eine Begrenzung der Anzahl von Anfragen je E-Mail-Adresse. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt in der Abwehr von Spam und Missbrauch.
        </p>
      </section>

      <section className="legal-block">
        <h2>5. Speicherdauer</h2>
        <p>
          Anfragen, die nicht zu einer Geschäftsbeziehung führen, löschen wir grundsätzlich sechs Monate nach dem letzten relevanten Kontakt, sofern keine gesetzlichen Aufbewahrungspflichten oder andere rechtmäßige Gründe für eine längere Speicherung bestehen. Die Löschung erfolgt automatisiert und endgültig in unserer Datenbank. Bei zustande kommenden Geschäftsbeziehungen gelten gesonderte gesetzliche Aufbewahrungsfristen. Auf Ihren Wunsch löschen wir Ihre Anfragedaten auch früher, soweit keine gesetzlichen Pflichten entgegenstehen.
        </p>
      </section>

      <section className="legal-block">
        <h2>6. Cookies, lokale Speicherung und Tracking</h2>
        <p>
          Diese Website setzt keine Analyse-, Werbe- oder Tracking-Dienste ein und verwendet keine Cookies zu solchen Zwecken. Im lokalen Speicher Ihres Browsers werden ausschließlich folgende nicht personenbezogene Einstellungen abgelegt: der gewählte helle oder dunkle Darstellungsmodus, die gewählte Sprache (Deutsch oder Englisch) sowie die Information, dass Sie unseren Datenschutzhinweis geschlossen haben, damit er nicht erneut erscheint. Diese Einträge sind für die von Ihnen gewünschte Darstellung technisch erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG); eine Einwilligung ist daher nicht erforderlich, und es gibt keine optionalen Cookie-Kategorien. Sie können die Einträge jederzeit über die Browsereinstellungen löschen. Formulareingaben werden nicht im Browser gespeichert.
        </p>
        <p>Schriftarten werden lokal von unserem Server bereitgestellt; es erfolgt keine Verbindung zu externen Schriftanbietern.</p>
      </section>

      <section className="legal-block">
        <h2>7. Ihre Rechte</h2>
        <p>Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf:</p>
        <ul>
          <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21 DSGVO)</li>
          <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
        </ul>
        <p>Zur Ausübung Ihrer Rechte genügt eine Nachricht an <a href="mailto:info@mucliva.de">info@mucliva.de</a>.</p>
      </section>

      <section className="legal-block">
        <h2>8. Beschwerderecht</h2>
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Für uns zuständig ist:<br />
          Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />Promenade 18<br />91522 Ansbach<br />
          <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer">www.lda.bayern.de</a>
        </p>
      </section>

      <section className="legal-block">
        <p>Weitere Angaben zum Anbieter finden Sie im <Link to="/impressum">Impressum</Link>.</p>
      </section>
    </article>
  );
}

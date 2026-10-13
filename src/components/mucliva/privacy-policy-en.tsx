import { Link } from './localized-link';

// English courtesy translation of the Datenschutz page; the German version is authoritative.
export function PrivacyPolicyEn() {
  return (
    <article className="container legal-page page-enter">
      <span className="eyebrow">LEGAL INFORMATION</span>
      <h1>Privacy Policy</h1>
      <p className="legal-subtitle">Information on the processing of personal data on mucliva.de</p>
      <p className="legal-subtitle"><em>This is a translation for your convenience. The German version is legally authoritative.</em></p>

      <section className="legal-block">
        <h2>1. Controller</h2>
        <p>
          Munich Construction GmbH<br />MUCLIVA Immobilien – a brand of Munich Construction GmbH<br />
          Heiterwanger Straße 30<br />81373 München<br />Germany
        </p>
        <p>
          Represented by the Managing Director Dipl.-Ing. Mehdi Mardi<br />
          Phone: <a href="tel:+498957843675">+49 (0) 89 57 84 3675</a><br />
          Email: <a href="mailto:info@mucliva.de">info@mucliva.de</a>
        </p>
      </section>

      <section className="legal-block">
        <h2>2. Visiting the website</h2>
        <p>
          When you visit this website, our hosting provider processes technically necessary connection data such as your IP address, the date and time of access, the page requested, and browser and device information. This processing is required to deliver the website securely and reliably. The legal basis is Art. 6(1)(f) GDPR; our legitimate interest lies in the secure and error-free operation of the website.
        </p>
      </section>

      <section className="legal-block">
        <h2>3. Hosting and database</h2>
        <p>
          The website is provided via the Lovable platform. Form inquiries are stored in the associated database environment (Lovable Cloud). The providers process the data on our behalf. Where data is transferred to countries outside the EU or EEA, this takes place on the basis of appropriate safeguards pursuant to Art. 44 et seq. GDPR, in particular EU Standard Contractual Clauses or an adequacy decision.
        </p>
      </section>

      <section className="legal-block">
        <h2>4. Contact form and property inquiries</h2>
        <p>If you contact us via the contact form, the valuation or selling inquiry, or a search profile, we process the following information:</p>
        <ul>
          <li>Name, email address and – optionally – phone number</li>
          <li>Your message, your request and your preferred contact method</li>
          <li>Property details such as type, postcode, district, optionally street, floor area, number of rooms, year of construction, condition and timeframe</li>
          <li>For search profiles: preferred locations, budget, floor area, number of rooms and timeframe</li>
          <li>Date and time of the inquiry</li>
        </ul>
        <p>
          We use this data exclusively to process your inquiry and to contact you. The legal basis is Art. 6(1)(b) GDPR (pre-contractual measures taken at your request) and your consent pursuant to Art. 6(1)(a) GDPR, which you may withdraw at any time with effect for the future. After submission, your inquiry is also forwarded by email to our mailbox info@mucliva.de; it is sent via the email service of the Lovable platform. No automated price valuation or automated decision-making takes place.
        </p>
        <p>
          To protect against misuse, we check form submissions technically, including by means of a hidden check field, a time-limited security token and a limit on the number of inquiries per email address. The legal basis is Art. 6(1)(f) GDPR; our legitimate interest lies in preventing spam and misuse.
        </p>
      </section>

      <section className="legal-block">
        <h2>5. Storage period</h2>
        <p>
          Inquiries that do not lead to a business relationship are generally deleted six months after the last relevant contact, unless statutory retention obligations or other lawful reasons require longer storage. Deletion is automated and permanent in our database. Where a business relationship is established, separate statutory retention periods apply. At your request, we will delete your inquiry data earlier, provided no legal obligations prevent this.
        </p>
      </section>

      <section className="legal-block">
        <h2>6. Cookies, local storage and tracking</h2>
        <p>
          This website does not use analytics, advertising or tracking services and does not use cookies for such purposes. Only the following non-personal settings are stored in your browser's local storage: your chosen light or dark display mode, your chosen language (German or English), and the fact that you have closed our privacy notice so that it does not appear again. These entries are technically necessary to provide the display you requested (Section 25(2) No. 2 TDDDG); consent is therefore not required, and there are no optional cookie categories. You can delete them at any time via your browser settings. Form entries are not stored in the browser.
        </p>
        <p>Fonts are served locally from our server; no connection is made to external font providers.</p>
      </section>

      <section className="legal-block">
        <h2>7. Your rights</h2>
        <p>Subject to the statutory requirements, you have the right to:</p>
        <ul>
          <li>Access to your stored data (Art. 15 GDPR)</li>
          <li>Rectification of inaccurate data (Art. 16 GDPR)</li>
          <li>Erasure (Art. 17 GDPR)</li>
          <li>Restriction of processing (Art. 18 GDPR)</li>
          <li>Data portability (Art. 20 GDPR)</li>
          <li>Object to processing based on Art. 6(1)(f) GDPR (Art. 21 GDPR)</li>
          <li>Withdraw consent given, with effect for the future (Art. 7(3) GDPR)</li>
        </ul>
        <p>To exercise your rights, simply send a message to <a href="mailto:info@mucliva.de">info@mucliva.de</a>.</p>
      </section>

      <section className="legal-block">
        <h2>8. Right to lodge a complaint</h2>
        <p>
          You have the right to lodge a complaint with a data protection supervisory authority. The authority responsible for us is:<br />
          Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />Promenade 18<br />91522 Ansbach<br />
          <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer">www.lda.bayern.de</a>
        </p>
      </section>

      <section className="legal-block">
        <p>Further information about the provider can be found in the <Link to="/impressum">Legal Notice</Link>.</p>
      </section>
    </article>
  );
}

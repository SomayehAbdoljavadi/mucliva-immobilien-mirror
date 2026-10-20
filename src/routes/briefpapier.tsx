import { createFileRoute } from '@tanstack/react-router';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BASE = '/downloads/briefpapier/';
const files = [
  ['A4 PDF', 'MUCLIVA_Letterhead_A4.pdf'],
  ['A5 PDF', 'MUCLIVA_Letterhead_A5.pdf'],
  ['A4 Word', 'MUCLIVA_Letterhead_A4.docx'],
  ['A5 Word', 'MUCLIVA_Letterhead_A5.docx'],
  ['A4 PNG-Vorschau', 'MUCLIVA_Letterhead_A4.png'],
  ['A5 PNG-Vorschau', 'MUCLIVA_Letterhead_A5.png'],
  ['A4 bearbeitbar (HTML)', 'MUCLIVA_Letterhead_A4_Editable.html'],
  ['A5 bearbeitbar (HTML)', 'MUCLIVA_Letterhead_A5_Editable.html'],
  ['Komplettpaket (ZIP)', 'MUCLIVA_Letterhead_Package.zip'],
] as const;

export const Route = createFileRoute('/briefpapier')({
  head: () => ({
    meta: [
      { title: 'Briefpapier A4 & A5 | MUCLIVA Immobilien' },
      { name: 'description', content: 'Interne Vorschau und Downloads des MUCLIVA Geschäftsbriefpapiers in DIN A4 und DIN A5.' },
      { property: 'og:title', content: 'Briefpapier A4 & A5 | MUCLIVA Immobilien' },
      { property: 'og:description', content: 'Interne Vorschau des MUCLIVA Briefpapiers.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'robots', content: 'noindex, nofollow' },
    ],
  }),
  component: LetterheadPage,
});

function LetterheadPage() {
  return (
    <section className="container py-16">
      <p className="eyebrow">INTERN</p>
      <h1 className="mt-3 text-3xl">MUCLIVA Briefpapier</h1>
      <p className="mt-2 text-muted-foreground">DIN A4 (210 × 297 mm) und DIN A5 (148 × 210 mm), Hochformat, leere Vorlagen.</p>
      <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
        {['A4', 'A5'].map((f) => (
          <figure key={f}>
            <img src={`${BASE}MUCLIVA_Letterhead_${f}.png`} alt={`Briefpapier ${f}`} className="w-full max-w-md border border-border shadow-sm" loading="lazy" />
            <figcaption className="mt-2 text-sm text-muted-foreground">DIN {f}</figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        {files.map(([label, name]) => (
          <Button key={name} variant="outline" asChild>
            <a href={BASE + name} download={name}><Download />{label}</a>
          </Button>
        ))}
      </div>
    </section>
  );
}

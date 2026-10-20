import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BASE = '/downloads/visitenkarte/';
const files = [
  ['Vorderseite PDF', 'MUCLIVA_BusinessCard_Test_Front.pdf'],
  ['Rückseite PDF', 'MUCLIVA_BusinessCard_Test_Back.pdf'],
  ['Beidseitig PDF', 'MUCLIVA_BusinessCard_Test_BothSides.pdf'],
  ['Vorderseite PNG', 'MUCLIVA_BusinessCard_Test_Front.png'],
  ['Rückseite PNG', 'MUCLIVA_BusinessCard_Test_Back.png'],
  ['Alle Dateien (ZIP)', 'MUCLIVA_BusinessCard_Test_All.zip'],
  ['A4 Testdruck PDF', 'MUCLIVA_BusinessCard_A4_TestPrint.pdf'],
  ['A4 Testdruck PNG', 'MUCLIVA_BusinessCard_A4_TestPrint.png'],
  ['A4 Testdruck mit Schnittmarken', 'MUCLIVA_BusinessCard_A4_TestPrint_CropMarks.pdf'],
] as const;

export const Route = createFileRoute('/visitenkarte')({
  head: () => ({
    meta: [
      { title: 'Visitenkarte – Testdruck | MUCLIVA Immobilien' },
      { name: 'description', content: 'Interne Vorschau und Downloads der MUCLIVA Visitenkarte (Testdruck).' },
      { property: 'og:title', content: 'Visitenkarte – Testdruck | MUCLIVA Immobilien' },
      { property: 'og:description', content: 'Interne Vorschau der MUCLIVA Visitenkarte.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'robots', content: 'noindex, nofollow' },
    ],
  }),
  component: CardPage,
});

function CardPage() {
  const [actual, setActual] = useState(false);
  // 91 × 61 mm artwork incl. 3 mm bleed
  const style = actual ? { width: '91mm', height: '61mm' } : { width: '100%', maxWidth: '640px' };
  return (
    <section className="container py-16">
      <p className="eyebrow">PRINT TEST — NOT PDF/X-4 CERTIFIED</p>
      <h1 className="mt-3 text-3xl">Visitenkarte Dipl.-Ing. Mehdi Mardi</h1>
      <p className="mt-2 text-muted-foreground">85 × 55 mm Endformat, 3 mm Beschnitt (91 × 61 mm), RGB-Testdatei.</p>
      <div className="mt-6 flex gap-2">
        <Button variant={actual ? 'default' : 'outline'} aria-pressed={!actual} onClick={() => setActual(false)}>Vergrößert</Button>
        <Button variant={actual ? 'outline' : 'default'} aria-pressed={actual} onClick={() => setActual(true)}>Originalgröße</Button>
      </div>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {[['Vorderseite', 'Front'], ['Rückseite', 'Back']].map(([label, f]) => (
          <figure key={f}>
            <img src={`${BASE}MUCLIVA_BusinessCard_Test_${f}.png`} alt={`Visitenkarte ${label}`} style={style} className="border border-border shadow-sm" />
            <figcaption className="mt-2 text-sm text-muted-foreground">{label}</figcaption>
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

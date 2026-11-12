import { useMemo, useState } from 'react';
import QRCode from 'qrcode';
import { Phone, Mail, Globe, MapPin, Download, Building2, MessageCircle, Share2, Link2, QrCode, X } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { cardAddress, cardEmail, cardOffice, PRODUCTION_ORIGIN, type DigitalCard } from '@/lib/digital-cards';

const copy = {
  de: { eyebrow: 'MUCLIVA Immobilien · Digitale Visitenkarte', mobile: 'Mobil anrufen', office: 'Büro anrufen', wa: 'WhatsApp', mail: 'E-Mail senden', save: 'Kontakt speichern', share: 'Profil teilen', copyLink: 'Link kopieren', showQr: 'QR-Code anzeigen', copied: 'Link kopiert', copyFail: 'Link konnte nicht kopiert werden', lMobile: 'Mobil', lOffice: 'Büro', lMail: 'E-Mail', lWeb: 'Web', lAddr: 'Büroadresse', qrTitle: 'Scannen, um diese Visitenkarte zu öffnen', qrHelp: 'Kamera auf den Code richten, Link öffnen und dort „Kontakt speichern“ tippen.', png: 'PNG herunterladen', svg: 'SVG herunterladen', close: 'Schließen', company: 'Munich Construction GmbH', alt: 'Porträt von' },
  en: { eyebrow: 'MUCLIVA Immobilien · Digital business card', mobile: 'Call mobile', office: 'Call office', wa: 'WhatsApp', mail: 'Send email', save: 'Save contact', share: 'Share profile', copyLink: 'Copy link', showQr: 'Show QR code', copied: 'Link copied', copyFail: 'Could not copy the link', lMobile: 'Mobile', lOffice: 'Office', lMail: 'Email', lWeb: 'Web', lAddr: 'Office address', qrTitle: 'Scan to open this business card', qrHelp: 'Point your camera at the code, open the link and tap “Save contact”.', png: 'Download PNG', svg: 'Download SVG', close: 'Close', company: 'Munich Construction GmbH', alt: 'Portrait of' },
};

/** Builds a high-contrast QR SVG (black on white, 4-module quiet zone) synchronously, so SSR and client match. */
export function qrSvg(text: string) {
  const qr = QRCode.create(text, { errorCorrectionLevel: 'M' });
  const n = qr.modules.size; const q = 4; const s = n + q * 2; let d = '';
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (qr.modules.get(y, x)) d += `M${x + q} ${y + q}h1v1h-1z`;
  return { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${s}" shape-rendering="crispEdges"><rect width="${s}" height="${s}" fill="#ffffff"/><path d="${d}" fill="#000000"/></svg>`, qr, size: s };
}

function download(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob); const a = document.createElement('a');
  a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30_000);
}

export function DigitalCardPage({ card, lang }: { card: DigitalCard; lang: 'de' | 'en' }) {
  const c = copy[lang];
  const url = PRODUCTION_ORIGIN + card.paths[lang];
  const { svg, qr, size } = useMemo(() => qrSvg(url), [url]);
  const [open, setOpen] = useState(false);
  const file = `${card.filePrefix}_QR_${lang.toUpperCase()}`;

  const copyLink = async () => {
    try { await navigator.clipboard.writeText(url); toast.success(c.copied); } catch { toast.error(c.copyFail); }
  };
  const share = async () => {
    if (navigator.share) { try { await navigator.share({ title: card.name, url }); return; } catch (e) { if ((e as DOMException).name === 'AbortError') return; } }
    await copyLink();
  };
  const downloadPng = () => {
    const scale = 24; const canvas = document.createElement('canvas'); canvas.width = canvas.height = size * scale;
    const ctx = canvas.getContext('2d')!; ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, canvas.width, canvas.height); ctx.fillStyle = '#000';
    const n = qr.modules.size;
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (qr.modules.get(y, x)) ctx.fillRect((x + 4) * scale, (y + 4) * scale, scale, scale);
    canvas.toBlob((b) => b && download(b, `${file}.png`), 'image/png');
  };
  const downloadSvg = () => download(new Blob([svg], { type: 'image/svg+xml' }), `${file}.svg`);
  const ext = { target: '_blank', rel: 'noopener' };

  const actions = [
    { label: c.mobile, href: `tel:${card.mobile.e164}`, icon: Phone },
    { label: c.office, href: `tel:${cardOffice.e164}`, icon: Building2 },
    { label: c.wa, href: `https://wa.me/${card.whatsapp}`, icon: MessageCircle, ext: true },
    { label: c.mail, href: `mailto:${cardEmail}`, icon: Mail },
  ];

  return (
    <section className="container py-12 md:py-20">
      <div className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        <img src={card.photo.large} srcSet={`${card.photo.small} 640w, ${card.photo.large} 1254w`} sizes="(min-width: 768px) 420px, 90vw"
          width={1254} height={1254} alt={`${c.alt} ${card.name}`} className="aspect-square w-full rounded-sm border border-border object-cover shadow-sm" />
        <div>
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="mt-3 text-4xl md:text-5xl">{card.name}</h1>
          <p className="mt-3 text-xl text-primary">{card.title[lang]}</p>
          {card.specialty && <p className="mt-1 text-muted-foreground">{card.specialty[lang]}</p>}
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {actions.map(({ label, href, icon: Icon, ext: e }) => (
              <Button key={href} variant="outline" size="lg" asChild className="justify-start">
                <a href={href} {...(e ? ext : {})}><Icon />{label}</a>
              </Button>
            ))}
            <Button size="lg" asChild className="justify-start sm:col-span-2">
              <a href={card.vcf} download={card.vcf.split('/').pop()}><Download />{c.save}</a>
            </Button>
            <Button variant="outline" size="lg" className="justify-start" onClick={share}><Share2 />{c.share}</Button>
            <Button variant="outline" size="lg" className="justify-start" onClick={copyLink}><Link2 />{c.copyLink}</Button>
            <Button variant="outline" size="lg" className="justify-start sm:col-span-2" onClick={() => setOpen(true)}><QrCode />{c.showQr}</Button>
          </div>
          <dl className="mt-10 grid gap-4 border-t border-border pt-8 text-sm">
            <Row icon={Phone} label={c.lMobile}><a href={`tel:${card.mobile.e164}`}>{card.mobile.display}</a></Row>
            <Row icon={Building2} label={c.lOffice}><a href={`tel:${cardOffice.e164}`}>{cardOffice.display}</a></Row>
            <Row icon={Mail} label={c.lMail}><a href={`mailto:${cardEmail}`}>{cardEmail}</a></Row>
            <Row icon={Globe} label={c.lWeb}><a href="https://mucliva.de" {...ext}>www.mucliva.de</a>{card.extraWebsite && <> · <a href={card.extraWebsite} {...ext}>{card.extraWebsite.replace('https://', '')}</a></>}</Row>
            <Row icon={MapPin} label={c.lAddr}>{cardAddress}<br /><span className="text-muted-foreground">MUCLIVA Immobilien – {c.company}</span></Row>
          </dl>
        </div>
      </div>

      {open && (
        <div role="dialog" aria-modal="true" aria-label={c.qrTitle} className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 overflow-auto bg-background p-6" onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => setOpen(false)} aria-label={c.close} autoFocus><X /></Button>
          <p className="text-center text-lg">{card.name}</p>
          <div className="w-[min(80vw,70vh,520px)] bg-[#ffffff] p-2" dangerouslySetInnerHTML={{ __html: svg }} />
          <p className="max-w-sm text-center font-medium">{c.qrTitle}</p>
          <p className="max-w-sm text-center text-sm text-muted-foreground">{c.qrHelp}</p>
          <p className="break-all text-center text-xs text-muted-foreground">{url}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="outline" onClick={downloadPng}><Download />{c.png}</Button>
            <Button variant="outline" onClick={downloadSvg}><Download />{c.svg}</Button>
          </div>
        </div>
      )}
    </section>
  );
}

function Row({ icon: Icon, label, children }: { icon: typeof Phone; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
      <dt className="w-24 shrink-0 text-muted-foreground">{label}</dt>
      <dd className="min-w-0 break-words [&_a]:underline-offset-4 hover:[&_a]:underline">{children}</dd>
    </div>
  );
}

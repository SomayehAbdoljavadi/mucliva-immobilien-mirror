import * as React from 'react'
import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

const KIND_LABELS: Record<string, string> = {
  kontakt: 'Kontaktanfrage',
  bewertung: 'Bewertungsanfrage',
  verkaufen: 'Verkaufsanfrage',
  suchprofil: 'Suchprofil',
}
const FIELD_LABELS: Record<string, string> = {
  type: 'Immobilienart', postcode: 'Postleitzahl', district: 'Ort / Stadtteil', street: 'Straße', area: 'Fläche (m²)',
  rooms: 'Zimmer', year: 'Baujahr', condition: 'Zustand', timeframe: 'Zeitrahmen', districts: 'Gewünschte Lagen',
  budget: 'Budget (€)', method: 'Bevorzugter Kontakt', category: 'Anliegen', message: 'Nachricht',
}

interface Props { id?: string; kind?: string; name?: string; email?: string; phone?: string; submittedAt?: string; details?: Record<string, string> }

const InquiryNotification = ({ id = '', kind = 'kontakt', name = '', email = '', phone = '', submittedAt = '', details = {} }: Props) => (
  <Html lang="de" dir="ltr">
    <Head />
    <Preview>{`Neue ${KIND_LABELS[kind] ?? 'Anfrage'} von ${name}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>MUCLIVA IMMOBILIEN</Text>
        <Hr style={gold} />
        <Heading style={h1}>{`Neue ${KIND_LABELS[kind] ?? 'Anfrage'}`}</Heading>
        <Text style={meta}>Eingegangen am {submittedAt} · Anfragenummer {id}</Text>
        <Section style={box}>
          <Text style={row}><strong>Name:</strong> {name}</Text>
          <Text style={row}><strong>E-Mail:</strong> {email}</Text>
          {phone ? <Text style={row}><strong>Telefon:</strong> {phone}</Text> : null}
        </Section>
        <Section style={box}>
          {Object.entries(details).filter(([, v]) => v).map(([k, v]) => (
            <Text key={k} style={row}><strong>{FIELD_LABELS[k] ?? k}:</strong> {k === 'districts' ? v.split('|').join(', ') : v}</Text>
          ))}
        </Section>
        <Text style={footer}>Antworten Sie direkt auf diese E-Mail, um die anfragende Person zu erreichen.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: InquiryNotification,
  subject: (d: Record<string, any>) => `Neue ${KIND_LABELS[d['kind']] ?? 'Anfrage'} – ${d['name'] ?? ''}`,
  displayName: 'Neue Website-Anfrage (intern)',
  to: 'info@mucliva.de',
  previewData: { id: '1b2c-demo', kind: 'bewertung', name: 'Max Mustermann', email: 'max@example.com', phone: '', submittedAt: '13.10.2026, 16:30', details: { type: 'Wohnung', postcode: '80331', district: 'Altstadt', area: '85', rooms: '3', year: '1910', condition: 'Gepflegt', timeframe: 'In 3–6 Monaten' } },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, serif' }
const container = { padding: '28px 25px', maxWidth: '600px' }
const brand = { color: '#1B3D2E', fontSize: '13px', letterSpacing: '3px', margin: 0 }
const gold = { borderColor: '#D4B483', margin: '14px 0 22px' }
const h1 = { color: '#1B3D2E', fontSize: '26px', fontWeight: 400, margin: '0 0 6px' }
const meta = { color: '#5b6b62', fontSize: '13px', margin: '0 0 20px' }
const box = { backgroundColor: '#F8F6F0', padding: '14px 18px', marginBottom: '14px', fontFamily: 'Arial, sans-serif' }
const row = { color: '#1B3D2E', fontSize: '14px', margin: '4px 0', lineHeight: '1.5' }
const footer = { color: '#5b6b62', fontSize: '12px', marginTop: '20px', fontFamily: 'Arial, sans-serif' }

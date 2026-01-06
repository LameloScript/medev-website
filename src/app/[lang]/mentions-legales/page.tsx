import MentionsLegales from '@/src/components/views/legal/mentions-legales'

export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }]
}

export default function MentionsLegalesPage() {
  return <MentionsLegales />
}

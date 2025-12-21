import VenturesContent from '@/src/components/views/ventures/ventures-content'

export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }]
}

export default function VenturesPage() {
  return <VenturesContent />
}

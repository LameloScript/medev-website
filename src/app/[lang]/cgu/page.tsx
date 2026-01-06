import Cgu from '@/src/components/views/legal/cgu'

export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }]
}

export default function CguPage() {
  return <Cgu />
}

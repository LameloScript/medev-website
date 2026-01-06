import Confidentialite from '@/src/components/views/legal/confidentialite'

export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }]
}

export default function ConfidentialitePage() {
  return <Confidentialite />
}

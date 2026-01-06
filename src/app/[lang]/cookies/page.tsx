import Cookies from '@/src/components/views/legal/cookies'

export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }]
}

export default function CookiesPage() {
  return <Cookies />
}

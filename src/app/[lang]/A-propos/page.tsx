import Aboutus from '@/src/components/views/about/about'

export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }]
}

export default function ContactPage() {
  return <Aboutus />
}

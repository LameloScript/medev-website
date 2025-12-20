import ContactForm from '@/src/components/views/contact/contact-form'

export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }]
}

export default function ContactPage() {
  return <ContactForm />
}

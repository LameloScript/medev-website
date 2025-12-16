export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }]
}

export default function ContactPage() {
  return (
    <div>
      <h1>Contact</h1>
      <p>Page en cours de developpement...</p>
    </div>
  );
}

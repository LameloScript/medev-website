export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }]
}

export default function AProposPage() {
  return (
    <div>
      <h1>A propos</h1>
      <p>Page en cours de developpement...</p>
    </div>
  );
}

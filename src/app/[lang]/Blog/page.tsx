export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }]
}

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <p>Page en cours de developpement...</p>
    </div>
  );
}

export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }]
}

export default function ProjectsPage() {
  return (
    <div>
      <h1>Projects</h1>
      <p>Page en cours de developpement...</p>
    </div>
  );
}

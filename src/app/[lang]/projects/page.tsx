import ProjectsContent from '@/src/components/views/projects/projects-content'

export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }]
}

export default function ProjectsPage() {
  return <ProjectsContent />
}

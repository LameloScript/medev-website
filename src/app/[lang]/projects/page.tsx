import ProjectsContent from '@/src/components/views/projects/projects-content'
import { getProjects } from '@/lib/strapi-projects'

export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }]
}

export default async function ProjectsPage() {
  // Récupère les projets depuis l'API Strapi
  const projects = await getProjects()

  return <ProjectsContent projects={projects} />
}

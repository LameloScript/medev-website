import ProjectDetail from '@/src/components/views/projects/project-detail'
import type { Metadata } from 'next'
import { projects } from '@/src/data/projects'
import { getProjectDetailBySlug } from '@/lib/strapi-projects'
import { projectContent } from '@/src/data/projectContent'

export async function generateStaticParams() {
  const slugs = projects.filter(p => p.slug).map(p => p.slug)
  const params: { lang: string; slug: string }[] = []
  for (const lang of ['fr', 'en']) {
    for (const slug of slugs) {
      params.push({ lang, slug })
    }
  }
  return params
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  // Récupère les données depuis Strapi
  const projectData = await getProjectDetailBySlug(params.slug)

  // Si les données Strapi ne sont pas disponibles, utilise le fallback statique
  const fallbackData = projectContent[params.slug] || projectContent['afrikababba']

  return <ProjectDetail data={projectData || fallbackData} />
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug)
  const title = project?.title ?? 'Projet'
  const description = project?.description ?? "Découvrez nos projets et réalisations."
  const image = project?.image
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [{ url: image }] : undefined,
      type: 'website'
    }
  }
}

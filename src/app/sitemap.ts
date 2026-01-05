import { MetadataRoute } from 'next'

const BASE_URL = 'https://medev-group.com'

// Langues supportées
const locales = ['fr', 'en']

// Pages statiques du site
const staticPages = [
  '',           // Page d'accueil
  '/A-propos',
  '/Blog',
  '/Contact',
  '/projects',
  '/ventures',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString()

  // Générer les URLs pour chaque page dans chaque langue
  const staticUrls = locales.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${BASE_URL}/${locale}${page}`,
      lastModified: currentDate,
      changeFrequency: (page === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority: page === '' ? 1.0 : 0.8,
    }))
  )

  // TODO: Ajouter les pages dynamiques (articles de blog, projets)
  // const blogPosts = await getBlogPosts()
  // const projects = await getProjects()

  return [
    // URL racine
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...staticUrls,
  ]
}

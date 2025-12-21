import BlogArticleDetail from '@/src/components/views/blog/blog-article-detail'

export async function generateStaticParams() {
  // Generate paths for all articles
  const articles = [
    'ia-developpement-africain',
    'applications-mobiles-agriculture-cote-ivoire',
    'iot-villes-intelligentes-afrique',
    'geomatique-gestion-ressources-naturelles',
    'cloud-computing-transformation-digitale-pme',
    'cybersecurite-protection-entreprises',
    'design-ux-ui-experiences-conversion',
    'ecommerce-afrique-tendances-2025'
  ]

  const params = []
  for (const lang of ['fr', 'en']) {
    for (const slug of articles) {
      params.push({ lang, slug })
    }
  }
  return params
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  return <BlogArticleDetail slug={params.slug} />
}

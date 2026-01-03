import BlogArticleDetail from '@/src/components/views/blog/blog-article-detail'
import type { Metadata } from 'next'
import { blogArticles } from '@/src/data/blog'

export async function generateStaticParams() {
  const slugs = blogArticles.filter(a => a.slug).map(a => a.slug as string)
  const params: { lang: string; slug: string }[] = []
  for (const lang of ['fr', 'en']) {
    for (const slug of slugs) {
      params.push({ lang, slug })
    }
  }
  return params
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  return <BlogArticleDetail slug={params.slug} />
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = blogArticles.find(a => a.slug === params.slug)
  const title = article?.title ?? 'Article de blog'
  const description = article?.excerpt ?? "Découvrez nos analyses et actualités."
  const image = article?.image
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [{ url: image }] : undefined,
      type: 'article'
    }
  }
}

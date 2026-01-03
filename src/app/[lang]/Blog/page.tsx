import BlogContent from '@/src/components/views/blog/blog-content'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }]
}

export default function BlogPage() {
  return <BlogContent />
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Blog & Actualités',
    description: "Insights, actualités et analyses sur les tendances technologiques et digitales.",
    openGraph: {
      title: 'Blog & Actualités',
      description: "Insights, actualités et analyses sur les tendances technologiques et digitales.",
      type: 'website'
    }
  }
}

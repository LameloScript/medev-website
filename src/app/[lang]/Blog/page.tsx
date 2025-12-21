import BlogContent from '@/src/components/views/blog/blog-content'

export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }]
}

export default function BlogPage() {
  return <BlogContent />
}
'use client'

import Header from '../header/header'
import Breadcrumb from '@/components/ui/breadcrumb'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { blogArticleContent } from '@/src/data/blogContent'

 

export default function BlogArticleDetail({ slug }: { slug: string }) {
  const { lang } = useParams() as { lang: string }
  const article = blogArticleContent[slug] || blogArticleContent['ia-developpement-africain']
  const [currentUrl, setCurrentUrl] = useState('')
  const [copied, setCopied] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href)
    }
  }, [])
  const encodedUrl = encodeURIComponent(currentUrl)
  const encodedTitle = encodeURIComponent(article.title)
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Header darkMode={false} />

      {/* Breadcrumb */}
      <div className="pt-24 pb-8 lg:pt-28 lg:pb-12">
        <div className="container-fixed px-4 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Accueil', href: `/${lang}` },
              { label: 'Blog', href: `/${lang}/Blog` },
              { label: article.category, href: `/${lang}/Blog` },
              { label: article.title }
            ]}
          />
        </div>
      </div>

      {/* Article Header */}
      <article className="container-fixed px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Category & Reading Time */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-secondary text-sm font-nunito uppercase tracking-wider bg-secondary/10 px-4 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-gray-500 text-sm font-nunito">{article.readTime} de lecture</span>
          </div>

          {/* Title */}
          <h1 className="font-bangers text-4xl lg:text-6xl mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={article.author.avatar || '/assets/team/img-1.avif'}
                  alt={article.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-nunito font-semibold text-gray-900">{article.author.name}</div>
                <div className="text-gray-500 text-sm font-nunito">{article.author.role}</div>
              </div>
            </div>
            <div className="sm:ml-auto text-gray-500 text-sm font-nunito">
              {article.date}
            </div>
          </div>

          {/* Featured Image */}
          <div className="my-12 w-full h-96 rounded-2xl overflow-hidden">
            <img
              src={article.image || '/assets/hero.png'}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none font-nunito">
            {/* Introduction */}
            <p className="text-xl leading-relaxed text-gray-700 mb-8 font-medium">
              {article.content.introduction}
            </p>

            {/* Sections */}
            {article.content.sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="font-bangers text-3xl lg:text-4xl mb-6 text-gray-900">
                  {section.title}
                </h2>
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 leading-relaxed mb-4 text-base lg:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            {/* Conclusion */}
            <div className="bg-gray-50 border-l-4 border-secondary p-8 rounded-r-xl my-12">
              <h3 className="font-bangers text-2xl mb-4 text-gray-900">Conclusion</h3>
              <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                {article.content.conclusion}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="py-8 border-t border-gray-200">
            <h4 className="font-nunito font-semibold mb-4 text-gray-900">Tags :</h4>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-nunito hover:bg-secondary/10 hover:text-secondary transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="py-8 border-t border-gray-200">
            <h4 className="font-nunito font-semibold mb-4 text-gray-900">Partager cet article :</h4>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-nunito hover:bg-blue-700 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-600 text-white rounded-full font-nunito hover:bg-green-700 transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-sky-500 text-white rounded-full font-nunito hover:bg-sky-600 transition-colors"
              >
                Twitter
              </a>
              <button
                onClick={copyLink}
                className="px-6 py-3 bg-gray-900 text-white rounded-full font-nunito hover:bg-black transition-colors"
              >
                {copied ? 'Lien copié ✓' : 'Copier le lien'}
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-black mt-20">
        <div className="container-fixed px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bangers text-3xl lg:text-5xl text-white mb-6">
              Besoin d'accompagnement pour votre projet digital ?
            </h2>
            <p className="text-gray-400 font-nunito text-base lg:text-lg mb-8">
              Notre équipe d'experts est prête à transformer vos idées en solutions innovantes.
            </p>
            <a href={`/${lang}/Contact`}>
              <button className="bg-secondary hover:bg-black transition-colors duration-200 flex items-center gap-2 px-6 py-3 rounded-full text-white text-base font-bangers mx-auto">
                <div className="rounded-full bg-gray-100 p-1">
                  <img src="/assets/Vector.png" alt="" className="w-5 h-5" />
                </div>
                Contactez-nous
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20">
        <div className="container-fixed px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h3 className="font-bangers text-3xl lg:text-4xl mb-12 text-center">
              Articles similaires
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <a
                  key={item}
                  href={`/${lang}/Blog`}
                  className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="w-full h-48 relative">
                    <img
                      src={
                        item === 1
                          ? 'https://picsum.photos/seed/related-1/800/600'
                          : item === 2
                          ? 'https://picsum.photos/seed/related-2/800/600'
                          : 'https://picsum.photos/seed/related-3/800/600'
                      }
                      alt={`Article ${item}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-secondary text-xs font-nunito uppercase">Technologie</span>
                    <h4 className="font-bangers text-xl mt-2 mb-2 group-hover:text-secondary transition-colors">
                      Titre de l'article connexe
                    </h4>
                    <p className="text-gray-600 text-sm font-nunito line-clamp-2">
                      Description courte de l'article...
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

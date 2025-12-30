'use client'

import { blogArticles } from '@/src/data/blog'

export default function BlogPreview() {
  const previewArticles = blogArticles.filter(a => !a.featured).slice(0, 3)
  const featured = blogArticles.find(a => a.featured)

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-fixed px-4 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10 lg:mb-14">
          <span className="text-secondary text-sm font-nunito uppercase tracking-wider">Blog</span>
          <h2 className="font-bangers text-4xl lg:text-6xl mt-2 text-gray-900">
            Blog & Actualités
          </h2>
          <p className="text-gray-600 text-base lg:text-lg font-nunito mt-4 max-w-2xl">
            Nos derniers articles et analyses sur la tech et la transformation digitale.
          </p>
        </div>

        {featured && (
          <a href={`/fr/Blog/${featured.slug || 'ia-developpement-africain'}`} className="block mb-10 lg:mb-16">
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all cursor-pointer group border border-gray-200">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="w-full h-56 lg:h-full relative">
                  <img
                    src={featured.image || '/assets/hero.png'}
                    alt={featured.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-secondary text-sm font-nunito uppercase tracking-wider">
                    {featured.category}
                  </span>
                  <h3 className="font-bangers text-3xl lg:text-4xl mt-4 mb-4 group-hover:text-secondary transition-colors text-gray-900">
                    {featured.title}
                  </h3>
                  <p className="text-gray-600 font-nunito mb-6 leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-500 text-sm font-nunito">{featured.date}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500 text-sm font-nunito">{featured.readTime} de lecture</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        )}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {previewArticles.map((article) => (
            <a
              key={article.id}
              href={`/fr/Blog/${article.slug || 'ia-developpement-africain'}`}
              className="block"
            >
              <article className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all hover:scale-105 cursor-pointer group border border-gray-200">
                <div className="w-full h-48 relative border-b border-gray-200">
                  <img
                    src={article.image || '/assets/img-1.png'}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-secondary text-xs font-nunito uppercase tracking-wider">
                    {article.category}
                  </span>
                  <h4 className="font-bangers text-xl lg:text-2xl mt-3 mb-3 group-hover:text-secondary transition-colors text-gray-900">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 font-nunito text-sm mb-4 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-gray-500 text-xs font-nunito">{article.date}</span>
                    <span className="text-secondary text-sm font-nunito group-hover:underline flex items-center gap-1">
                      Lire
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center mt-12">
          <a
            href="/fr/Blog"
            className="bg-secondary px-6 py-3 rounded-full text-white font-bangers hover:bg-orange-600 transition-colors"
          >
            Voir tous les articles
          </a>
        </div>
      </div>
    </section>
  )
}


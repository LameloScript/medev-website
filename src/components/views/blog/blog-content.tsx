'use client'

import { useState } from 'react'
import Header from '../header/header'
import Breadcrumb from '@/components/ui/breadcrumb'
import { blogArticles, blogCategories } from '@/src/data/blog'

// données importées depuis src/data/blog.ts

export default function BlogContent() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")

  const filteredArticles = selectedCategory === "Tous"
    ? blogArticles
    : blogArticles.filter(article => article.category === selectedCategory)

  const featuredArticle = blogArticles.find(article => article.featured)
  const regularArticles = blogArticles.filter(article => !article.featured)

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Header darkMode={false} />

      {/* Breadcrumb and Title Section */}
      <div className="pt-24 pb-8 lg:pt-28 lg:pb-12">
        <div className="container-fixed px-4 lg:px-8 flex flex-col items-center text-center">
          <div className="mb-6 lg:mb-8">
            <Breadcrumb
              items={[
                { label: 'Accueil', href: '/fr' },
                { label: 'Blog' }
              ]}
            />
          </div>
          <h1 className="font-bangers text-4xl lg:text-6xl text-gray-900">
            Blog & Actualités
          </h1>
          <p className="text-gray-600 text-base lg:text-lg font-nunito mt-4 max-w-2xl">
            Découvrez nos insights, actualités et analyses sur les dernières tendances technologiques et digitales.
          </p>
        </div>
      </div>

      {/* Categories Filter */}
      <section className="py-8 border-b border-gray-200">
        <div className="container-fixed px-4 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-nunito transition-all ${
                  selectedCategory === category
                    ? 'bg-secondary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-12 lg:py-20">
        <div className="container-fixed px-4 lg:px-8">
          {/* Featured Article - Only show when "Tous" is selected */}
          {selectedCategory === "Tous" && featuredArticle && (
            <div className="mb-12 lg:mb-16">
              <a href={`/fr/Blog/${featuredArticle.slug || 'ia-developpement-africain'}`} className="block">
                <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all cursor-pointer group border border-gray-200">
                  <div className="grid lg:grid-cols-2 gap-0">
                  <div className="w-full h-64 lg:h-full relative">
                    <img
                      src={featuredArticle.image || '/assets/hero.png'}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="text-secondary text-sm font-nunito uppercase tracking-wider">
                      {featuredArticle.category}
                    </span>
                    <h2 className="font-bangers text-3xl lg:text-4xl mt-4 mb-4 group-hover:text-secondary transition-colors text-gray-900">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-gray-600 font-nunito mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-500 text-sm font-nunito">{featuredArticle.date}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 text-sm font-nunito">{featuredArticle.readTime} de lecture</span>
                    </div>
                  </div>
                </div>
                </div>
              </a>
            </div>
          )}

          {/* Article Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {filteredArticles.filter(article => !article.featured || selectedCategory !== "Tous").map((article) => (
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
                  <h3 className="font-bangers text-xl lg:text-2xl mt-3 mb-3 group-hover:text-secondary transition-colors text-gray-900">
                    {article.title}
                  </h3>
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

          {/* Load More Button */}
          {filteredArticles.length > 6 && (
            <div className="flex items-center justify-center mt-16">
              <button className="bg-secondary flex items-center gap-2 px-6 py-3 rounded-full text-white text-base font-bangers w-fit hover:bg-orange-600 transition-colors">
                <div className="rounded-full bg-gray-100 p-1">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                Charger plus d'articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 lg:py-32 border-t border-gray-200">
        <div className="container-fixed px-4 lg:px-8">
          <div className="bg-gradient-to-br from-secondary/10 to-gray-100 rounded-2xl p-8 lg:p-16 text-center border border-gray-200">
            <h2 className="font-bangers text-3xl lg:text-5xl mb-4 text-gray-900">
              Restez informé des dernières tendances tech
            </h2>
            <p className="text-gray-600 font-nunito text-base lg:text-lg mb-8 max-w-2xl mx-auto">
              Inscrivez-vous à notre newsletter pour recevoir nos meilleurs articles et insights directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-full bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-secondary transition-colors"
              />
              <button className="bg-secondary px-6 py-3 rounded-full text-white font-bangers hover:bg-orange-600 transition-colors whitespace-nowrap">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

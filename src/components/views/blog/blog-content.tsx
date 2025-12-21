'use client'

import { useState } from 'react'
import Header from '../header/header'
import Breadcrumb from '@/components/ui/breadcrumb'

// Types
interface BlogArticle {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image?: string
  featured?: boolean
  slug?: string
}

const blogArticles: BlogArticle[] = [
  {
    id: 1,
    title: "L'IA au service du développement africain",
    excerpt: "Découvrez comment l'intelligence artificielle révolutionne les secteurs clés du continent africain, de l'agriculture intelligente aux villes connectées.",
    category: "Intelligence Artificielle",
    date: "15 décembre 2024",
    readTime: "5 min",
    featured: true,
    slug: "ia-developpement-africain"
  },
  {
    id: 2,
    title: "Les applications mobiles transforment l'agriculture en Côte d'Ivoire",
    excerpt: "Comment les technologies mobiles permettent aux agriculteurs d'optimiser leurs rendements et d'accéder aux marchés.",
    category: "Technologie",
    date: "10 décembre 2024",
    readTime: "4 min",
    slug: "applications-mobiles-agriculture-cote-ivoire"
  },
  {
    id: 3,
    title: "IoT et villes intelligentes : l'avenir urbain africain",
    excerpt: "L'Internet des Objets révolutionne la gestion urbaine en Afrique avec des solutions innovantes pour l'énergie, l'eau et les transports.",
    category: "IoT",
    date: "5 décembre 2024",
    readTime: "6 min"
  },
  {
    id: 4,
    title: "Géomatique et gestion des ressources naturelles",
    excerpt: "Les technologies géospatiales au service de la protection de l'environnement et de la gestion durable des ressources.",
    category: "Géomatique",
    date: "1 décembre 2024",
    readTime: "5 min"
  },
  {
    id: 5,
    title: "Cloud Computing : Accélérer la transformation digitale des PME",
    excerpt: "Comment le cloud permet aux PME africaines de gagner en agilité et en compétitivité sans investissements lourds.",
    category: "Cloud",
    date: "28 novembre 2024",
    readTime: "4 min"
  },
  {
    id: 6,
    title: "Cybersécurité : Protéger les entreprises à l'ère digitale",
    excerpt: "Les meilleures pratiques pour sécuriser vos infrastructures et données dans un monde hyperconnecté.",
    category: "Sécurité",
    date: "25 novembre 2024",
    readTime: "7 min"
  },
  {
    id: 7,
    title: "Design UX/UI : Créer des expériences qui convertissent",
    excerpt: "L'importance d'un design centré utilisateur pour maximiser l'engagement et la conversion.",
    category: "Design",
    date: "20 novembre 2024",
    readTime: "5 min"
  },
  {
    id: 8,
    title: "E-commerce en Afrique : Tendances et opportunités 2025",
    excerpt: "Analyse des tendances du commerce électronique et des opportunités pour les entrepreneurs africains.",
    category: "E-commerce",
    date: "15 novembre 2024",
    readTime: "6 min"
  }
]

const categories = ["Tous", "Intelligence Artificielle", "Technologie", "IoT", "Géomatique", "Cloud", "Sécurité", "Design", "E-commerce"]

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
            {categories.map((category) => (
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
                  <div className="w-full h-64 lg:h-full bg-gradient-to-br from-secondary/10 to-gray-100 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 bg-secondary/30 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <span className="text-gray-500 text-sm">Image à la une</span>
                    </div>
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
                <article className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all hover:scale-105 cursor-pointer group border border-gray-200"
                >
                <div className="w-full h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center border-b border-gray-200">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-secondary/20 rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <span className="text-gray-500 text-xs">Article</span>
                  </div>
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

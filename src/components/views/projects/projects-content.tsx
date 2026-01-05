'use client'

import { useState, useMemo } from 'react'
import { useParams } from 'next/navigation'
import Header from '../header/header'
import Breadcrumb from '@/components/ui/breadcrumb'
import { Project } from '@/src/data/projects'
import Link from 'next/link'

interface ProjectsContentProps {
  projects: Project[]
}

export default function ProjectsContent({ projects }: ProjectsContentProps) {
  const { lang } = useParams() as { lang: string }
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  // Génère dynamiquement les catégories à partir des projets
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(projects.map(p => p.category)))
    return ["Tous", ...uniqueCategories.sort()]
  }, [projects])

  const filteredProjects = selectedCategory === "Tous"
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Header darkMode={false} />

      {/* Hero Section */}
      <div className="pt-28 pb-12 md:pt-32 lg:pt-36 lg:pb-16 relative z-10 bg-white">
        <div className="container-fixed px-4 md:px-6 lg:px-8">
          <div className="mb-6 md:mb-8 relative z-20">
            <Breadcrumb
              items={[
                { label: 'Accueil', href: `/${lang}` },
                { label: 'Vos projets sur mesure' }
              ]}
            />
          </div>
          <div className="max-w-4xl relative z-20">
            <h1 className="font-bangers text-4xl md:text-5xl lg:text-7xl text-gray-900 mb-4 md:mb-6 leading-tight">
            Vos Projets sur mesure
            </h1>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl font-nunito leading-relaxed max-w-3xl">
              Découvrez comment nous transformons les visions en solutions digitales performantes.
              Chaque projet est une histoire de collaboration, d'innovation et d'impact.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter - Horizontal Scroll */}
      <section className="sticky top-20 md:top-20 lg:top-24 z-40 bg-white/80 backdrop-blur-lg border-y border-gray-200 py-4 md:py-6">
        <div className="container-fixed px-4 lg:px-8">
          <div className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-nunito whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Masonry Grid */}
      <section className="py-12 lg:py-20">
        <div className="container-fixed px-4 lg:px-8">
          {/* Counter */}
          <div className="mb-8">
            <span className="text-gray-400 font-nunito text-sm">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'projet' : 'projets'}
            </span>
          </div>

          {/* Grid 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                href={`/${lang}/projects/${project.slug}`}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-50 border border-gray-200">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-[450px] lg:h-[500px]">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 z-10"></div>

                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Hover Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent z-20 transition-opacity duration-500 ${
                        hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10 transform transition-transform duration-500"
                        style={{
                          transform: hoveredProject === project.id ? 'translateY(0)' : 'translateY(20px)'
                        }}
                      >
                        <div className="mb-4">
                          <span className="text-secondary text-xs font-nunito uppercase tracking-wider">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="font-bangers text-3xl lg:text-4xl text-white mb-4">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 font-nunito text-base mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full text-xs font-nunito border border-white/20"
                            >
                              {tech.name}
                            </span>
                          ))}
                        </div>
                        <button className="flex items-center gap-2 text-white font-nunito text-sm group-hover:gap-3 transition-all">
                          Découvrir le projet
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Info - Always Visible */}
                  <div
                    className={`p-6 transition-opacity duration-500 ${
                      hoveredProject === project.id ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="text-secondary text-xs font-nunito uppercase tracking-wider mb-2">
                          {project.category}
                        </div>
                        <h3 className="font-bangers text-2xl lg:text-3xl text-gray-900 mb-2 group-hover:text-secondary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm font-nunito line-clamp-2">
                          {project.subtitle}
                        </p>
                      </div>
                      <div className="ml-4">
                        <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-secondary transition-colors">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-gray-50">
        <div className="container-fixed px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            <div className="text-center lg:text-left">
              <div className="font-bangers text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-2">50+</div>
              <div className="text-gray-600 font-nunito text-xs md:text-sm lg:text-base">Projets réalisés</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="font-bangers text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-2">30+</div>
              <div className="text-gray-600 font-nunito text-xs md:text-sm lg:text-base">Clients satisfaits</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="font-bangers text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-2">10</div>
              <div className="text-gray-600 font-nunito text-xs md:text-sm lg:text-base">Secteurs d'activité</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="font-bangers text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-2">98%</div>
              <div className="text-gray-600 font-nunito text-xs md:text-sm lg:text-base">Taux de satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container-fixed px-4 lg:px-8">
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 lg:p-20 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'url(/assets/bck.avif)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-bangers text-3xl md:text-4xl lg:text-6xl text-white mb-4 md:mb-6">
                Prêt à lancer votre projet ?
              </h2>
              <p className="text-gray-300 font-nunito text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed">
                Discutons de votre vision et transformons-la en réalité digitale.
                Notre équipe d'experts est prête à vous accompagner de l'idée à la mise en production.
              </p>
              <a href={`/${lang}#project-section`}>
                <button className="bg-secondary hover:bg-black transition-colors duration-200 inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full text-white text-base md:text-lg font-bangers hover:scale-105">
                  <div className="rounded-full bg-white p-2">
                    <img src="/assets/Vector.png" alt="" className="w-5 h-5" />
                  </div>
                  Démarrer un projet
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import { useState } from 'react'
import Header from '../header/header'
import Breadcrumb from '@/components/ui/breadcrumb'
import Image from 'next/image'

// Types
interface Project {
  id: number
  title: string
  client: string
  description: string
  category: string
  year: number
  technologies: string[]
  image: string
  color: string // Gradient color for the project
  size: 'small' | 'large' // For masonry layout
}

const projects: Project[] = [
  {
    id: 1,
    title: "Plateforme E-commerce Multi-vendeurs",
    client: "Retail Group CI",
    description: "Plateforme e-commerce complète permettant à plusieurs vendeurs de proposer leurs produits avec paiement mobile et gestion intelligente.",
    category: "E-commerce",
    year: 2024,
    technologies: ["Next.js", "Node.js", "MongoDB"],
    image: "/assets/project-1.jpg",
    color: "from-purple-500/20 to-pink-500/20",
    size: "large"
  },
  {
    id: 2,
    title: "Application Mobile de Télémédecine",
    client: "HealthCare Innovation",
    description: "Application connectant patients et médecins pour des consultations à distance avec dossiers médicaux numériques.",
    category: "Santé",
    year: 2024,
    technologies: ["React Native", "Firebase", "WebRTC"],
    image: "/assets/project-2.jpg",
    color: "from-blue-500/20 to-cyan-500/20",
    size: "small"
  },
  {
    id: 3,
    title: "Système de Gestion Agricole Intelligent",
    client: "AgroBusiness Partners",
    description: "Plateforme IoT et IA pour la gestion optimisée des exploitations agricoles avec surveillance par satellite.",
    category: "Agriculture",
    year: 2023,
    technologies: ["Python", "TensorFlow", "IoT"],
    image: "/assets/project-3.jpg",
    color: "from-green-500/20 to-emerald-500/20",
    size: "small"
  },
  {
    id: 4,
    title: "Plateforme Bancaire Mobile",
    client: "FinTech Solutions",
    description: "Application bancaire mobile complète avec transferts instantanés, micro-crédit et sécurité renforcée.",
    category: "Finance",
    year: 2024,
    technologies: ["Flutter", "Microservices", "Docker"],
    image: "/assets/project-4.jpg",
    color: "from-orange-500/20 to-yellow-500/20",
    size: "large"
  },
  {
    id: 5,
    title: "Smart City Dashboard",
    client: "Ville d'Abidjan",
    description: "Tableau de bord intelligent pour la gestion urbaine avec monitoring du trafic et éclairage public.",
    category: "Smart City",
    year: 2024,
    technologies: ["React", "D3.js", "IoT"],
    image: "/assets/project-5.jpg",
    color: "from-indigo-500/20 to-purple-500/20",
    size: "small"
  },
  {
    id: 6,
    title: "Plateforme de Surveillance Environnementale",
    client: "Ministère de l'Environnement",
    description: "Système géospatial utilisant l'imagerie satellite et l'IA pour détecter la déforestation.",
    category: "Environnement",
    year: 2023,
    technologies: ["Python", "GIS", "Machine Learning"],
    image: "/assets/project-6.jpg",
    color: "from-teal-500/20 to-green-500/20",
    size: "large"
  },
  {
    id: 7,
    title: "Plateforme d'Apprentissage en Ligne",
    client: "EduTech Africa",
    description: "LMS adapté au contexte africain avec fonctionnalités hors-ligne et contenu localisé.",
    category: "Éducation",
    year: 2024,
    technologies: ["Next.js", "GraphQL", "PWA"],
    image: "/assets/project-7.jpg",
    color: "from-red-500/20 to-orange-500/20",
    size: "small"
  },
  {
    id: 8,
    title: "Application de Livraison Express",
    client: "QuickDelivery CI",
    description: "Solution de livraison avec tracking en temps réel et optimisation des routes par IA.",
    category: "Logistique",
    year: 2024,
    technologies: ["React Native", "Node.js", "Google Maps"],
    image: "/assets/project-8.jpg",
    color: "from-pink-500/20 to-rose-500/20",
    size: "small"
  },
  {
    id: 9,
    title: "Système de Gestion Hôtelière",
    client: "Luxury Hotels Group",
    description: "Suite complète de gestion hôtelière avec réservations, check-in/out digital et analytics.",
    category: "Hôtellerie",
    year: 2023,
    technologies: ["Vue.js", "Laravel", "MySQL"],
    image: "/assets/project-9.jpg",
    color: "from-violet-500/20 to-purple-500/20",
    size: "large"
  }
]

const categories = ["Tous", "E-commerce", "Santé", "Agriculture", "Finance", "Smart City", "Environnement", "Éducation", "Logistique", "Hôtellerie"]

export default function ProjectsContent() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = selectedCategory === "Tous"
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Header darkMode={false} />

      {/* Hero Section */}
      <div className="pt-24 pb-12 lg:pt-32 lg:pb-16">
        <div className="container-fixed px-4 lg:px-8">
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: 'Accueil', href: '/fr' },
                { label: 'Projets' }
              ]}
            />
          </div>
          <div className="max-w-4xl">
            <h1 className="font-bangers text-5xl lg:text-7xl text-gray-900 mb-6">
              Nos Réalisations
            </h1>
            <p className="text-gray-600 text-lg lg:text-xl font-nunito leading-relaxed">
              Découvrez comment nous transformons les visions en solutions digitales performantes.
              Chaque projet est une histoire de collaboration, d'innovation et d'impact.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter - Horizontal Scroll */}
      <section className="sticky top-20 lg:top-24 z-40 bg-white/80 backdrop-blur-lg border-y border-gray-200 py-6">
        <div className="container-fixed px-4 lg:px-8">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-nunito whitespace-nowrap transition-all ${
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

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group cursor-pointer ${
                  project.size === 'large'
                    ? 'lg:col-span-8'
                    : 'lg:col-span-4'
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-50 border border-gray-200">
                  {/* Image Container */}
                  <div className={`relative overflow-hidden ${
                    project.size === 'large' ? 'h-[500px]' : 'h-[400px]'
                  }`}>
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} z-10`}></div>

                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-white/50 rounded-3xl mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    </div>

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
                            {project.client} • {project.year}
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
                              {tech}
                            </span>
                          ))}
                        </div>
                        <button className="flex items-center gap-2 text-white font-nunito text-sm group-hover:gap-3 transition-all">
                          Voir le projet
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
                        <h3 className="font-bangers text-2xl text-gray-900 mb-2 group-hover:text-secondary transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500 font-nunito">
                          <span>{project.category}</span>
                          <span>•</span>
                          <span>{project.year}</span>
                        </div>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container-fixed px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center lg:text-left">
              <div className="font-bangers text-5xl lg:text-6xl text-gray-900 mb-2">50+</div>
              <div className="text-gray-600 font-nunito text-sm lg:text-base">Projets réalisés</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="font-bangers text-5xl lg:text-6xl text-gray-900 mb-2">30+</div>
              <div className="text-gray-600 font-nunito text-sm lg:text-base">Clients satisfaits</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="font-bangers text-5xl lg:text-6xl text-gray-900 mb-2">10</div>
              <div className="text-gray-600 font-nunito text-sm lg:text-base">Secteurs d'activité</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="font-bangers text-5xl lg:text-6xl text-gray-900 mb-2">98%</div>
              <div className="text-gray-600 font-nunito text-sm lg:text-base">Taux de satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container-fixed px-4 lg:px-8">
          <div className="bg-gray-900 rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
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
              <h2 className="font-bangers text-4xl lg:text-6xl text-white mb-6">
                Prêt à lancer votre projet ?
              </h2>
              <p className="text-gray-300 font-nunito text-lg lg:text-xl mb-10 leading-relaxed">
                Discutons de votre vision et transformons-la en réalité digitale.
                Notre équipe d'experts est prête à vous accompagner de l'idée à la mise en production.
              </p>
              <a href="/fr/Contact">
                <button className="bg-secondary inline-flex items-center gap-3 px-8 py-4 rounded-full text-white text-lg font-bangers hover:bg-orange-600 transition-all hover:scale-105">
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

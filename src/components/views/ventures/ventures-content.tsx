'use client'

import { useState } from 'react'
import Header from '../header/header'
import Breadcrumb from '@/components/ui/breadcrumb'

// Types
interface Venture {
  id: number
  name: string
  description: string
  sector: string
  status: 'active' | 'development' | 'launched'
  year: number
  website?: string
  features: string[]
}

const ventures: Venture[] = [
  {
    id: 1,
    name: "AgriTech Solutions",
    description: "Plateforme digitale connectant les agriculteurs aux marchés et fournissant des outils d'analyse prédictive pour optimiser les rendements agricoles.",
    sector: "Agriculture",
    status: "active",
    year: 2023,
    website: "https://agritech.medev-group.com",
    features: [
      "Analyse prédictive des récoltes",
      "Marketplace agricole",
      "Conseils agronomiques IA",
      "Gestion des stocks"
    ]
  },
  {
    id: 2,
    name: "HealthConnect",
    description: "Application de télémédecine facilitant l'accès aux soins de santé dans les zones rurales grâce à la technologie mobile et l'IA.",
    sector: "Santé",
    status: "active",
    year: 2024,
    features: [
      "Consultations vidéo",
      "Diagnostic assisté par IA",
      "Dossier médical numérique",
      "Rappels de médicaments"
    ]
  },
  {
    id: 3,
    name: "EduLearn Africa",
    description: "Plateforme d'apprentissage en ligne adaptée aux contextes africains, avec des contenus localisés et un accès hors-ligne.",
    sector: "Éducation",
    status: "launched",
    year: 2023,
    website: "https://edulearn-africa.com",
    features: [
      "Cours hors-ligne",
      "Contenus localisés",
      "Certifications reconnues",
      "Mentorat virtuel"
    ]
  },
  {
    id: 4,
    name: "FinTech Pay",
    description: "Solution de paiement mobile sécurisée facilitant les transactions financières et l'inclusion bancaire en Afrique de l'Ouest.",
    sector: "Finance",
    status: "active",
    year: 2024,
    features: [
      "Transferts instantanés",
      "Micro-crédit",
      "Épargne automatique",
      "Paiement sans contact"
    ]
  },
  {
    id: 5,
    name: "SmartCity IoT",
    description: "Réseau de capteurs IoT pour la gestion intelligente des villes : éclairage, déchets, trafic et qualité de l'air.",
    sector: "Smart City",
    status: "development",
    year: 2025,
    features: [
      "Gestion de l'éclairage public",
      "Monitoring environnemental",
      "Optimisation du trafic",
      "Gestion des déchets"
    ]
  },
  {
    id: 6,
    name: "GeoProtect",
    description: "Plateforme géospatiale de surveillance et protection des ressources naturelles utilisant l'imagerie satellite et l'IA.",
    sector: "Environnement",
    status: "active",
    year: 2024,
    website: "https://geoprotect.medev-group.com",
    features: [
      "Surveillance par satellite",
      "Détection de déforestation",
      "Prévention des inondations",
      "Cartographie interactive"
    ]
  }
]

const sectors = ["Tous", "Agriculture", "Santé", "Éducation", "Finance", "Smart City", "Environnement"]
const statusLabels = {
  active: { label: "Actif", color: "bg-green-500" },
  development: { label: "En développement", color: "bg-yellow-500" },
  launched: { label: "Lancé", color: "bg-blue-500" }
}

export default function VenturesContent() {
  const [selectedSector, setSelectedSector] = useState("Tous")

  const filteredVentures = selectedSector === "Tous"
    ? ventures
    : ventures.filter(venture => venture.sector === selectedSector)

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
                { label: 'Ventures' }
              ]}
            />
          </div>
          <h1 className="font-bangers text-4xl lg:text-6xl text-gray-900">
            Nos Ventures
          </h1>
          <p className="text-gray-600 text-base lg:text-lg font-nunito mt-4 max-w-3xl">
            Découvrez les projets innovants que nous développons pour transformer l'Afrique grâce à la technologie.
            De l'AgriTech à la FinTech, nos ventures créent un impact positif sur le continent.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-12 border-y border-gray-200">
        <div className="container-fixed px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-bangers text-4xl lg:text-5xl text-secondary mb-2">6+</div>
              <div className="text-gray-600 font-nunito text-sm lg:text-base">Ventures actives</div>
            </div>
            <div className="text-center">
              <div className="font-bangers text-4xl lg:text-5xl text-secondary mb-2">5</div>
              <div className="text-gray-600 font-nunito text-sm lg:text-base">Secteurs couverts</div>
            </div>
            <div className="text-center">
              <div className="font-bangers text-4xl lg:text-5xl text-secondary mb-2">50K+</div>
              <div className="text-gray-600 font-nunito text-sm lg:text-base">Utilisateurs impactés</div>
            </div>
            <div className="text-center">
              <div className="font-bangers text-4xl lg:text-5xl text-secondary mb-2">2023</div>
              <div className="text-gray-600 font-nunito text-sm lg:text-base">Année de lancement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Filter */}
      <section className="py-8 border-b border-gray-200">
        <div className="container-fixed px-4 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setSelectedSector(sector)}
                className={`px-4 py-2 rounded-full text-sm font-nunito transition-all ${
                  selectedSector === sector
                    ? 'bg-secondary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Ventures Grid */}
      <section className="py-12 lg:py-20">
        <div className="container-fixed px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredVentures.map((venture) => (
              <div
                key={venture.id}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all hover:scale-105 cursor-pointer group border border-gray-200"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-bangers text-2xl lg:text-3xl group-hover:text-secondary transition-colors text-gray-900">
                        {venture.name}
                      </h3>
                      <span className={`${statusLabels[venture.status].color} w-2 h-2 rounded-full`}></span>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-secondary text-xs font-nunito uppercase tracking-wider">
                        {venture.sector}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600 text-xs font-nunito">
                        {statusLabels[venture.status].label}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600 text-xs font-nunito">
                        Depuis {venture.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 font-nunito text-sm lg:text-base mb-6 leading-relaxed">
                  {venture.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-gray-900 font-nunito text-sm font-semibold mb-3">Fonctionnalités clés :</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {venture.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-xs font-nunito">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  {venture.website ? (
                    <a
                      href={venture.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary text-sm font-nunito group-hover:underline flex items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visiter le site
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-gray-500 text-sm font-nunito italic">Bientôt disponible</span>
                  )}
                  <button className="text-gray-900 text-sm font-nunito hover:text-secondary transition-colors flex items-center gap-1">
                    En savoir plus
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 border-t border-gray-200">
        <div className="container-fixed px-4 lg:px-8">
          <div className="bg-gradient-to-br from-secondary/10 to-gray-100 rounded-2xl p-8 lg:p-16 text-center border border-gray-200">
            <h2 className="font-bangers text-3xl lg:text-5xl mb-4 text-gray-900">
              Une idée de venture ?
            </h2>
            <p className="text-gray-600 font-nunito text-base lg:text-lg mb-8 max-w-2xl mx-auto">
              Nous sommes toujours à la recherche de nouvelles opportunités pour créer un impact positif.
              Partagez votre idée avec nous et construisons ensemble l'avenir de l'Afrique digitale.
            </p>
            <a href="/fr/Contact">
              <button className="bg-secondary flex items-center gap-2 px-6 py-3 rounded-full text-white text-base font-bangers w-fit hover:bg-orange-600 transition-colors mx-auto">
                <div className="rounded-full bg-gray-100 p-1">
                  <img src="/assets/Vector.png" alt="" className="w-5 h-5" />
                </div>
                Contactez-nous
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

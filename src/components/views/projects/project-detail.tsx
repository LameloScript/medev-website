'use client'

import Header from '../header/header'
import Breadcrumb from '@/components/ui/breadcrumb'
import { useParams } from 'next/navigation'
import { CheckCircle, ExternalLink, Clock, Building2 } from 'lucide-react'

interface ProjectDetailData {
  slug: string
  title: string
  subtitle: string
  category: string
  image: string
  link: string
  duration: string
  client: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    description: string
  }[]
  technologies: {
    name: string
    icon: string
  }[]
  workflow: {
    phase: string
    title: string
    description: string
    deliverables: string[]
  }[]
  testimonial?: {
    quote: string
    author: string
    role: string
    avatar?: string
  }
}

export default function ProjectDetail({ data }: { data: ProjectDetailData }) {
  const { lang } = useParams() as { lang: string }
  const project = data

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Header darkMode={false} />

      {/* Breadcrumb */}
      <div className="pt-24 pb-8 lg:pt-28 lg:pb-12">
        <div className="container-fixed px-4 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Accueil', href: `/${lang}` },
              { label: 'Projets', href: `/${lang}/projects` },
              { label: project.category, href: `/${lang}/projects` },
              { label: project.title }
            ]}
          />
        </div>
      </div>

      {/* Project Header */}
      <section className="container-fixed px-4 lg:px-8 mb-16">
        <div className="max-w-6xl mx-auto">
          {/* Category */}
          <div className="mb-6">
            <span className="text-secondary text-sm font-nunito uppercase tracking-wider bg-secondary/10 px-4 py-2 rounded-full">
              {project.category}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h1 className="font-bangers text-5xl lg:text-7xl mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 font-nunito mb-8">
            {project.subtitle}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 mb-12">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-secondary" />
              <div>
                <div className="text-sm text-gray-500 font-nunito">Durée</div>
                <div className="font-nunito font-semibold">{project.duration}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-secondary" />
              <div>
                <div className="text-sm text-gray-500 font-nunito">Client</div>
                <div className="font-nunito font-semibold">{project.client}</div>
              </div>
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-nunito hover:bg-secondary transition-colors ml-auto"
              >
                Voir le site
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Featured Image */}
          <div className="w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="bg-gray-50 py-20">
        <div className="container-fixed px-4 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Challenge */}
            <div>
              <h2 className="font-bangers text-3xl lg:text-4xl mb-6 text-gray-900">
                Le Défi
              </h2>
              <p className="text-gray-700 leading-relaxed font-nunito text-lg">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="font-bangers text-3xl lg:text-4xl mb-6 text-gray-900">
                La Solution
              </h2>
              <p className="text-gray-700 leading-relaxed font-nunito text-lg">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="container-fixed px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-bangers text-4xl lg:text-5xl mb-12 text-center">
              Résultats Clés
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {project.results.map((result, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-secondary transition-all hover:shadow-lg"
                >
                  <div className="font-bangers text-5xl lg:text-6xl text-secondary mb-2">
                    {result.metric}
                  </div>
                  <div className="font-nunito font-bold text-xl mb-2 text-gray-900">
                    {result.value}
                  </div>
                  <div className="text-gray-600 font-nunito">
                    {result.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-black text-white py-20">
        <div className="container-fixed px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-bangers text-4xl lg:text-5xl mb-4 text-center">
              Notre Méthodologie
            </h2>
            <p className="text-gray-400 text-center font-nunito text-lg mb-16 max-w-2xl mx-auto">
              Un processus structuré en 4 phases pour garantir le succès de votre projet
            </p>

            <div className="space-y-12">
              {project.workflow.map((phase, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-2xl p-8 lg:p-10 border border-gray-800 hover:border-secondary transition-all"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Phase Number */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
                        <span className="font-bangers text-3xl text-white">
                          {phase.phase}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="font-bangers text-2xl lg:text-3xl mb-3">
                        {phase.title}
                      </h3>
                      <p className="text-gray-400 font-nunito mb-6 text-lg">
                        {phase.description}
                      </p>

                      {/* Deliverables */}
                      {phase.deliverables && phase.deliverables.length > 0 && (
                        <div className="space-y-3">
                          <h4 className="font-nunito font-semibold text-sm uppercase tracking-wider text-secondary">
                            Livrables
                          </h4>
                          <ul className="space-y-2">
                            {phase.deliverables.map((deliverable, dIndex) => (
                              <li
                                key={dIndex}
                                className="flex items-start gap-3 text-gray-300 font-nunito"
                              >
                                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                <span>{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="container-fixed px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-bangers text-4xl lg:text-5xl mb-12 text-center text-gray-900">
              Technologies Utilisées
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 bg-white p-6 rounded-xl hover:shadow-lg transition-all border-2 border-transparent hover:border-secondary"
                >
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-nunito font-semibold text-gray-900">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-20">
          <div className="container-fixed px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-10 lg:p-16 border-l-4 border-secondary">
                <div className="flex items-start gap-6 mb-6">
                  {project.testimonial.avatar && (
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={project.testimonial.avatar}
                        alt={project.testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <div className="font-nunito font-bold text-xl text-gray-900">
                      {project.testimonial.author}
                    </div>
                    <div className="text-gray-600 font-nunito">
                      {project.testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-xl lg:text-2xl font-nunito italic leading-relaxed">
                  "{project.testimonial.quote}"
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-black">
        <div className="container-fixed px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bangers text-4xl lg:text-6xl text-white mb-6">
              Prêt à lancer votre projet ?
            </h2>
            <p className="text-gray-400 font-nunito text-lg lg:text-xl mb-10 max-w-2xl mx-auto">
              Discutons de votre vision et transformons-la en une solution digitale performante qui génère des résultats concrets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`/${lang}#project-section`}>
                <button className="bg-secondary hover:bg-secondary/90 transition-colors duration-200 flex items-center gap-2 px-8 py-4 rounded-full text-white text-lg font-bangers">
                  <div className="rounded-full bg-white p-1">
                    <img src="/assets/Vector.png" alt="" className="w-5 h-5" />
                  </div>
                  Démarrer un projet
                </button>
              </a>
              <a href={`/${lang}/projects`}>
                <button className="bg-white hover:bg-gray-100 transition-colors duration-200 px-8 py-4 rounded-full text-black text-lg font-bangers border-2 border-white">
                  Voir tous les projets
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

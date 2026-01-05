'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import ApplyDialog from '@/src/components/views/recruitment/apply-dialog'

interface TeamMember {
  name: string
  title: string
  description: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'EDGAR KOUASSI',
    title: 'CEO',
    description: 'Géomaticien, développeur SIG fullstack',
    image: '/assets/team/edgar.avif'
  },
  {
    name: 'DANIEL BOUA',
    title: 'Product Lead',
    description: 'UX/UI designer',
    image: '/assets/team/Daniel Boua.avif'
  },
  {
    name: 'FULGENCE MEDI',
    title: 'CTO',
    description: 'Architecte logiciel, développeur fullstack',
    image: '/assets/team/medi.avif'
  },
  {
    name: 'PAUL TIENE',
    title: 'CTO en IoT',
    description: 'Électrotechnicien, développeur système IoT',
    image: '/assets/team/Paul cedric.avif'
  }
]

export default function TeamTest() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [applyOpen, setApplyOpen] = useState(false)

  // Auto-rotation des membres de l'équipe
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % teamMembers.length)
    }, 4000) // Change toutes les 4 secondes

    return () => clearInterval(interval)
  }, [])

  // Animation de flottement basée sur le scroll
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const offset = window.innerHeight - rect.top
        setScrollY(offset * 0.05) // Effet de parallaxe léger
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={sectionRef}
      className="w-full lg:min-h-screen flex flex-col lg:flex-row items-center justify-center relative overflow-hidden py-20 px-4 lg:px-20 lg:mt-40"
    >
      {/* Cercle décoratif en arrière-plan avec animation */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full border border-white/10 transition-transform duration-300"
        style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.3}px)` }}
      ></div>

      {/* Images d'arrière-plan avec effet de flottement - cachées sur mobile */}
      <div
        className="hidden lg:block absolute top-10 left-10 w-32 h-48 lg:w-48 lg:h-64 opacity-20 transition-transform duration-300"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <Image
          src="/assets/team/img-1.avif"
          alt=""
          fill
          className="object-cover grayscale"
        />
      </div>
      <div
        className="hidden lg:block absolute bottom-10 left-10 w-32 h-48 lg:w-48 lg:h-64 opacity-20 transition-transform duration-300"
        style={{ transform: `translateY(${-scrollY * 0.4}px)` }}
      >
        <Image
          src="/assets/team/img-2.avif"
          alt=""
          fill
          className="object-cover grayscale"
        />
      </div>
      <div
        className="hidden lg:block absolute top-10 right-10 w-32 h-48 lg:w-48 lg:h-64 opacity-20 transition-transform duration-300"
        style={{ transform: `translateY(${scrollY * 0.6}px)` }}
      >
        <Image
          src="/assets/team/img-3.avif"
          alt=""
          fill
          className="object-cover grayscale"
        />
      </div>
      <div
        className="hidden lg:block absolute bottom-10 right-10 w-32 h-48 lg:w-48 lg:h-64 opacity-20 transition-transform duration-300"
        style={{ transform: `translateY(${-scrollY * 0.5}px)` }}
      >
        <Image
          src="/assets/team/img-4.avif"
          alt=""
          fill
          className="object-cover grayscale"
        />
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto transition-transform duration-500"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        {/* Titre et description - Visible uniquement sur mobile */}
        <div className="lg:hidden mb-8 text-center px-4">
          <span className="text-black text-xs">[TEAM]</span>
          <h2 className="text-black font-bangers text-3xl md:text-4xl mt-2 leading-tight">
            L'EQUIPE DERRIÈRE <span className="text-secondary">LES PROJETS</span>
          </h2>
          <p className="text-gray-600 font-nunito text-sm md:text-base leading-relaxed mt-4">
            Découvrez les esprits créatifs qui donnent vie à votre vision. Notre équipe allie créativité, stratégie et passion pour transformer vos idées en designs percutants.
          </p>
        </div>

        {/* Contenu principal */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-4 lg:gap-20">
          {/* Photo et rôle - En haut sur mobile, à droite sur desktop */}
          <div className="flex-shrink-0 text-center w-full lg:w-auto order-1 lg:order-2 self-start lg:self-start">
            <div className="relative w-full h-96 lg:w-80 lg:h-96 mb-4 lg:mb-6 bg-white rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={teamMembers[activeIndex].image}
                alt={teamMembers[activeIndex].name}
                fill
                className="object-cover transition-all duration-500"
                priority
              />
            </div>
            <div className="text-black px-2 lg:px-0">
              <p className="flex items-center justify-center gap-2 text-2xl lg:text-2xl">
                <span className="text-3xl lg:text-3xl">▸</span>
                <span className="italic">{teamMembers[activeIndex].title}</span>
              </p>
              <p className="text-lg lg:text-lg text-black/80 mt-1">{teamMembers[activeIndex].description}</p>
            </div>
          </div>

          {/* Liste des noms - En bas sur mobile, à gauche sur desktop */}
          <div className="flex-1 space-y-1 lg:space-y-2 w-full order-2 lg:order-1 self-center">
            {/* Titre */}
            <p className="text-black/60 lg:text-black/60 text-xs md:text-sm italic mb-2 lg:mb-4 text-center lg:text-left">Notre équipe</p>

            {teamMembers.map((member, index) => (
              <button
                key={member.name}
                onClick={() => setActiveIndex(index)}
                className={`block text-center lg:text-left w-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'text-secondary font-bold scale-105'
                    : 'text-gray-700 lg:text-gray-700 hover:text-gray-900'
                }`}
              >
                <h2
                  className={`font-bangers transition-all duration-300 ${
                    activeIndex === index
                      ? 'text-4xl md:text-5xl lg:text-5xl xl:text-6xl'
                      : 'text-3xl md:text-4xl lg:text-4xl xl:text-5xl opacity-50 lg:opacity-100'
                  }`}
                >
                  {member.name}
                </h2>
              </button>
            ))}
          </div>
        </div>

        {/* CTA Rejoindre l'équipe */}
        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-black/80 text-sm lg:text-base mb-4">
            Passionné par le digital ? Rejoignez-nous et créez l'avenir ensemble.
          </p>
          <button onClick={() => setApplyOpen(true)} className="bg-secondary hover:bg-black transition-colors duration-200 flex items-center gap-2 px-4 py-2 rounded-full text-white text-base font-bangers w-fit mx-auto">
            <div className="rounded-full bg-gray-100 p-1">
              <img src="/assets/Vector.png" alt="" className="w-5 h-5" />
            </div>
            Postuler maintenant
          </button>
        </div>
        <ApplyDialog open={applyOpen} onOpenChange={setApplyOpen} />
      </div>
    </div>
  )
}

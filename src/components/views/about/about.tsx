'use client'

import { useEffect, useRef, useState } from 'react'
import Header from '../header/header'
import Breadcrumb from '@/components/ui/breadcrumb'

export default function Aboutus() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([])
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  const setSectionRef = (index: number) => (el: HTMLElement | null) => {
    sectionsRef.current[index] = el
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-20')
        }
      })
    }, observerOptions)

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-black text-white min-h-screen">
      <Header darkMode={true} />

      {/* Breadcrumb and Title Section */}
      <div className="pt-24 pb-8 lg:pt-28 lg:pb-12">
        <div className="container-fixed px-4 lg:px-8 flex flex-col items-center text-center">
          <div className="mb-6 lg:mb-8 [&_a]:text-gray-400 [&_a]:hover:text-secondary [&_span]:text-white [&_svg]:text-gray-600">
            <Breadcrumb
              items={[
                { label: 'Accueil', href: '/fr' },
                { label: 'À propos' }
              ]}
            />
          </div>
          <h1 className="font-bangers text-4xl lg:text-6xl text-white">
            À propos de nous
          </h1>
        </div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="px-8 py-12 lg:py-20 relative overflow-visible flex items-center justify-center">
        <div className="container-fixed px-4 lg:px-8 relative">
          {/* Floating Images - positioned around the title */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Image 1 - Top Left */}
            <div
              className="absolute w-48 lg:w-64 h-48 lg:h-64 rounded-lg overflow-hidden transition-all duration-700 ease-out"
              style={{
                left: '0%',
                top: '10%',
                opacity: scrollY > 200 ? 1 : 0,
                transform: `translateY(${scrollY > 200 ? 0 : 200}px)`
              }}
            >
              <img src="/assets/team/img-1.avif" alt="Team member" className="w-full h-full object-cover" />
            </div>

            {/* Image 2 - Top Right */}
            <div
              className="absolute w-52 lg:w-72 h-52 lg:h-72 rounded-lg overflow-hidden transition-all duration-700 ease-out"
              style={{
                right: '0%',
                top: '5%',
                opacity: scrollY > 250 ? 1 : 0,
                transform: `translateY(${scrollY > 250 ? 0 : 200}px)`,
                transitionDelay: '0.1s'
              }}
            >
              <img src="/assets/team/img-2.avif" alt="Team member" className="w-full h-full object-cover" />
            </div>

            {/* Image 3 - Bottom Left */}
            <div
              className="absolute w-44 lg:w-60 h-44 lg:h-60 rounded-lg overflow-hidden transition-all duration-700 ease-out"
              style={{
                left: '5%',
                bottom: '15%',
                opacity: scrollY > 300 ? 1 : 0,
                transform: `translateY(${scrollY > 300 ? 0 : 200}px)`,
                transitionDelay: '0.2s'
              }}
            >
              <img src="/assets/team/img-3.avif" alt="Team member" className="w-full h-full object-cover" />
            </div>

            {/* Image 4 - Bottom Right */}
            <div
              className="absolute w-48 lg:w-64 h-48 lg:h-64 rounded-lg overflow-hidden transition-all duration-700 ease-out"
              style={{
                right: '5%',
                bottom: '20%',
                opacity: scrollY > 350 ? 1 : 0,
                transform: `translateY(${scrollY > 350 ? 0 : 200}px)`,
                transitionDelay: '0.3s'
              }}
            >
              <img src="/assets/team/img-4.avif" alt="Team member" className="w-full h-full object-cover" />
            </div>

            {/* Image 5 - Middle Left */}
            <div
              className="absolute w-40 lg:w-56 h-40 lg:h-56 rounded-lg overflow-hidden transition-all duration-700 ease-out"
              style={{
                left: '10%',
                top: '50%',
                opacity: scrollY > 400 ? 1 : 0,
                transform: `translateY(${scrollY > 400 ? 0 : 200}px)`,
                transitionDelay: '0.4s'
              }}
            >
              <img src="/assets/team/img-1.avif" alt="Team member" className="w-full h-full object-cover" />
            </div>

            {/* Image 6 - Middle Right */}
            <div
              className="absolute w-44 lg:w-60 h-44 lg:h-60 rounded-lg overflow-hidden transition-all duration-700 ease-out"
              style={{
                right: '10%',
                top: '45%',
                opacity: scrollY > 450 ? 1 : 0,
                transform: `translateY(${scrollY > 450 ? 0 : 200}px)`,
                transitionDelay: '0.5s'
              }}
            >
              <img src="/assets/team/img-2.avif" alt="Team member" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Main headline - centered */}
          <div className="text-center relative z-10">
            <h2 className="font-bangers text-4xl lg:text-5xl xl:text-6xl leading-tight">
              Transformons vos idées<br />
              en réalité digitale
            </h2>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 lg:py-32 bg-black relative">
        {/* Mask Background */}
        <img
          src="/assets/mask-blanc.png"
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain opacity-5 pointer-events-none z-0"
        />

        <div className="container-fixed px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-4 gap-12 items-start">
            <div
              ref={setSectionRef(0)}
              className="lg:col-span-3 opacity-0 translate-y-20 transition-all duration-1000"
            >
              <h2 className="font-bangers text-4xl lg:text-6xl leading-tight mb-6">
                Medev Group propulse les entreprises vers l'avenir avec des solutions digitales innovantes.
              </h2>
              <p className="text-gray-400 text-base lg:text-lg font-nunito">
                Nous combinons les nouvelles technologies, l'intelligence artificielle et le design
                pour offrir des solutions performantes et intuitives qui transforment votre présence digitale
                et optimisent vos processus métier.
              </p>
            </div>
            <div
              ref={setSectionRef(1)}
              className="lg:col-span-1 opacity-0 translate-y-20 transition-all duration-1000"
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="relative">
                <div className="text-6xl lg:text-8xl font-black opacity-5 absolute -top-16 -right-8 leading-none whitespace-nowrap">
                  Innovation<br/>& Design
                </div>
                <div className="space-y-4 relative z-10">
                  <p className="text-gray-300 text-sm lg:text-base font-nunito">
                    Spécialisés en développement web & mobile, automatisation, IA, IoT et géomatique
                  </p>
                  <a href="/fr/Contact" className="text-white underline hover:text-secondary transition-colors inline-block font-nunito">
                    Découvrir nos services →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 lg:py-32 bg-black">
        <div className="container-fixed px-4 lg:px-8 space-y-32">
          {/* Principle 1 - Innovation */}
          <div
            ref={setSectionRef(2)}
            className="grid lg:grid-cols-2 gap-12 items-start opacity-0 translate-y-20 transition-all duration-1000 border-t border-gray-800 pt-12"
          >
            <div>
              <span className="text-gray-600 text-xl lg:text-2xl font-bold mb-4 block font-nunito">01</span>
              <h3 className="font-bangers text-4xl lg:text-6xl leading-tight">
                Innovation<br />
                technologique
              </h3>
            </div>
            <div className="flex items-center">
              <p className="text-gray-400 text-base lg:text-lg font-nunito">
                Nous intégrons les technologies les plus avancées - IA, IoT, Cloud, Géomatique -
                pour créer des solutions sur-mesure qui répondent aux défis de demain.
                Notre expertise technique nous permet de transformer vos idées en produits
                digitaux performants et évolutifs.
              </p>
            </div>
          </div>

          {/* Principle 2 - Design */}
          <div
            ref={setSectionRef(3)}
            className="grid lg:grid-cols-2 gap-12 items-start opacity-0 translate-y-20 transition-all duration-1000 border-t border-gray-800 pt-12"
          >
            <div>
              <span className="text-gray-600 text-xl lg:text-2xl font-bold mb-4 block font-nunito">02</span>
              <h3 className="font-bangers text-4xl lg:text-6xl leading-tight">
                Design &<br />
                expérience utilisateur
              </h3>
            </div>
            <div className="flex items-center">
              <p className="text-gray-400 text-base lg:text-lg font-nunito">
                Nous créons des interfaces intuitives et des expériences utilisateur captivantes.
                Notre approche UX/UI allie esthétique et fonctionnalité pour concevoir
                des identités visuelles impactantes qui séduisent votre audience
                et renforcent votre image de marque.
              </p>
            </div>
          </div>

          {/* Principle 3 - Performance */}
          <div
            ref={setSectionRef(4)}
            className="grid lg:grid-cols-2 gap-12 items-start opacity-0 translate-y-20 transition-all duration-1000 border-t border-gray-800 pt-12"
          >
            <div>
              <span className="text-gray-600 text-xl lg:text-2xl font-bold mb-4 block font-nunito">03</span>
              <h3 className="font-bangers text-4xl lg:text-6xl leading-tight">
                Performance &<br />
                efficacité
              </h3>
            </div>
            <div className="flex items-center">
              <p className="text-gray-400 text-base lg:text-lg font-nunito">
                Nous optimisons chaque aspect de vos solutions digitales pour garantir
                rapidité, sécurité et fiabilité. De l'automatisation de processus à
                l'hébergement cloud sécurisé, nous permettons aux entreprises de gagner
                en efficacité, en compétitivité et en visibilité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Distinctions Section */}
      <section className="relative bg-black text-white w-full overflow-hidden py-20 lg:py-32">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/distinctions/background-distinction.png')" }}
        />

        <div className="container-fixed px-4 lg:px-8 relative z-10">
          <div className="flex flex-col items-start lg:items-center justify-center">
            <span className="text-xs md:text-sm font-nunito">[ NOS DISTINCTIONS ]</span>
            <h2 className="font-bangers text-3xl md:text-4xl lg:text-5xl mt-4 md:mt-6 lg:text-center lg:leading-14 leading-tight">
              Nous sommes taillés pour vos besoins <span className="text-secondary">et vos défis.</span>
            </h2>
            <p className="lg:text-center font-nunito text-sm md:text-base lg:text-lg leading-relaxed max-w-3xl mt-4 md:mt-6">
              Nous créons des expériences qui font bouger les choses, des interfaces qui
              comprennent les gens, des parcours simples, et des résultats percutants.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-start gap-4">
              <img
                src="/assets/distinctions/logo-prix-1.png"
                alt="Distinction"
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
              <p className="font-nunito text-base lg:text-xl leading-relaxed">
                1er prix du Hackaton du Marché Africain des Solutions Spatiales en 2025
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <img
                src="/assets/distinctions/logo-prix-1.png"
                alt="Distinction"
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
              <p className="font-nunito text-base lg:text-xl leading-relaxed">
                1er prix Startups Géospaciales sur les inondations et les zones humides Côte d'Ivoire GDZHIAO 2023
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <img
                src="/assets/distinctions/logo-prix-2.png"
                alt="Distinction"
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
              <p className="font-nunito text-base lg:text-xl leading-relaxed">
                2e prix national d'excellence 2024 pour la meilleure contribution à la vulgarisation des usages du numérique
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <img
                src="/assets/distinctions/logo-prix-2.png"
                alt="Distinction"
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
              <p className="font-nunito text-base lg:text-xl leading-relaxed">
                2e prix du Hackaton Gnambélé bootcamp PNUD L'IA au service de la biodiversité 2025
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <img
                src="/assets/distinctions/logo-prix-2.png"
                alt="Distinction"
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
              <p className="font-nunito text-base lg:text-xl leading-relaxed">
                2e prix du Hackathon MARCONVA pour la protection de l'espace maritime 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Using Home Page CTA */}
      <section className="flex flex-col gap-24 py-22 px-4 bg-cover bg-center items-center lg:mt-40 justify-center bg-no-repeat lg:bg-[url('/assets/cta-1.png')] bg-[url('/assets/cta-2.png')]">
        <div className="flex flex-col items-center justify-center lg:w-1/2">
          <span className="font-bangers lg:text-5xl text-2xl lg:mt-6 text-center lg:leading-14 text-white lg:px-14">
            Confiez vos projets à des experts et gagnez du temps dès aujourd'hui.
          </span>
          <div className="flex items-center justify-center mt-6">
            <a href="/fr/Contact">
              <button className="bg-primary flex items-center gap-2 px-4 py-2 rounded-full text-white text-base font-bangers w-fit opacity-0 animate-fade-in-up [animation-delay:0.4s]">
                <div className="rounded-full bg-gray-100 p-1">
                  <img src="/assets/Vector.png" alt="" className="w-5 h-5" />
                </div>
                réservez un call dès maintenant
              </button>
            </a>
          </div>
        </div>
        <div className="absolute right-0 lg:w-126 lg:flex hidden -translate-y-1">
          <img src="/assets/mask-3.png" alt="" />
        </div>
      </section>
    </div>
  )
}

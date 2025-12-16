"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Menu from "@/src/components/views/header/menu";
import { Menu1 } from "@/src/components/views/footer/menu";
import HeroImage from "@/src/components/views/home/hero-image";
import Title from "./hero/title";


export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/background.png')" }}
      />

      {/* White Overlay */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Header */}
      <div className="relative z-20 container-fixed px-4 ">
        <div className="flex items-center justify-between lg:py-4 py-4 lg:px-8">
          <div className="flex items-center gap-1">
            <a href="/fr/" className="flex items-center gap-1">
              <img src="/assets/logo-medev-drk.svg" alt="" className="w-6" />
              <span className="text-sm lg:text-base font-nunito">Medev Group</span>
            </a>
          </div>
          <div className="text-xs lg:text-sm font-nunito hidden lg:flex">
            ©2025
          </div>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="cursor-pointer"
          >
            <span className="text-sm lg:text-base font-nunito">[ Menu ]</span>
          </button>
        </div>
      </div>

      {/* Menu déroulant */}
      <div
        className={`fixed top-0 left-0 z-50 w-full flex flex-col gap-20 bg-white justify-between overflow-hidden min-h-screen transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className="container-fixed">
          <div className="flex items-center justify-between lg:py-4 py-4 px-4 lg:px-8 z-10">
            <div className="flex items-center gap-1">
              <a href="/fr/" className="flex items-center gap-1">
                <img src="/assets/logo-medev-drk.svg" alt="" className="w-6" />
                <span className="text-sm lg:text-base font-nunito">Medev Group</span>
              </a>
            </div>
            <div className="text-xs lg:text-sm font-nunito hidden lg:flex">
              ©2025
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center cursor-pointer"
            >
              <span className="text-sm lg:text-base font-nunito">[ x ]</span>
            </button>
          </div>
        </div>
        <div className="container-fixed mx-auto flex items-center justify-center">
          <Menu />
        </div>
        <div className="container-fixed mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between lg:py-9 py-4 px-4 lg:px-8 z-10 bg-neutral-100">
            <span className="text-sm lg:text-base text-center">
              © 2025 Medev Group Inc. Tous droits réservés.
            </span>
            <div>
              <Menu1 />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="lg:flex  lg:flex-col  items-center  justify-between px-4 lg:px-8">
        <div className="relative z-10 lg:flex-1  hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:mb-20 lg:container-fixed lg:mx-auto">
          <div className="flex flex-col lg:items-start items-center my-10 lg:py-16 px-2 sm:px-4 lg:px-20">
            <h1 className="lg:text-start text-center lg:text-8xl text-5xl md:text-6xl font-bangers lg:leading-24 leading-tight opacity-0 animate-fade-in-up [animation-delay:0.2s]">
              Pas juste de la tech,
              <div className="lg:pl-20">
                mais une <span className="text-[#ff6400] "> Révolution</span>
              </div>
              <div className="flex lg:items-start items-center justify-center lg:justify-start">
                <span className="text-start font-nunito text-sm pt-2 w-1/3 hidden lg:flex">
                  Nous accompagnons les entreprises privées, publiques
                  et les PME à bâtir des marques fortes et des solutions
                  digitales qui inspirent confiance et s'appuient sur nos
                  valeurs africaines.
                </span>
                <div className="flex lg:items-center">
                  <img src="/assets/mask.png" alt="" className="lg:w-18 w-6 sm:w-8" />
                  digitale .
                </div>
              </div>

            </h1>
            <div className="lg:hidden flex justify-center w-full px-8">
              <span className="text-center font-nunito text-sm sm:text-sm md:text-base pt-4 leading-relaxed max-w-xs sm:max-w-sm md:max-w-md">
                  Nous accompagnons les entreprises privées, publiques
                  et les PME à bâtir des marques fortes et des solutions
                  digitales qui inspirent confiance et s'appuient sur nos
                  valeurs africaines.
              </span>
            </div>
            <button className="bg-secondary flex items-center gap-2 px-4 py-2 mt-2 rounded-full text-white text-base font-bangers w-fit opacity-0 animate-fade-in-up [animation-delay:0.4s]">
              <div className="rounded-full bg-gray-100 p-1">
                <img src="/assets/Vector.png" alt="" className="w-5 h-5" />
              </div>
              Donner vie à votre projet
            </button>
            {/* Carrousel avec effet de flou */}
            <div className="relative mt-6 mb-16 lg:mb-0 overflow-hidden max-w-2xl opacity-0 animate-fade-in-up [animation-delay:0.6s]">
              {/* Effet de flou gauche */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

              {/* Effet de flou droite */}
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

              {/* Carrousel */}
              <div className="flex">
                <div className="animate-scroll">
                  <img src="/assets/logo-brand/logo-mtnd.png" alt="MTND" className="h-10 object-contain grayscale hover:grayscale-0 transition-all" />
                  <img src="/assets/logo-brand/logo-agl.png" alt="AGL" className="h-10 object-contain grayscale hover:grayscale-0 transition-all" />
                  <img src="/assets/logo-brand/logo-sitarail.png" alt="Sitarail" className="h-10 object-contain grayscale hover:grayscale-0 transition-all" />
                  <img src="/assets/logo-brand/logo-sodexam.png" alt="Sodexam" className="h-10 object-contain grayscale hover:grayscale-0 transition-all" />
                  <img src="/assets/logo-brand/logo-skan.png" alt="Skan" className="h-10 object-contain grayscale hover:grayscale-0 transition-all" />
                  {/* Duplication pour l'effet infini */}
                  <img src="/assets/logo-brand/logo-mtnd.png" alt="MTND" className="h-10 object-contain grayscale hover:grayscale-0 transition-all" />
                  <img src="/assets/logo-brand/logo-agl.png" alt="AGL" className="h-10 object-contain grayscale hover:grayscale-0 transition-all" />
                  <img src="/assets/logo-brand/logo-sitarail.png" alt="Sitarail" className="h-10 object-contain grayscale hover:grayscale-0 transition-all" />
                  <img src="/assets/logo-brand/logo-sodexam.png" alt="Sodexam" className="h-10 object-contain grayscale hover:grayscale-0 transition-all" />
                  <img src="/assets/logo-brand/logo-skan.png" alt="Skan" className="h-10 object-contain grayscale hover:grayscale-0 transition-all" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Title />

        {/* Image hero en position absolue à droite */}
        <HeroImage />
      </div>
      
      {/* Icône de scroll avec animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 lg:flex lg:flex-col hidden items-center gap-2 opacity-0 animate-fade-in [animation-delay:0.8s]">
        <div className="w-6 h-10 border-2 border-black rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-black rounded-full animate-scroll-down"></div>
        </div>
      </div>

    </div>
  );
}

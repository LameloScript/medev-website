'use client';

import { useState, useEffect } from 'react';

interface Project {
    id: number;
    slug: string;
    title: string;
    subtitle: string;
    category: string;
    description: string;
    image: string;
    link: string;
    technologies: {
        name: string;
        icon: string;
    }[];
}

interface YprojectProps {
    projects: Project[];
}

export default function yproject({ projects }: YprojectProps) {
    // Limiter à seulement les 3 premiers projets
    const displayedProjects = projects.slice(0, 3);
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % displayedProjects.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    // Auto-play carousel
    useEffect(() => {
        if (displayedProjects.length === 0) return;

        const timer = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [currentSlide, displayedProjects.length]);

    // Si pas de projets, ne rien afficher
    if (!projects || projects.length === 0) {
        return null;
    }

    return (
        <div className="min-h-screen flex flex-col lg:gap-24 lg:py-22 py-14 px-4 lg:px-20">
            <div className="lg:flex lg:flex-col gap-4 items-start lg:items-center">
                <div className="flex flex-col items-center justify-center">
                    <span className="text-black text-start text-xs lg:text-sm">[ NOS PROJETS RECENTS ]</span>
                    <h2 className="text-black font-bangers lg:text-5xl text-3xl mt-6 text-center lg:leading-14">
                        Des solutions digitales qui transforment <span className="text-secondary">votre vision</span> en succès
                    </h2>
                    <p className="text-gray-600 font-nunito text-sm md:text-base lg:text-lg text-center max-w-3xl mt-4 lg:mt-6 leading-relaxed">
                        Découvrez comment nous avons accompagné nos clients dans leur transformation digitale avec des solutions innovantes, performantes et sur mesure qui génèrent des résultats concrets.
                    </p>
                    <div className="flex items-center justify-center mt-6">
                        <a href="/fr/projects">
                            <button className="bg-secondary hover:bg-black transition-colors duration-200 flex items-center gap-2 px-4 py-2 rounded-full text-white text-base font-bangers w-fit opacity-0 animate-fade-in-up [animation-delay:0.4s]">
                                <div className="rounded-full bg-gray-100 p-1">
                                    <img src="/assets/Vector.png" alt="" className="w-5 h-5" />
                                </div>
                                Voir tous nos projets
                            </button>
                        </a>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative w-full mt-12">
                    <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
                        <div className="flex flex-col lg:flex-row">
                            {/* Content Section - Left Side */}
                            <div className="lg:w-3/6 flex flex-col gap-6 p-8 lg:p-16 justify-center bg-gray-50 order-2 lg:order-1">
                                {/* Category Badge */}
                                <div className="flex items-center gap-2 animate-fade-in">
                                    <span className="text-secondary text-xs lg:text-sm font-bold uppercase tracking-wider border border-secondary px-3 py-1 rounded-full">
                                        {displayedProjects[currentSlide].category}
                                    </span>
                                </div>

                                {/* Title */}
                                <div className="animate-fade-in [animation-delay:0.1s]">
                                    <h3 className="text-black font-bangers text-3xl lg:text-4xl mb-3">
                                        {displayedProjects[currentSlide].title}
                                    </h3>
                                    <p className="text-secondary font-bangers text-base lg:text-xl">
                                        {displayedProjects[currentSlide].subtitle}
                                    </p>
                                </div>

                                {/* Description */}
                                <p className="text-gray-700 text-base hidden lg:flex  leading-relaxed animate-fade-in [animation-delay:0.2s]">
                                    {displayedProjects[currentSlide].description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-col gap-4 mt-4 animate-fade-in [animation-delay:0.3s]">
                                     <span>Technologies</span>
                                    <div className="flex items-center   gap-4">

                                        {displayedProjects[currentSlide].technologies.map((tech: { name: string; icon: string }, idx: number) => (
                                            <div key={idx} className="group relative flex">

                                                <img
                                                    src={tech.icon}
                                                    alt={tech.name}
                                                    className="w-8 h-8 lg:w-14 lg:h-14 transition-transform group-hover:scale-110"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Link */}
                                <a
                                    href={displayedProjects[currentSlide].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-secondary font-bold text-base hover:gap-4 transition-all duration-300 mt-4 animate-fade-in [animation-delay:0.4s]"
                                >
                                    Découvrir le projet
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>

                            {/* Image Section - Right Side */}
                            <div className="lg:w-4/6 relative h-56 lg:h-auto min-h-[300px] overflow-hidden order-1 lg:order-2 bg-linear-to-br from-gray-100 to-gray-200 ">
                                <img
                                    key={currentSlide}
                                    src={displayedProjects[currentSlide].image}
                                    alt={displayedProjects[currentSlide].title}
                                    className="w-full h-full object-cover rounded-tl-lg animate-fade-in"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-3 mt-8">
                        {displayedProjects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    index === currentSlide
                                        ? 'bg-secondary w-12 h-3'
                                        : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

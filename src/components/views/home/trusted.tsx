"use client";

import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
    {
        id: 1,
        quote: "Medev Group nous a permis d'avoir une équipe créative interne. Ils ont compris notre audience et notre vision dès le premier jour. Le site web nous a permis d'atteindre 1 000 inscriptions dès le premier mois.",
        author: "Amadou Diallo",
        role: "PDG, TechAfrique",
        avatar: "/assets/avatar-placeholder.jpg"
    },
    {
        id: 2,
        quote: "De la stratégie à l'exécution, Medev Group a apporté clarté et savoir-faire. Chaque point de contact qu'ils ont conçu était réfléchi. Le nouveau branding a complètement transformé la perception de nos clients.",
        author: "Fatou Sow",
        role: "Directrice Marketing, InnovSénégal",
        avatar: "/assets/avatar-placeholder.jpg"
    }
];

export default function Trusted() {
    return (
        <div className="flex flex-col gap-8 lg:gap-12">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-8">
                <div className="w-full lg:w-1/2">
                    <span className="text-xs lg:text-sm">[TÉMOIGNAGES]</span>
                    <h2 className="font-bebas w-2/3 text-3xl sm:text-5xl lg:text-7xl pt-2 lg:pt-4">FONDÉE SUR LA CONFIANCE.</h2>
                </div>

                <p className="w-full lg:w-1/2 text-sm lg:text-base text-left lg:text-right lg:pt-8">
                    Nous créons des expériences qui font bouger les choses, des interfaces qui comprennent les gens, des parcours simples, et des résultats percutants.
                </p>
            </div>

            {/* Testimonials Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Medev Card - Fixed on the left */}
                <div className="bg-linear-to-br from-orange-500 to-orange-600 rounded-3xl p-8 lg:p-12 flex flex-col items-center justify-center text-white text-center min-h-[400px] lg:min-h-[500px]">
                    <h3 className="text-4xl lg:text-5xl  tracking-wider mb-8 font-bebas">MEDEV GROUP</h3>
                    <p className="text-xl lg:text-xl mb-12 font-nunito leading-none">
                        Aider les Entreprises à promouvoir leur produit
                    </p>
                    <div className="flex gap-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 lg:w-8 lg:h-8 fill-white" />
                        ))}
                    </div>
                    <p className="text-lg lg:text-xl font-medium font-nunito">56+ Témoignages</p>
                </div>

                {/* Scrolling Testimonials - Takes 2 columns on desktop */}
                <div className="lg:col-span-2 overflow-hidden relative testimonial-fade-wrapper">
                    <div className="flex gap-6 animate-scroll-left">
                        {/* Triple the testimonials for seamless loop */}
                        {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                            <div
                                key={`${testimonial.id}-${index}`}
                                className="bg-gray-50 rounded-3xl p-8 lg:p-10 flex flex-col justify-between min-h-[400px] lg:min-h-[500px] w-full lg:w-[calc(50%-12px)] flex-shrink-0"
                            >
                                <div>
                                    <div className="text-orange-500 text-5xl lg:text-6xl mb-6">"</div>
                                    <p className="text-base lg:text-lg leading-relaxed text-gray-700 mb-6">
                                        {testimonial.quote}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 mt-auto">
                                    <Avatar className="w-12 h-12 lg:w-14 lg:h-14">
                                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                                        <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-base lg:text-lg">{testimonial.author}</p>
                                        <p className="text-sm lg:text-base text-gray-600">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Fade edges */}
                    <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
                    <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll-left {
                    animation: scroll-left 40s linear infinite;
                }

                .animate-scroll-left:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    )
}
"use client"

import { Wallet, ShoppingCart, HeartPulse, GraduationCap, Cloud, Package, Home, Store, Hotel, Film, Shield, Zap, Landmark, Globe, HandshakeIcon } from "lucide-react"

const industries = [
    {
        icon: Wallet,
        title: "Fintech",
        subtitle: "",
        value: "fintech"
    },
    {
        icon: ShoppingCart,
        title: "E-commerce",
        subtitle: "",
        value: "ecommerce"
    },
    {
        icon: HeartPulse,
        title: "Healthcare",
        subtitle: "",
        value: "healthcare"
    },
    {
        icon: GraduationCap,
        title: "Education",
        subtitle: "",
        value: "education"
    },
    {
        icon: Cloud,
        title: "SaaS",
        subtitle: "",
        value: "saas"
    },
    {
        icon: Package,
        title: "Logistique",
        subtitle: "",
        value: "logistics"
    },
    {
        icon: Home,
        title: "Immobilier",
        subtitle: "",
        value: "real-estate"
    },
    {
        icon: Store,
        title: "Retail",
        subtitle: "",
        value: "retail"
    },
    {
        icon: Hotel,
        title: "Hôtellerie",
        subtitle: "",
        value: "hospitality"
    },
    {
        icon: Film,
        title: "Showbizz",
        subtitle: "",
        value: "entertainment"
    },
    {
        icon: Shield,
        title: "Assurances",
        subtitle: "",
        value: "insurance"
    },
    {
        icon: Zap,
        title: "Énergies",
        subtitle: "",
        value: "energy"
    },
    {
        icon: Landmark,
        title: "Gouvernement &",
        subtitle: "Instituts publics",
        value: "government"
    },
    {
        icon: Globe,
        title: "Multinationales",
        subtitle: "",
        value: "multinational"
    },
    {
        icon: HandshakeIcon,
        title: "ONG & Organisations",
        subtitle: "internationales",
        value: "ngo"
    }
];

export default function Industry() {
    const handleIndustryClick = (value: string) => {
        // Store the selected industry in sessionStorage
        sessionStorage.setItem('selectedIndustry', value);

        // Scroll to the project section
        const projectSection = document.getElementById('project-section');
        if (projectSection) {
            projectSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen flex flex-col lg:gap-16 lg:py-22 py-14 px-4 lg:px-20">
            {/* Header Section */}
            <div className="flex flex-col items-start lg:items-center justify-center">
                <span className="text-black text-xs lg:text-sm lg:text-center text-start">[ QUI NOUS ACCOMPAGNONS ? ]</span>
                <h2 className="text-black font-bangers lg:text-5xl text-3xl mt-6 lg:text-center text-start lg:leading-14">
                    Les secteurs que nous <span className="text-secondary">accompagnons</span>
                </h2>
                <p className="lg:text-center text-start font-nunito text-sm md:text-base mt-6 lg:text-lg leading-relaxed max-w-3xl lg:mt-4 md:mt-6">
                    Nous mettons notre expertise au service de divers secteurs d'activité pour transformer leurs défis digitaux en opportunités de croissance.
                </p>
            </div>

            {/* Industries Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 lg:mt-12 max-w-7xl mx-auto w-full">
                {industries.map((industry, index) => {
                    const IconComponent = industry.icon;
                    return (
                        <div
                            key={index}
                            onClick={() => handleIndustryClick(industry.value)}
                            className="group bg-white border border-gray-200 rounded-lg lg:rounded-xl p-4 sm:p-5 lg:p-6 hover:border-secondary hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center gap-3 sm:gap-4"
                        >
                            <div className="text-black group-hover:text-secondary shrink-0 group-hover:scale-110 transition-all duration-300">
                                <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-secondary font-bold text-base sm:text-lg lg:text-xl leading-tight">
                                    {industry.title}
                                </h3>
                                {industry.subtitle && (
                                    <span className="text-secondary font-bold text-base sm:text-lg lg:text-xl leading-tight">
                                        {industry.subtitle}
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* CTA Section */}
            <div className="flex flex-col items-center justify-center mt-12 lg:mt-16 max-w-4xl mx-auto text-center">
                <h3 className="text-black font-bangers text-2xl sm:text-3xl lg:text-4xl mb-4">
                    Votre secteur n'est pas listé ?
                </h3>
                <p className="text-gray-600 font-nunito text-sm sm:text-base lg:text-lg mb-6 lg:mb-8 px-4">
                    Chaque projet est unique. Discutons ensemble de vos besoins spécifiques et découvrons comment nous pouvons vous accompagner dans votre transformation digitale.
                </p>
                <a
                    href="/fr/Contact"
                    className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base lg:text-lg"
                >
                    Parlons de votre projet
                </a>
            </div>
        </div>
    )
}
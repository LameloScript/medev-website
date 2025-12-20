export interface Project {
    id: number;
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

export const projects: Project[] = [
    {
        id: 1,
        title: "afrikababba",
        subtitle: "Plateforme de mise en relation B2B",
        category: "COMMERCE INTERNATIONAL",
        description: "Une plateforme innovante qui connecte les entreprises africaines pour faciliter les échanges commerciaux B2B. Solution complète incluant la gestion de profils d'entreprises, un système de mise en relation intelligent, et des outils de communication intégrés.",
        image: "/assets/projets/afikabba.png",
        link: "https://afrikababba.com",
        technologies: [
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
        ]
    },
    {
        id: 2,
        title: "groupe galabi",
        subtitle: "Cabinet de conseil stratégique",
        category: "CONSEIL & STRATÉGIE",
        description: "Refonte complète de la présence digitale d'un cabinet de conseil stratégique de premier plan. Création d'un site web moderne avec système de gestion de contenu, espace client sécurisé, et intégration d'outils d'analyse pour le suivi des performances.",
        image: "/assets/projets/galabi.png",
        link: "https://groupegalabi.com",
        technologies: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
        ]
    }
];

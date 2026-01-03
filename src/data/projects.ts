// Types Strapi API
export interface StrapiRichTextNode {
    type: string;
    children: Array<{
        text: string;
        type: string;
    }>;
}

export interface StrapiImage {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number | null;
    height: number | null;
    formats: any;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface StrapiTechnology {
    id: number;
    name: string;
}

export interface StrapiResult {
    id: number;
    value: string;
    title: string;
    subtitle: string;
}

export interface StrapiDeliverable {
    id: number;
    text_1: string;
    text_2: string;
    text_3: string;
    text_4: string;
}

export interface StrapiMethodology {
    id: number;
    number: string;
    title: string;
    description: string;
    deliverables?: StrapiDeliverable[];
}

export interface StrapiTestimonial {
    id: number;
    name: string;
    company: string;
    quote: StrapiRichTextNode[];
}

export interface StrapiProject {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Client: string;
    Description: string;
    Duration: string;
    websiteUrl: string;
    challenge: StrapiRichTextNode[];
    solution: StrapiRichTextNode[];
    category: string;
    mainImage?: StrapiImage;
    technologies?: StrapiTechnology[];
    results?: StrapiResult[];
    methodology?: StrapiMethodology[];
    testimonial?: StrapiTestimonial[];
}

export interface StrapiProjectsResponse {
    data: StrapiProject[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

// Types pour l'application
export interface Project {
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

export const projects: Project[] = [
    {
        id: 1,
        slug: "afrikababba",
        title: "afrikababba",
        subtitle: "Plateforme de mise en relation B2B",
        category: "COMMERCE INTERNATIONAL",
        description: "Une plateforme innovante qui connecte les entreprises africaines pour faciliter les échanges commerciaux B2B. Solution complète incluant la gestion de profils d'entreprises, un système de mise en relation intelligent, et des outils de communication intégrés.",
        image: "/assets/projet-1.png",
        link: "https://afrikababba.com",
        technologies: [
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
        ]
    },
    {
        id: 2,
        slug: "groupe-galabi",
        title: "groupe galabi",
        subtitle: "Cabinet de conseil stratégique",
        category: "CONSEIL & STRATÉGIE",
        description: "Refonte complète de la présence digitale d'un cabinet de conseil stratégique de premier plan. Création d'un site web moderne avec système de gestion de contenu, espace client sécurisé, et intégration d'outils d'analyse pour le suivi des performances.",
        image: "/assets/projet.png",
        link: "https://groupegalabi.com",
        technologies: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
        ]
    },
    {
        id: 6,
        slug: "railtrack-sitarail",
        title: "RailTrack",
        subtitle: "Système de gestion ferroviaire Sitarail",
        category: "LOGISTIQUE & TRANSPORT",
        description: "Solution de gestion complète pour le transport ferroviaire incluant le suivi des trains en temps réel, la gestion des réservations, l'optimisation des itinéraires et la maintenance prédictive des infrastructures ferroviaires.",
        image: "/assets/projects/railtrack.jpg",
        link: "#",
        technologies: [
            { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
        ]
    },
    {
        id: 8,
        slug: "taohome",
        title: "TaoHome",
        subtitle: "E-commerce d'articles ménagers",
        category: "E-COMMERCE",
        description: "Plateforme e-commerce complète spécialisée dans les articles ménagers avec catalogue produits intelligent, système de paiement sécurisé multi-devises, gestion des stocks en temps réel et livraison optimisée.",
        image: "/assets/projects/taohome.jpg",
        link: "#",
        technologies: [
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "Stripe", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
        ]
    },
    {
        id: 9,
        slug: "caracole-afrique",
        title: "Caracole Afrique",
        subtitle: "E-commerce panafricain",
        category: "E-COMMERCE",
        description: "Marketplace e-commerce panafricaine permettant la vente de produits variés à travers le continent. Intégration de multiples passerelles de paiement locales, système de logistique multi-pays et gestion avancée des vendeurs.",
        image: "/assets/projects/caracole.jpg",
        link: "#",
        technologies: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
        ]
    },
    {
        id: 10,
        slug: "qrcode-pro",
        title: "QRcode Pro",
        subtitle: "Générateur de QR codes professionnels",
        category: "SAAS",
        description: "Application SaaS de génération de QR codes personnalisés pour professionnels avec statistiques d'utilisation avancées, export multi-format (PNG, SVG, PDF), designs personnalisables et tableau de bord analytique.",
        image: "/assets/projects/qrcode-pro.jpg",
        link: "#",
        technologies: [
            { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
            { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
            { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" }
        ]
    }
];

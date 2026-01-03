export interface BlogArticle {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image?: string
  featured?: boolean
  slug?: string
}

export const blogArticles: BlogArticle[] = [
  {
    id: 1,
    title: "L'IA au service du développement africain",
    excerpt: "Découvrez comment l'intelligence artificielle révolutionne les secteurs clés du continent africain, de l'agriculture intelligente aux villes connectées.",
    category: "Intelligence Artificielle",
    date: "15 décembre 2024",
    readTime: "5 min",
    image: "https://picsum.photos/seed/ia-developpement-africain/1200/800",
    featured: true,
    slug: "ia-developpement-africain"
  },
  {
    id: 2,
    title: "Les applications mobiles transforment l'agriculture en Côte d'Ivoire",
    excerpt: "Comment les technologies mobiles permettent aux agriculteurs d'optimiser leurs rendements et d'accéder aux marchés.",
    category: "Technologie",
    date: "10 décembre 2024",
    readTime: "4 min",
    image: "https://picsum.photos/seed/applications-mobiles-agriculture-cote-ivoire/1200/800",
    slug: "applications-mobiles-agriculture-cote-ivoire"
  },
  {
    id: 3,
    title: "IoT et villes intelligentes : l'avenir urbain africain",
    excerpt: "L'Internet des Objets révolutionne la gestion urbaine en Afrique avec des solutions innovantes pour l'énergie, l'eau et les transports.",
    category: "IoT",
    date: "5 décembre 2024",
    readTime: "6 min",
    image: "https://picsum.photos/seed/iot-villes-intelligentes/1200/800"
    ,
    slug: "iot-villes-intelligentes-afrique"
  },
  {
    id: 4,
    title: "Géomatique et gestion des ressources naturelles",
    excerpt: "Les technologies géospatiales au service de la protection de l'environnement et de la gestion durable des ressources.",
    category: "Géomatique",
    date: "1 décembre 2024",
    readTime: "5 min",
    image: "https://picsum.photos/seed/geomatique-ressources-naturelles/1200/800",
    slug: "geomatique-gestion-ressources-naturelles"
  },
  {
    id: 5,
    title: "Cloud Computing : Accélérer la transformation digitale des PME",
    excerpt: "Comment le cloud permet aux PME africaines de gagner en agilité et en compétitivité sans investissements lourds.",
    category: "Cloud",
    date: "28 novembre 2024",
    readTime: "4 min",
    image: "https://picsum.photos/seed/cloud-computing-afrique/1200/800",
    slug: "cloud-computing-transformation-digitale-pme"
  },
  {
    id: 6,
    title: "Cybersécurité : Protéger les entreprises à l'ère digitale",
    excerpt: "Les meilleures pratiques pour sécuriser vos infrastructures et données dans un monde hyperconnecté.",
    category: "Sécurité",
    date: "25 novembre 2024",
    readTime: "7 min",
    image: "https://picsum.photos/seed/cybersecurite-afrique/1200/800",
    slug: "cybersecurite-protection-entreprises"
  },
  {
    id: 7,
    title: "Design UX/UI : Créer des expériences qui convertissent",
    excerpt: "L'importance d'un design centré utilisateur pour maximiser l'engagement et la conversion.",
    category: "Design",
    date: "20 novembre 2024",
    readTime: "5 min",
    image: "https://picsum.photos/seed/design-ux-ui/1200/800",
    slug: "design-ux-ui-experiences-conversion"
  },
  {
    id: 8,
    title: "E-commerce en Afrique : Tendances et opportunités 2025",
    excerpt: "Analyse des tendances du commerce électronique et des opportunités pour les entrepreneurs africains.",
    category: "E-commerce",
    date: "15 novembre 2024",
    readTime: "6 min",
    image: "https://picsum.photos/seed/ecommerce-afrique-2025/1200/800",
    slug: "ecommerce-afrique-tendances-2025"
  }
]

export const blogCategories = [
  "Tous",
  "Intelligence Artificielle",
  "Technologie",
  "IoT",
  "Géomatique",
  "Cloud",
  "Sécurité",
  "Design",
  "E-commerce"
]

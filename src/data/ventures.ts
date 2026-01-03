export interface Venture {
  id: number
  name: string
  description: string
  sector: string
  status: 'active' | 'development' | 'launched'
  year: number
  website?: string
  features: string[]
}

export const ventures: Venture[] = [
  {
    id: 1,
    name: "AgriTech Solutions",
    description: "Plateforme digitale connectant les agriculteurs aux marchés et fournissant des outils d'analyse prédictive pour optimiser les rendements agricoles.",
    sector: "Agriculture",
    status: "active",
    year: 2023,
    website: "https://agritech.medev-group.com",
    features: [
      "Analyse prédictive des récoltes",
      "Marketplace agricole",
      "Conseils agronomiques IA",
      "Gestion des stocks"
    ]
  },
  {
    id: 2,
    name: "HealthConnect",
    description: "Application de télémédecine facilitant l'accès aux soins de santé dans les zones rurales grâce à la technologie mobile et l'IA.",
    sector: "Santé",
    status: "active",
    year: 2024,
    features: [
      "Consultations vidéo",
      "Diagnostic assisté par IA",
      "Dossier médical numérique",
      "Rappels de médicaments"
    ]
  },
  {
    id: 3,
    name: "EduLearn Africa",
    description: "Plateforme d'apprentissage en ligne adaptée aux contextes africains, avec des contenus localisés et un accès hors-ligne.",
    sector: "Éducation",
    status: "launched",
    year: 2023,
    website: "https://edulearn-africa.com",
    features: [
      "Cours hors-ligne",
      "Contenus localisés",
      "Certifications reconnues",
      "Mentorat virtuel"
    ]
  },
  {
    id: 4,
    name: "FinTech Pay",
    description: "Solution de paiement mobile sécurisée facilitant les transactions financières et l'inclusion bancaire en Afrique de l'Ouest.",
    sector: "Finance",
    status: "active",
    year: 2024,
    features: [
      "Transferts instantanés",
      "Micro-crédit",
      "Épargne automatique",
      "Paiement sans contact"
    ]
  },
  {
    id: 5,
    name: "SmartCity IoT",
    description: "Réseau de capteurs IoT pour la gestion intelligente des villes : éclairage, déchets, trafic et qualité de l'air.",
    sector: "Smart City",
    status: "development",
    year: 2025,
    features: [
      "Gestion de l'éclairage public",
      "Monitoring environnemental",
      "Optimisation du trafic",
      "Gestion des déchets"
    ]
  },
  {
    id: 6,
    name: "GeoProtect",
    description: "Plateforme géospatiale de surveillance et protection des ressources naturelles utilisant l'imagerie satellite et l'IA.",
    sector: "Environnement",
    status: "active",
    year: 2024,
    website: "https://geoprotect.medev-group.com",
    features: [
      "Surveillance par satellite",
      "Détection de déforestation",
      "Prévention des inondations",
      "Cartographie interactive"
    ]
  },
  {
    id: 7,
    name: "O'secours",
    description: "Application d’alerte et d’assistance d’urgence connectant les citoyens aux services de secours.",
    sector: "Smart City",
    status: "active",
    year: 2024,
    features: [
      "Alerte SOS en un clic",
      "Géolocalisation des incidents",
      "Routage vers services compétents",
      "Notifications temps réel"
    ]
  },
  {
    id: 8,
    name: "Telesanté CI",
    description: "Plateforme de télémédecine dédiée à la Côte d’Ivoire pour des consultations et un suivi à distance.",
    sector: "Santé",
    status: "launched",
    year: 2023,
    features: [
      "Consultations vidéo sécurisées",
      "Prise de rendez-vous",
      "Dossier patient numérique",
      "Paiement mobile"
    ]
  },
  {
    id: 9,
    name: "Ivoire Swipe Survey",
    description: "Solution de sondages rapides pour collecter des insights auprès des citoyens et des clients.",
    sector: "Smart City",
    status: "active",
    year: 2024,
    features: [
      "Questionnaires swipe",
      "Analyse en temps réel",
      "Tableaux de bord",
      "Export des données"
    ]
  },
  {
    id: 10,
    name: "Yanya",
    description: "Super-app financière offrant portefeuille digital, paiements P2P et services marchands.",
    sector: "Finance",
    status: "development",
    year: 2025,
    features: [
      "Portefeuille digital",
      "Paiements P2P",
      "Cashback et récompenses",
      "API pour marchands"
    ]
  },
  {
    id: 11,
    name: "Mon fournisseur 2.0",
    description: "Marketplace B2B reliant commerçants et fournisseurs avec commande, livraison et paiement intégré.",
    sector: "Finance",
    status: "active",
    year: 2024,
    features: [
      "Catalogue B2B",
      "Négociation de prix",
      "Commande et livraison",
      "Paiements sécurisés"
    ]
  }
]

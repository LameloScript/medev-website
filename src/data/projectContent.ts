export interface ProjectContent {
  slug: string
  title: string
  subtitle: string
  category: string
  image: string
  link: string
  duration: string
  client: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    description: string
  }[]
  technologies: {
    name: string
    icon: string
  }[]
  workflow: {
    phase: string
    title: string
    description: string
    deliverables: string[]
  }[]
  testimonial?: {
    quote: string
    author: string
    role: string
    avatar?: string
  }
}

export const projectContent: Record<string, ProjectContent> = {
  'afrikababba': {
    slug: 'afrikababba',
    title: 'afrikababba',
    subtitle: 'Plateforme de mise en relation B2B',
    category: 'COMMERCE INTERNATIONAL',
    image: '/assets/projet-1.png',
    link: 'https://afrikababba.com',
    duration: '6 mois',
    client: 'AfrikaBabba',
    challenge: 'Les entreprises africaines rencontraient des difficultés à se connecter entre elles pour des opportunités commerciales B2B. Il manquait une plateforme centralisée, sécurisée et intuitive permettant de faciliter ces échanges à l\'échelle du continent.',
    solution: 'Nous avons développé une plateforme web complète qui digitalise l\'ensemble du processus de mise en relation B2B. La solution intègre des profils d\'entreprises enrichis, un système de matching intelligent basé sur les secteurs d\'activité, et des outils de communication intégrés pour faciliter les premiers échanges.',
    results: [
      {
        metric: '+500',
        value: 'Entreprises inscrites',
        description: 'En 3 mois de lancement'
      },
      {
        metric: '85%',
        value: 'Taux de satisfaction',
        description: 'Des utilisateurs actifs'
      },
      {
        metric: '+200',
        value: 'Connexions établies',
        description: 'Entre entreprises'
      }
    ],
    technologies: [
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' }
    ],
    workflow: [
      {
        phase: '01',
        title: 'Découverte & Analyse',
        description: 'Compréhension approfondie des besoins du marché B2B africain et identification des pain points des utilisateurs.',
        deliverables: [
          'Étude de marché et analyse concurrentielle',
          'Personas utilisateurs et user journeys',
          'Spécifications fonctionnelles détaillées'
        ]
      },
      {
        phase: '02',
        title: 'Design & Prototypage',
        description: 'Création d\'une expérience utilisateur fluide et d\'une interface moderne adaptée au contexte africain.',
        deliverables: [
          'Maquettes UI/UX complètes',
          'Prototype interactif validé',
          'Design system et charte graphique'
        ]
      },
      {
        phase: '03',
        title: 'Développement',
        description: 'Implémentation de la plateforme avec une architecture scalable et des fonctionnalités robustes.',
        deliverables: [
          'Backend API sécurisé',
          'Interface utilisateur responsive',
          'Système de matching intelligent',
          'Outils de communication intégrés'
        ]
      },
      {
        phase: '04',
        title: 'Lancement & Support',
        description: 'Déploiement progressif et accompagnement des premiers utilisateurs pour garantir une adoption réussie.',
        deliverables: [
          'Formation des équipes',
          'Documentation complète',
          'Support technique continu',
          'Optimisations post-lancement'
        ]
      }
    ],
    testimonial: {
      quote: 'L\'équipe a su comprendre nos besoins spécifiques et a livré une solution qui dépasse nos attentes. La plateforme est devenue un outil essentiel pour notre écosystème.',
      author: 'Directeur Général',
      role: 'AfrikaBabba',
      avatar: '/assets/team/img-1.avif'
    }
  },
  'groupe-galabi': {
    slug: 'groupe-galabi',
    title: 'groupe galabi',
    subtitle: 'Cabinet de conseil stratégique',
    category: 'CONSEIL & STRATÉGIE',
    image: '/assets/projet.png',
    link: 'https://groupegalabi.com',
    duration: '4 mois',
    client: 'Groupe Galabi',
    challenge: 'Le cabinet disposait d\'une présence digitale obsolète qui ne reflétait pas son expertise et sa position de leader sur le marché. Il fallait moderniser l\'image de marque tout en intégrant des outils performants pour la gestion client.',
    solution: 'Refonte complète de l\'écosystème digital avec un site web moderne, un système de gestion de contenu intuitif, un espace client sécurisé, et l\'intégration d\'outils d\'analytics pour mesurer les performances et optimiser la stratégie digitale.',
    results: [
      {
        metric: '+150%',
        value: 'Trafic organique',
        description: 'En 2 mois'
      },
      {
        metric: '92%',
        value: 'Taux de conversion',
        description: 'Demandes de contact'
      },
      {
        metric: '-60%',
        value: 'Temps de chargement',
        description: 'Optimisation performances'
      }
    ],
    technologies: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' }
    ],
    workflow: [
      {
        phase: '01',
        title: 'Audit & Stratégie',
        description: 'Analyse de l\'existant et définition d\'une stratégie digitale alignée avec les objectifs business du cabinet.',
        deliverables: [
          'Audit digital complet',
          'Stratégie de contenu et SEO',
          'Roadmap de transformation digitale'
        ]
      },
      {
        phase: '02',
        title: 'Refonte UI/UX',
        description: 'Création d\'une identité visuelle premium et d\'une expérience utilisateur qui valorise l\'expertise du cabinet.',
        deliverables: [
          'Nouvelle identité visuelle',
          'Architecture de l\'information optimisée',
          'Maquettes desktop & mobile'
        ]
      },
      {
        phase: '03',
        title: 'Développement & Intégration',
        description: 'Développement d\'une solution technique performante avec CMS, espace client et analytics.',
        deliverables: [
          'Site web responsive haute performance',
          'CMS personnalisé pour la gestion de contenu',
          'Espace client sécurisé',
          'Intégration Google Analytics & tracking'
        ]
      },
      {
        phase: '04',
        title: 'Formation & Transfert',
        description: 'Accompagnement des équipes pour une prise en main autonome des outils et optimisation continue.',
        deliverables: [
          'Sessions de formation équipes',
          'Documentation technique et utilisateur',
          'Support et maintenance',
          'Rapports de performance mensuels'
        ]
      }
    ],
    testimonial: {
      quote: 'Une collaboration exemplaire qui a transformé notre présence digitale. L\'équipe a su allier expertise technique et compréhension de nos enjeux métier.',
      author: 'Responsable Marketing',
      role: 'Groupe Galabi',
      avatar: '/assets/team/img-2.avif'
    }
  },
  'yanya': {
    slug: 'yanya',
    title: 'YANYA',
    subtitle: 'Plateforme digitale innovante',
    category: 'FINTECH',
    image: '/assets/projects/yanya.jpg',
    link: '#',
    duration: '8 mois',
    client: 'YANYA',
    challenge: 'Le secteur financier africain nécessitait une solution digitale moderne et accessible permettant aux utilisateurs d\'effectuer des transactions financières de manière simple et sécurisée, tout en respectant les régulations locales.',
    solution: 'Développement d\'une plateforme fintech complète avec interface intuitive, intégration de passerelles de paiement multi-devises, système de gestion de transactions en temps réel et conformité aux standards de sécurité financière internationaux.',
    results: [
      {
        metric: '+2000',
        value: 'Utilisateurs actifs',
        description: 'Premier mois de lancement'
      },
      {
        metric: '99.9%',
        value: 'Disponibilité',
        description: 'Uptime de la plateforme'
      },
      {
        metric: '<2s',
        value: 'Temps de transaction',
        description: 'Performance optimale'
      }
    ],
    technologies: [
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' }
    ],
    workflow: [
      {
        phase: '01',
        title: 'Analyse & Conformité',
        description: 'Étude des exigences réglementaires et des besoins utilisateurs pour concevoir une solution conforme et performante.',
        deliverables: [
          'Analyse des régulations financières',
          'Étude de marché et concurrence',
          'Cahier des charges fonctionnel'
        ]
      },
      {
        phase: '02',
        title: 'Architecture & Sécurité',
        description: 'Conception d\'une architecture scalable avec des mécanismes de sécurité renforcés pour protéger les transactions financières.',
        deliverables: [
          'Architecture technique sécurisée',
          'Système de chiffrement des données',
          'Protocoles d\'authentification multi-facteurs'
        ]
      },
      {
        phase: '03',
        title: 'Développement & Intégration',
        description: 'Implémentation de la plateforme avec intégration des passerelles de paiement et tests rigoureux.',
        deliverables: [
          'Application mobile iOS & Android',
          'API backend robuste',
          'Intégration passerelles de paiement',
          'Dashboard administrateur'
        ]
      },
      {
        phase: '04',
        title: 'Déploiement & Monitoring',
        description: 'Lancement progressif avec monitoring en temps réel et support utilisateur dédié.',
        deliverables: [
          'Déploiement en production',
          'Système de monitoring 24/7',
          'Support client multicanal',
          'Optimisations continues'
        ]
      }
    ]
  },
  'mon-fournisseur': {
    slug: 'mon-fournisseur',
    title: 'Mon Fournisseur 2.0',
    subtitle: 'Plateforme d\'importation depuis la Chine',
    category: 'COMMERCE INTERNATIONAL',
    image: '/assets/projects/mon-fournisseur.jpg',
    link: 'https://landing-page-mon-fournisseur-2-0.vercel.app/',
    duration: '6 mois',
    client: 'Mon Fournisseur 2.0',
    challenge: 'Les entreprises africaines rencontraient de grandes difficultés pour importer des produits depuis la Chine : barrières linguistiques, manque de transparence, complexité logistique et risques financiers élevés.',
    solution: 'Création d\'une plateforme complète facilitant chaque étape de l\'importation : recherche de fournisseurs vérifiés, gestion des commandes en temps réel, suivi logistique intégré, et système de paiement sécurisé avec protection acheteur.',
    results: [
      {
        metric: '+150',
        value: 'Fournisseurs vérifiés',
        description: 'Base de données qualifiée'
      },
      {
        metric: '75%',
        value: 'Réduction délais',
        description: 'Process d\'importation optimisé'
      },
      {
        metric: '+500',
        value: 'Commandes traitées',
        description: 'En 6 mois d\'activité'
      }
    ],
    technologies: [
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Stripe', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
    ],
    workflow: [
      {
        phase: '01',
        title: 'Étude de marché',
        description: 'Analyse approfondie du secteur de l\'importation Chine-Afrique et identification des pain points majeurs.',
        deliverables: [
          'Cartographie des acteurs du marché',
          'Interviews utilisateurs et fournisseurs',
          'Modèle économique et proposition de valeur'
        ]
      },
      {
        phase: '02',
        title: 'Design d\'expérience',
        description: 'Conception d\'un parcours utilisateur simplifié permettant de commander facilement depuis la Chine.',
        deliverables: [
          'User flows et wireframes',
          'Interface multilingue (FR/EN/CN)',
          'Prototypes interactifs validés'
        ]
      },
      {
        phase: '03',
        title: 'Développement plateforme',
        description: 'Construction d\'une solution robuste avec marketplace, système de commande et suivi logistique intégré.',
        deliverables: [
          'Marketplace de fournisseurs',
          'Système de gestion des commandes',
          'Tracking logistique en temps réel',
          'Paiements sécurisés multi-devises'
        ]
      },
      {
        phase: '04',
        title: 'Lancement & Croissance',
        description: 'Déploiement de la plateforme avec stratégie d\'acquisition et partenariats stratégiques.',
        deliverables: [
          'Onboarding fournisseurs chinois',
          'Campagnes marketing ciblées',
          'Partenariats logistiques',
          'Support client bilingue'
        ]
      }
    ],
    testimonial: {
      quote: 'Mon Fournisseur 2.0 a révolutionné notre façon d\'importer. La plateforme est intuitive et nous fait gagner un temps précieux.',
      author: 'Directeur des Achats',
      role: 'Entreprise cliente'
    }
  },
  'ivoire-swipe-survey': {
    slug: 'ivoire-swipe-survey',
    title: 'Ivoire Swipe Survey',
    subtitle: 'Application de sondages interactifs',
    category: 'SAAS',
    image: '/assets/projects/ivoire-swipe.jpg',
    link: 'https://ivoire-swipe-survey-main.vercel.app/',
    duration: '4 mois',
    client: 'Ivoire Swipe',
    challenge: 'Les méthodes traditionnelles de collecte de données par sondages étaient fastidieuses, avec de faibles taux de participation et une expérience utilisateur médiocre sur mobile.',
    solution: 'Développement d\'une plateforme SaaS innovante avec interface swipe intuitive inspirée des applications modernes, permettant de créer, distribuer et analyser des sondages avec une expérience utilisateur engageante et des insights en temps réel.',
    results: [
      {
        metric: '+85%',
        value: 'Taux de complétion',
        description: 'Vs méthodes traditionnelles'
      },
      {
        metric: '3x',
        value: 'Vitesse de réponse',
        description: 'Interface swipe optimisée'
      },
      {
        metric: '+1000',
        value: 'Sondages créés',
        description: 'Premiers 3 mois'
      }
    ],
    technologies: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'Chart.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
    ],
    workflow: [
      {
        phase: '01',
        title: 'Recherche UX',
        description: 'Étude des comportements utilisateurs et des meilleures pratiques en matière de collecte de données mobile.',
        deliverables: [
          'Analyse des solutions concurrentes',
          'Tests utilisateurs et insights',
          'Stratégie d\'engagement utilisateur'
        ]
      },
      {
        phase: '02',
        title: 'Design interface swipe',
        description: 'Création d\'une interface mobile-first avec interactions gestuelles fluides et engageantes.',
        deliverables: [
          'Prototypes interactifs haute-fidélité',
          'Animations et micro-interactions',
          'Design system cohérent'
        ]
      },
      {
        phase: '03',
        title: 'Développement SaaS',
        description: 'Construction de la plateforme avec créateur de sondages, système de distribution et analytics avancés.',
        deliverables: [
          'Builder de sondages drag & drop',
          'Application mobile responsive',
          'Dashboard analytics temps réel',
          'Export de données multi-format'
        ]
      },
      {
        phase: '04',
        title: 'Optimisation & Scale',
        description: 'Amélioration continue basée sur les retours utilisateurs et optimisation des performances.',
        deliverables: [
          'A/B testing des fonctionnalités',
          'Optimisation des conversions',
          'Documentation API',
          'Programme de formation clients'
        ]
      }
    ]
  },
  'railtrack-sitarail': {
    slug: 'railtrack-sitarail',
    title: 'RailTrack',
    subtitle: 'Système de gestion ferroviaire Sitarail',
    category: 'LOGISTIQUE & TRANSPORT',
    image: '/assets/projects/railtrack.jpg',
    link: '#',
    duration: '10 mois',
    client: 'Sitarail',
    challenge: 'Sitarail gérait manuellement les opérations ferroviaires avec des outils obsolètes, causant des retards, une visibilité limitée sur les trains et une maintenance réactive plutôt que préventive.',
    solution: 'Développement d\'un système de gestion ferroviaire complet avec suivi GPS des trains en temps réel, gestion intelligente des réservations, optimisation automatique des itinéraires et maintenance prédictive basée sur l\'IA.',
    results: [
      {
        metric: '-40%',
        value: 'Réduction des retards',
        description: 'Optimisation des itinéraires'
      },
      {
        metric: '100%',
        value: 'Visibilité temps réel',
        description: 'Tracking GPS intégré'
      },
      {
        metric: '+60%',
        value: 'Efficacité maintenance',
        description: 'Maintenance prédictive'
      }
    ],
    technologies: [
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' }
    ],
    workflow: [
      {
        phase: '01',
        title: 'Audit opérationnel',
        description: 'Analyse complète des processus existants et identification des opportunités d\'optimisation digitale.',
        deliverables: [
          'Cartographie des flux opérationnels',
          'Audit des infrastructures IT',
          'Plan de transformation digitale'
        ]
      },
      {
        phase: '02',
        title: 'Architecture système',
        description: 'Conception d\'une architecture robuste capable de gérer les opérations ferroviaires en temps réel.',
        deliverables: [
          'Architecture microservices scalable',
          'Intégration systèmes GPS et capteurs',
          'Modèles de maintenance prédictive'
        ]
      },
      {
        phase: '03',
        title: 'Développement modules',
        description: 'Implémentation des modules de gestion : tracking, réservations, itinéraires et maintenance.',
        deliverables: [
          'Module de tracking temps réel',
          'Système de réservation en ligne',
          'Optimiseur d\'itinéraires',
          'Dashboard de maintenance prédictive'
        ]
      },
      {
        phase: '04',
        title: 'Déploiement & Formation',
        description: 'Migration progressive des systèmes et formation approfondie des équipes opérationnelles.',
        deliverables: [
          'Migration des données historiques',
          'Formation des agents et superviseurs',
          'Support technique 24/7',
          'Optimisations continues'
        ]
      }
    ],
    testimonial: {
      quote: 'RailTrack a transformé nos opérations. Nous avons désormais une visibilité complète et pouvons anticiper les problèmes avant qu\'ils ne surviennent.',
      author: 'Directeur des Opérations',
      role: 'Sitarail'
    }
  },
  'plateforme-medecins-patients': {
    slug: 'plateforme-medecins-patients',
    title: 'TéléSanté CI',
    subtitle: 'Plateforme de télémédecine',
    category: 'HEALTHCARE',
    image: '/assets/projects/telesante.jpg',
    link: '#',
    duration: '7 mois',
    client: 'TéléSanté CI',
    challenge: 'L\'accès aux soins médicaux était limité en zones rurales, avec de longues files d\'attente dans les centres urbains. Les patients avaient besoin d\'une solution pour consulter rapidement des médecins qualifiés.',
    solution: 'Création d\'une plateforme complète de télémédecine avec prise de rendez-vous en ligne, téléconsultation vidéo HD sécurisée, dossiers médicaux électroniques, prescription digitale et système de paiement intégré.',
    results: [
      {
        metric: '+5000',
        value: 'Téléconsultations',
        description: 'En 6 mois de lancement'
      },
      {
        metric: '94%',
        value: 'Satisfaction patients',
        description: 'Qualité des consultations'
      },
      {
        metric: '-70%',
        value: 'Temps d\'attente',
        description: 'Vs consultations physiques'
      }
    ],
    technologies: [
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'WebRTC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' }
    ],
    workflow: [
      {
        phase: '01',
        title: 'Conformité & Sécurité',
        description: 'Étude des régulations médicales et mise en place d\'un cadre de sécurité conforme aux normes RGPD et HIPAA.',
        deliverables: [
          'Analyse réglementaire santé',
          'Architecture de sécurité médicale',
          'Politique de confidentialité RGPD'
        ]
      },
      {
        phase: '02',
        title: 'Design UX Médical',
        description: 'Création d\'interfaces adaptées aux médecins et patients, avec une expérience simple et rassurante.',
        deliverables: [
          'Parcours patient optimisé',
          'Interface médecin professionnelle',
          'Design accessible et inclusif'
        ]
      },
      {
        phase: '03',
        title: 'Développement plateforme',
        description: 'Implémentation de la téléconsultation vidéo, dossiers médicaux et système de prescription digitale.',
        deliverables: [
          'Système de prise de rendez-vous',
          'Téléconsultation vidéo sécurisée',
          'Dossiers médicaux électroniques',
          'Prescription et ordonnance digitales'
        ]
      },
      {
        phase: '04',
        title: 'Lancement & Adoption',
        description: 'Onboarding progressif des médecins et campagne de sensibilisation des patients.',
        deliverables: [
          'Formation des médecins partenaires',
          'Campagne de communication patients',
          'Support médical et technique',
          'Monitoring qualité des consultations'
        ]
      }
    ],
    testimonial: {
      quote: 'Cette plateforme a révolutionné l\'accès aux soins. Je peux maintenant consulter mes patients même à distance, avec la même qualité qu\'en présentiel.',
      author: 'Dr. Koffi',
      role: 'Médecin généraliste'
    }
  },
  'taohome': {
    slug: 'taohome',
    title: 'TaoHome',
    subtitle: 'E-commerce d\'articles ménagers',
    category: 'E-COMMERCE',
    image: '/assets/projects/taohome.jpg',
    link: '#',
    duration: '6 mois',
    client: 'TaoHome',
    challenge: 'Le marché des articles ménagers en ligne manquait d\'une plateforme fiable offrant une large sélection de produits de qualité avec livraison rapide et paiement sécurisé.',
    solution: 'Développement d\'un site e-commerce complet avec catalogue produits intelligent, recommandations personnalisées, système de paiement multi-devises sécurisé, gestion des stocks en temps réel et optimisation de la livraison.',
    results: [
      {
        metric: '+3000',
        value: 'Produits référencés',
        description: 'Catalogue complet'
      },
      {
        metric: '88%',
        value: 'Taux de conversion',
        description: 'Panier optimisé'
      },
      {
        metric: '+2500',
        value: 'Commandes/mois',
        description: 'Croissance soutenue'
      }
    ],
    technologies: [
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Stripe', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Algolia', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
    ],
    workflow: [
      {
        phase: '01',
        title: 'Stratégie e-commerce',
        description: 'Définition du positionnement, de l\'assortiment produits et de la stratégie d\'acquisition clients.',
        deliverables: [
          'Étude de marché e-commerce',
          'Stratégie de merchandising',
          'Plan d\'acquisition multicanal'
        ]
      },
      {
        phase: '02',
        title: 'Design expérience achat',
        description: 'Création d\'un parcours d\'achat optimisé pour maximiser les conversions et réduire l\'abandon panier.',
        deliverables: [
          'Design UI moderne et engageant',
          'Optimisation du tunnel de conversion',
          'Fiches produits détaillées'
        ]
      },
      {
        phase: '03',
        title: 'Développement boutique',
        description: 'Implémentation de la boutique en ligne avec catalogue, recherche avancée et paiement sécurisé.',
        deliverables: [
          'Catalogue produits intelligent',
          'Moteur de recherche et filtres',
          'Système de paiement sécurisé',
          'Gestion des stocks et commandes'
        ]
      },
      {
        phase: '04',
        title: 'Lancement & Optimisation',
        description: 'Déploiement avec stratégie marketing et optimisation continue basée sur les données.',
        deliverables: [
          'Campagnes marketing de lancement',
          'SEO et référencement produits',
          'Analytics et optimisations',
          'Programme de fidélité'
        ]
      }
    ]
  },
  'caracole-afrique': {
    slug: 'caracole-afrique',
    title: 'Caracole Afrique',
    subtitle: 'E-commerce panafricain',
    category: 'E-COMMERCE',
    image: '/assets/projects/caracole.jpg',
    link: '#',
    duration: '8 mois',
    client: 'Caracole Afrique',
    challenge: 'Le commerce électronique panafricain souffrait d\'un manque de plateformes adaptées aux spécificités locales : paiements mobiles, logistique multi-pays et gestion de vendeurs multiples.',
    solution: 'Création d\'une marketplace panafricaine avec intégration de passerelles de paiement locales (Mobile Money, Orange Money, etc.), système logistique multi-pays optimisé et plateforme de gestion avancée pour les vendeurs.',
    results: [
      {
        metric: '+200',
        value: 'Vendeurs actifs',
        description: 'Écosystème marketplace'
      },
      {
        metric: '12',
        value: 'Pays couverts',
        description: 'Déploiement africain'
      },
      {
        metric: '+10k',
        value: 'Transactions/mois',
        description: 'Volume croissant'
      }
    ],
    technologies: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
    ],
    workflow: [
      {
        phase: '01',
        title: 'Analyse multi-pays',
        description: 'Étude des spécificités de chaque marché africain : paiements, logistique et régulations.',
        deliverables: [
          'Cartographie des marchés cibles',
          'Analyse des moyens de paiement locaux',
          'Stratégie logistique multi-pays'
        ]
      },
      {
        phase: '02',
        title: 'Architecture marketplace',
        description: 'Conception d\'une plateforme scalable capable de gérer vendeurs multiples et transactions multi-devises.',
        deliverables: [
          'Architecture technique évolutive',
          'Système multi-vendeurs',
          'Gestion multi-devises et taxes'
        ]
      },
      {
        phase: '03',
        title: 'Développement plateforme',
        description: 'Construction de la marketplace avec intégration des paiements locaux et outils de gestion vendeurs.',
        deliverables: [
          'Marketplace acheteurs et vendeurs',
          'Intégration Mobile Money',
          'Dashboard vendeurs avancé',
          'Système de livraison multi-pays'
        ]
      },
      {
        phase: '04',
        title: 'Expansion & Partenariats',
        description: 'Déploiement progressif dans les pays cibles avec partenariats logistiques et financiers.',
        deliverables: [
          'Onboarding vendeurs par pays',
          'Partenariats logistiques locaux',
          'Intégrations banques et opérateurs',
          'Support multilingue'
        ]
      }
    ]
  },
  'qrcode-pro': {
    slug: 'qrcode-pro',
    title: 'QRcode Pro',
    subtitle: 'Générateur de QR codes professionnels',
    category: 'SAAS',
    image: '/assets/projects/qrcode-pro.jpg',
    link: '#',
    duration: '3 mois',
    client: 'QRcode Pro',
    challenge: 'Les professionnels avaient besoin d\'une solution complète pour générer des QR codes personnalisés avec statistiques d\'utilisation, mais les outils existants étaient limités et peu professionnels.',
    solution: 'Développement d\'une application SaaS de génération de QR codes avec personnalisation avancée, statistiques d\'utilisation détaillées, export multi-format (PNG, SVG, PDF) et tableau de bord analytique en temps réel.',
    results: [
      {
        metric: '+5000',
        value: 'QR codes générés',
        description: 'Premier trimestre'
      },
      {
        metric: '95%',
        value: 'Taux de satisfaction',
        description: 'Utilisateurs actifs'
      },
      {
        metric: '1M+',
        value: 'Scans trackés',
        description: 'Analytics détaillés'
      }
    ],
    technologies: [
      { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
    ],
    workflow: [
      {
        phase: '01',
        title: 'Analyse besoins pros',
        description: 'Identification des cas d\'usage professionnels et des fonctionnalités essentielles attendues.',
        deliverables: [
          'Interviews utilisateurs pro',
          'Benchmark solutions existantes',
          'Spécifications fonctionnelles'
        ]
      },
      {
        phase: '02',
        title: 'Design générateur',
        description: 'Création d\'une interface intuitive permettant de personnaliser facilement les QR codes.',
        deliverables: [
          'Interface de personnalisation',
          'Prévisualisation temps réel',
          'Templates professionnels'
        ]
      },
      {
        phase: '03',
        title: 'Développement SaaS',
        description: 'Implémentation du générateur, du système d\'analytics et des exports multi-formats.',
        deliverables: [
          'Générateur de QR codes avancé',
          'Système de tracking des scans',
          'Dashboard analytics temps réel',
          'Export multi-format (PNG/SVG/PDF)'
        ]
      },
      {
        phase: '04',
        title: 'Monétisation & Growth',
        description: 'Mise en place de plans tarifaires et stratégie d\'acquisition de clients professionnels.',
        deliverables: [
          'Plans freemium et premium',
          'API pour développeurs',
          'Documentation complète',
          'Support client dédié'
        ]
      }
    ]
  },
  'osecours': {
    slug: 'osecours',
    title: 'O\'Secours',
    subtitle: 'Application d\'alerte d\'urgence géolocalisée',
    category: 'SÉCURITÉ & URGENCE',
    image: '/assets/projects/osecours.jpg',
    link: '#',
    duration: '6 mois',
    client: 'O\'Secours',
    challenge: 'En situation d\'urgence, les victimes perdent du temps précieux à expliquer leur localisation aux services de secours, retardant ainsi l\'intervention et mettant des vies en danger.',
    solution: 'Développement d\'une application mobile d\'alerte d\'urgence avec géolocalisation GPS précise en temps réel, notifications push instantanées aux services de secours, partage automatique de localisation avec contacts d\'urgence et interface simplifiée pour situations critiques.',
    results: [
      {
        metric: '<10s',
        value: 'Temps d\'alerte',
        description: 'De l\'urgence aux secours'
      },
      {
        metric: '±5m',
        value: 'Précision GPS',
        description: 'Localisation exacte'
      },
      {
        metric: '+15k',
        value: 'Utilisateurs actifs',
        description: 'Protection communautaire'
      }
    ],
    technologies: [
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'Google Maps API', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
    ],
    workflow: [
      {
        phase: '01',
        title: 'Design UX Urgence',
        description: 'Conception d\'une expérience ultra-simplifiée pour être utilisable même en situation de stress extrême.',
        deliverables: [
          'Étude comportements en urgence',
          'Interface minimaliste et claire',
          'Tests utilisateurs en conditions réelles'
        ]
      },
      {
        phase: '02',
        title: 'Architecture temps réel',
        description: 'Conception d\'un système ultra-rapide et fiable avec géolocalisation précise et notifications instantanées.',
        deliverables: [
          'Architecture haute disponibilité',
          'Système de géolocalisation GPS',
          'Notifications push en temps réel'
        ]
      },
      {
        phase: '03',
        title: 'Développement app',
        description: 'Implémentation de l\'application mobile avec bouton SOS, partage de localisation et alertes automatiques.',
        deliverables: [
          'Application mobile iOS & Android',
          'Bouton SOS d\'urgence',
          'Partage localisation temps réel',
          'Gestion contacts d\'urgence'
        ]
      },
      {
        phase: '04',
        title: 'Partenariats & Déploiement',
        description: 'Établissement de partenariats avec services de secours et campagne de sensibilisation grand public.',
        deliverables: [
          'Partenariats services d\'urgence',
          'Protocoles d\'intervention',
          'Campagne de sensibilisation',
          'Formation utilisateurs'
        ]
      }
    ],
    testimonial: {
      quote: 'O\'Secours est un outil vital. La rapidité de géolocalisation et d\'alerte peut sauver des vies dans les moments critiques.',
      author: 'Commandant des Sapeurs-Pompiers',
      role: 'Services d\'urgence'
    }
  }
}

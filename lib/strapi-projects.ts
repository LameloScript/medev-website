import { fetchStrapi, getStrapiMediaUrl } from './strapi';
import type { StrapiProject, StrapiProjectsResponse, Project, StrapiRichTextNode, StrapiTechnology } from '@/src/data/projects';
import { projects as staticProjects } from '@/src/data/projects';

/**
 * Extrait le texte d'un tableau de rich text nodes Strapi
 */
function extractTextFromRichText(richText: StrapiRichTextNode[]): string {
  if (!richText || richText.length === 0) return '';

  return richText
    .map(node =>
      node.children
        .map(child => child.text)
        .join('')
    )
    .join('\n');
}

/**
 * Génère un slug à partir d'un nom de client
 */
function generateSlug(clientName: string): string {
  return clientName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Retire les accents
    .replace(/[^a-z0-9]+/g, '-') // Remplace les caractères spéciaux par des tirets
    .replace(/^-+|-+$/g, ''); // Retire les tirets en début et fin
}

/**
 * Mappe les technologies Strapi vers le format Application avec icônes
 */
function mapTechnologies(technologies: StrapiTechnology[] = []): { name: string; icon: string }[] {
  if (!technologies || technologies.length === 0) {
    return [];
  }

  // Mapping des noms de technologies vers leurs icônes
  const iconMap: Record<string, string> = {
    'next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'nextjs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'next js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'typescript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'postgresql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'tailwind css': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    'tailwindcss': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    'vite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
    'vite js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
    'vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
    'redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    'mysql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'tensorflow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    'wordpress': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
    'elementor': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
    'react': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'nodejs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'mongodb': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'woocommerce': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-plain.svg',
    'multilangues': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
    'javascript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'css3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  };

  return technologies.map(tech => {
    const normalizedName = tech.name.toLowerCase().trim();
    const icon = iconMap[normalizedName] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg';

    return {
      name: tech.name.trim(),
      icon
    };
  });
}

/**
 * Transforme un projet Strapi en projet Application
 */
function transformStrapiProject(strapiProject: StrapiProject): Project {
  const slug = generateSlug(strapiProject.Client);
  const description = extractTextFromRichText(strapiProject.solution);

  // Utilise l'image de l'API ou une image par défaut
  const image = strapiProject.mainImage
    ? getStrapiMediaUrl(strapiProject.mainImage.url)
    : '/assets/projet.png';

  // Utilise les technologies de l'API
  const technologies = mapTechnologies(strapiProject.technologies);

  return {
    id: strapiProject.id,
    slug,
    title: strapiProject.Client,
    subtitle: strapiProject.Description,
    category: strapiProject.category,
    description: description || strapiProject.Description,
    image,
    link: strapiProject.websiteUrl || '#',
    technologies
  };
}

/**
 * Récupère tous les projets depuis l'API Strapi
 */
export async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetchStrapi<StrapiProjectsResponse>(
      '/api/projets?populate=*',
      {
        next: { revalidate: 3600 } // Revalide toutes les heures
      }
    );

    if (!response.data || response.data.length === 0) {
      console.warn('⚠️ No projects found in Strapi API, using static fallback');
      return staticProjects;
    }

    const projects = response.data.map(transformStrapiProject);

    return projects;
  } catch (error) {
    console.error('❌ Error fetching projects from Strapi:', error);
    // En cas d'erreur, retourner les données statiques
    return staticProjects;
  }
}

/**
 * Récupère un projet spécifique par son slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const projects = await getProjects();
    return projects.find(p => p.slug === slug) || null;
  } catch (error) {
    console.error(`Error fetching project with slug ${slug}:`, error);
    return null;
  }
}

/**
 * Interface pour les détails complets d'un projet
 */
export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  link: string;
  duration: string;
  client: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  technologies: {
    name: string;
    icon: string;
  }[];
  workflow: {
    phase: string;
    title: string;
    description: string;
    deliverables: string[];
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
  };
}

/**
 * Récupère les données brutes d'un projet Strapi (pour la page de détail)
 */
export async function getStrapiProjectBySlug(slug: string): Promise<StrapiProject | null> {
  try {
    // Population en deux étapes pour éviter les erreurs 400/500 de Strapi
    // Étape 1: Récupérer les projets avec populate standard
    const response = await fetchStrapi<StrapiProjectsResponse>(
      '/api/projets?populate=*',
      {
        next: { revalidate: 3600 }
      }
    );

    if (!response.data || response.data.length === 0) {
      return null;
    }

    const project = response.data.find(p => generateSlug(p.Client) === slug);

    if (!project) {
      return null;
    }

    // Étape 2: Si le projet a une methodology, récupérer les deliverables
    if (project.documentId) {
      try {
        const detailedResponse = await fetchStrapi<{data: StrapiProject}>(
          `/api/projets/${project.documentId}?populate[methodology][populate]=*`,
          {
            next: { revalidate: 3600 }
          }
        );

        if (detailedResponse.data && detailedResponse.data.methodology) {
          // Fusionner les données : garder toutes les données de l'étape 1 (technologies, mainImage, etc.)
          // et ajouter la methodology avec deliverables de l'étape 2
          return {
            ...project,
            methodology: detailedResponse.data.methodology
          };
        }
      } catch (error) {
        console.warn(`Could not fetch detailed methodology for ${slug}, using basic data`);
      }
    }

    return project;
  } catch (error) {
    console.error(`Error fetching Strapi project with slug ${slug}:`, error);
    return null;
  }
}

/**
 * Transforme les deliverables Strapi en tableau de strings
 */
function transformDeliverables(deliverables: any[]): string[] {
  if (!deliverables || deliverables.length === 0) {
    return [];
  }

  // Chaque deliverable a des champs text_1, text_2, text_3, text_4
  // On extrait tous les champs non vides
  const allDeliverables: string[] = [];

  deliverables.forEach(del => {
    ['text_1', 'text_2', 'text_3', 'text_4'].forEach(key => {
      if (del[key] && del[key].trim() !== '') {
        allDeliverables.push(del[key].trim());
      }
    });
  });

  return allDeliverables;
}

/**
 * Transforme un projet Strapi en ProjectDetail complet
 */
export function transformStrapiProjectToDetail(strapiProject: StrapiProject): ProjectDetail {
  const slug = generateSlug(strapiProject.Client);
  const image = strapiProject.mainImage
    ? getStrapiMediaUrl(strapiProject.mainImage.url)
    : '/assets/projet.png';

  const technologies = mapTechnologies(strapiProject.technologies);

  // Transforme les résultats Strapi
  const results = (strapiProject.results || []).map(result => ({
    metric: result.value,
    value: result.title,
    description: result.subtitle
  }));

  // Transforme la méthodologie en workflow avec deliverables
  const workflow = (strapiProject.methodology || []).map(method => ({
    phase: method.number,
    title: method.title,
    description: method.description,
    deliverables: transformDeliverables(method.deliverables || [])
  }));

  // Transforme le testimonial
  let testimonial = undefined;
  if (strapiProject.testimonial && strapiProject.testimonial.length > 0) {
    const firstTestimonial = strapiProject.testimonial[0];
    testimonial = {
      quote: extractTextFromRichText(firstTestimonial.quote),
      author: firstTestimonial.name,
      role: firstTestimonial.company,
      avatar: undefined
    };
  }

  return {
    slug,
    title: strapiProject.Client,
    subtitle: strapiProject.Description,
    category: strapiProject.category,
    image,
    link: strapiProject.websiteUrl || '#',
    duration: strapiProject.Duration,
    client: strapiProject.Client,
    challenge: extractTextFromRichText(strapiProject.challenge),
    solution: extractTextFromRichText(strapiProject.solution),
    results,
    technologies,
    workflow,
    testimonial
  };
}

/**
 * Récupère les détails complets d'un projet par son slug
 */
export async function getProjectDetailBySlug(slug: string): Promise<ProjectDetail | null> {
  try {
    const strapiProject = await getStrapiProjectBySlug(slug);
    if (!strapiProject) {
      console.warn(`Project with slug "${slug}" not found in Strapi`);
      return null;
    }

    return transformStrapiProjectToDetail(strapiProject);
  } catch (error) {
    console.error(`Error fetching project detail for slug ${slug}:`, error);
    return null;
  }
}

// Export de la fonction generateSlug pour utilisation externe
export { generateSlug, extractTextFromRichText };

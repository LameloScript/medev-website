/**
 * Strapi API Configuration et Helper Functions
 */

const STRAPI_API_URL = process.env.STRAPI_API_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

if (!STRAPI_API_TOKEN) {
  console.warn('STRAPI_API_TOKEN is not defined in environment variables');
}

/**
 * Options de base pour les requêtes Strapi
 */
const strapiOptions: RequestInit = {
  headers: {
    'Content-Type': 'application/json',
    ...(STRAPI_API_TOKEN && { Authorization: `Bearer ${STRAPI_API_TOKEN}` }),
  },
};

/**
 * Fetch data from Strapi API
 * @param path - API endpoint path (e.g., '/api/articles')
 * @param options - Additional fetch options
 * @returns Parsed JSON response
 */
export async function fetchStrapi<T = any>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${STRAPI_API_URL}${path}`;

  try {
    const response = await fetch(url, {
      ...strapiOptions,
      ...options,
      headers: {
        ...strapiOptions.headers,
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching from Strapi: ${path}`, error);
    throw error;
  }
}

/**
 * Fetch a single entry from Strapi
 * @param contentType - Content type name (e.g., 'articles')
 * @param id - Entry ID
 * @param params - Query parameters (populate, fields, etc.)
 */
export async function getStrapiEntry<T = any>(
  contentType: string,
  id: string | number,
  params?: Record<string, any>
): Promise<T> {
  const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
  return fetchStrapi<T>(`/api/${contentType}/${id}${queryString}`);
}

/**
 * Fetch multiple entries from Strapi
 * @param contentType - Content type name (e.g., 'articles')
 * @param params - Query parameters (populate, filters, sort, pagination, etc.)
 */
export async function getStrapiEntries<T = any>(
  contentType: string,
  params?: Record<string, any>
): Promise<T> {
  const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
  return fetchStrapi<T>(`/api/${contentType}${queryString}`);
}

/**
 * Helper to build populate parameter for nested relations
 * @param fields - Array of field names to populate
 */
export function buildPopulate(fields: string[]): string {
  return fields.join(',');
}

/**
 * Get the full URL for a Strapi media file
 * @param url - Relative or absolute URL from Strapi
 */
export function getStrapiMediaUrl(url: string | undefined | null): string {
  if (!url) return '';

  // If it's already a full URL, return as is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  // Otherwise, prepend the Strapi URL
  return `${STRAPI_API_URL}${url}`;
}

export { STRAPI_API_URL };

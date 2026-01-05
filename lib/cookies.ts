/**
 * Utilitaires de gestion des cookies sécurisés
 * Conforme aux bonnes pratiques OWASP et RGPD
 */

export interface CookieOptions {
  expires?: number; // jours
  path?: string;
  secure?: boolean;
  sameSite?: 'Strict' | 'Lax' | 'None';
  httpOnly?: boolean;
}

const defaultOptions: CookieOptions = {
  expires: 365,
  path: '/',
  secure: true,
  sameSite: 'Lax',
};

/**
 * Définit un cookie avec les attributs de sécurité appropriés
 */
export function setCookie(
  name: string,
  value: string,
  options: CookieOptions = {}
): void {
  const opts = { ...defaultOptions, ...options };
  
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  
  if (opts.expires) {
    const date = new Date();
    date.setTime(date.getTime() + opts.expires * 24 * 60 * 60 * 1000);
    cookieString += `; expires=${date.toUTCString()}`;
  }
  
  if (opts.path) {
    cookieString += `; path=${opts.path}`;
  }
  
  if (opts.secure) {
    cookieString += '; Secure';
  }
  
  if (opts.sameSite) {
    cookieString += `; SameSite=${opts.sameSite}`;
  }
  
  document.cookie = cookieString;
}

/**
 * Récupère la valeur d'un cookie
 */
export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    if (cookieName === encodeURIComponent(name)) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}

/**
 * Supprime un cookie
 */
export function deleteCookie(name: string, path: string = '/'): void {
  document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}; Secure; SameSite=Lax`;
}

/**
 * Types de consentement pour les cookies
 */
export interface CookieConsent {
  necessary: boolean;    // Toujours true - cookies essentiels
  analytics: boolean;    // Google Analytics / GTM
  marketing: boolean;    // Publicités, remarketing
  preferences: boolean;  // Préférences utilisateur (thème, langue)
}

const CONSENT_COOKIE_NAME = 'medev_cookie_consent';

/**
 * Récupère le consentement actuel de l'utilisateur
 */
export function getConsent(): CookieConsent | null {
  const consent = getCookie(CONSENT_COOKIE_NAME);
  if (!consent) return null;
  
  try {
    return JSON.parse(consent);
  } catch {
    return null;
  }
}

/**
 * Enregistre le consentement de l'utilisateur
 */
export function setConsent(consent: CookieConsent): void {
  setCookie(CONSENT_COOKIE_NAME, JSON.stringify(consent), {
    expires: 365,
    sameSite: 'Lax',
  });
}

/**
 * Vérifie si l'utilisateur a donné son consentement
 */
export function hasConsent(): boolean {
  return getConsent() !== null;
}

/**
 * Vérifie si le consentement analytics est donné
 */
export function hasAnalyticsConsent(): boolean {
  const consent = getConsent();
  return consent?.analytics ?? false;
}

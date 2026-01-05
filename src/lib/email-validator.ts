// Liste des domaines d'email temporaires/jetables à bloquer
const TEMPORARY_EMAIL_DOMAINS = [
  // Services temporaires populaires
  '10minutemail.com', '10minutemail.net', 'guerrillamail.com', 'guerrillamail.org',
  'mailinator.com', 'tempmail.com', 'temp-mail.org', 'throwaway.email',
  'maildrop.cc', 'yopmail.com', 'yopmail.fr', 'yopmail.net',
  'trashmail.com', 'getnada.com', 'mohmal.com', 'sharklasers.com',
  'guerrillamailblock.com', 'spam4.me', 'grr.la', 'pokemail.net',
  'dispostable.com', 'mailnesia.com', 'tempr.email', 'fakeinbox.com',
  'emailondeck.com', 'mintemail.com', 'mytrashmail.com', 'mailcatch.com',
  'emailfake.com', 'throwawaymail.com', 'meltmail.com', 'jetable.org',
  '33mail.com', 'spambox.us', 'mailexpire.com', 'tempemail.net',
  'tempmailaddress.com', 'spamgourmet.com', 'incognitomail.org',
  'mailforspam.com', 'anonymbox.com', 'binkmail.com', 'maildax.com',
  'dropmail.me', 'fakemail.net', 'disposable.email', 'inboxbear.com',
  'getairmail.com', 'anonbox.net', 'armyspy.com', 'cuvox.de',
  'dayrep.com', 'einrot.com', 'fleckens.hu', 'gustr.com',
  'jourrapide.com', 'rhyta.com', 'superrito.com', 'teleworm.us',

  // Services moins connus mais courants
  'mailmetrash.com', 'spambog.com', 'spambog.de', 'spambog.ru',
  'trashinbox.net', 'wegwerfmail.de', 'wegwerfmail.net', 'wegwerfemail.de',
  'trashymail.com', 'dumpmail.de', 'tempinbox.com', 'emailtemporanea.com',
  'correo-temporal.com', 'correo-temporal.es', 'email-temp.com',
  'temp-mail.com', 'temporary-mail.net', 'tempmail.de',
  'disposableemailaddresses.com', 'emaildrop.io', 'burnermail.io',
  'tempmail.us.com', 'temp-mail.io', 'tempmails.net',

  // Nouveaux services
  'moakt.com', 'tmail.ws', 'tmaild.com', 'tmpmail.net',
  'tmpmail.org', 'emailtemporal.org', 'emailondeck.org',
  'mailtemp.info', 'emailtemporary.info', 'temp-inbox.com',
  'disposable-email.ml', 'fakeemailgenerator.com', 'throwam.com',
]

// Liste des services d'email légitimes connus
const LEGITIMATE_EMAIL_PROVIDERS = [
  // Grands fournisseurs publics
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.fr', 'ymail.com',
  'hotmail.com', 'hotmail.fr', 'outlook.com', 'outlook.fr', 'live.com',
  'live.fr', 'msn.com', 'icloud.com', 'me.com', 'mac.com',
  'aol.com', 'zoho.com', 'protonmail.com', 'protonmail.ch', 'pm.me',
  'mail.com', 'gmx.com', 'gmx.fr', 'gmx.net', 'gmx.de',
  'yandex.com', 'yandex.ru', 'mail.ru', 'inbox.com',

  // Fournisseurs africains/locaux
  'orange.fr', 'wanadoo.fr', 'laposte.net', 'free.fr', 'sfr.fr',
  'numericable.fr', 'bbox.fr', 'aliceadsl.fr', 'neuf.fr',

  // Services professionnels/académiques courants
  'edu', 'ac.uk', 'edu.au', 'edu.fr', 'univ-', '.gov',
]

interface EmailValidationResult {
  valid: boolean
  reason?: string
  domain?: string
}

/**
 * Valide si un email provient d'un service légitime
 * Bloque les emails temporaires/jetables
 */
export function validateEmail(email: string): EmailValidationResult {
  // Validation de base du format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      valid: false,
      reason: 'Format d\'email invalide'
    }
  }

  // Extraire le domaine
  const domain = email.toLowerCase().split('@')[1]

  if (!domain) {
    return {
      valid: false,
      reason: 'Domaine manquant',
      domain
    }
  }

  // Vérifier si le domaine est dans la liste des domaines temporaires
  if (TEMPORARY_EMAIL_DOMAINS.includes(domain)) {
    return {
      valid: false,
      reason: 'Les emails temporaires ne sont pas acceptés. Veuillez utiliser une adresse email permanente.',
      domain
    }
  }

  // Vérifier les patterns de domaines temporaires
  const temporaryPatterns = [
    /temp.*mail/i,
    /trash.*mail/i,
    /disposable/i,
    /throwaway/i,
    /guerrilla/i,
    /mailinator/i,
    /fake.*mail/i,
    /spam.*mail/i,
    /burner/i,
    /jetable/i,
  ]

  for (const pattern of temporaryPatterns) {
    if (pattern.test(domain)) {
      return {
        valid: false,
        reason: 'Les emails temporaires ne sont pas acceptés. Veuillez utiliser une adresse email permanente.',
        domain
      }
    }
  }

  // Vérifier si c'est un fournisseur légitime connu
  const isLegitimateProvider = LEGITIMATE_EMAIL_PROVIDERS.some(provider => {
    // Correspondance exacte
    if (domain === provider) return true

    // Correspondance pour les sous-domaines (ex: mail.google.com)
    if (domain.endsWith('.' + provider)) return true

    // Correspondance pour les patterns (ex: univ-*, .edu, .gov)
    if (provider.includes('-') || provider.startsWith('.')) {
      return domain.includes(provider.replace('.', ''))
    }

    return false
  })

  if (isLegitimateProvider) {
    return {
      valid: true,
      domain
    }
  }

  // Pour les domaines privés/professionnels :
  // Vérifier qu'il a une extension valide et n'est pas suspect
  const domainParts = domain.split('.')

  // Doit avoir au moins un domaine et une extension (ex: company.com)
  if (domainParts.length < 2) {
    return {
      valid: false,
      reason: 'Domaine invalide',
      domain
    }
  }

  // Vérifier que l'extension n'est pas trop courte (éviter les .co, .io seuls sauf cas légitimes)
  const extension = domainParts[domainParts.length - 1]
  const validExtensions = [
    'com', 'net', 'org', 'edu', 'gov', 'mil', 'int',
    'fr', 'de', 'uk', 'it', 'es', 'nl', 'be', 'ch', 'at',
    'ci', 'sn', 'ma', 'tn', 'dz', 'ng', 'za', 'ke', 'gh', 'cm', 'ml', 'bf', 'bj', 'tg',
    'io', 'co', 'ai', 'app', 'dev', 'tech', 'cloud', 'group',
    'info', 'biz', 'pro', 'name', 'mobi', 'tel', 'asia',
  ]

  if (!validExtensions.includes(extension)) {
    return {
      valid: false,
      reason: 'Extension de domaine non reconnue',
      domain
    }
  }

  // Le domaine semble légitime (domaine privé/professionnel)
  return {
    valid: true,
    domain
  }
}

/**
 * Vérifie si un domaine est dans la blacklist des domaines temporaires
 */
export function isTemporaryEmailDomain(domain: string): boolean {
  return TEMPORARY_EMAIL_DOMAINS.includes(domain.toLowerCase())
}

/**
 * Vérifie si un domaine est un fournisseur légitime connu
 */
export function isLegitimateProvider(domain: string): boolean {
  const lowerDomain = domain.toLowerCase()
  return LEGITIMATE_EMAIL_PROVIDERS.some(provider => {
    return lowerDomain === provider || lowerDomain.endsWith('.' + provider)
  })
}

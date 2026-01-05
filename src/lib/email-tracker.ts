import { promises as fs } from 'fs'
import path from 'path'

const TRACKER_FILE = path.join(process.cwd(), 'data', 'email-tracker.json')
const MAX_SUBMISSIONS = 2

interface EmailTracker {
  [email: string]: {
    count: number
    lastSubmission: string
  }
}

// Créer le dossier data s'il n'existe pas
async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data')
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

// Lire le fichier de tracking
async function readTracker(): Promise<EmailTracker> {
  await ensureDataDir()
  try {
    const data = await fs.readFile(TRACKER_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    // Si le fichier n'existe pas, retourner un objet vide
    return {}
  }
}

// Sauvegarder le fichier de tracking
async function saveTracker(tracker: EmailTracker): Promise<void> {
  await ensureDataDir()
  await fs.writeFile(TRACKER_FILE, JSON.stringify(tracker, null, 2), 'utf-8')
}

// Vérifier si un email peut encore envoyer
export async function canSubmitProject(email: string): Promise<{ allowed: boolean; remaining: number }> {
  const tracker = await readTracker()
  const emailData = tracker[email.toLowerCase()]

  if (!emailData) {
    return { allowed: true, remaining: MAX_SUBMISSIONS }
  }

  const remaining = MAX_SUBMISSIONS - emailData.count

  return {
    allowed: emailData.count < MAX_SUBMISSIONS,
    remaining: Math.max(0, remaining)
  }
}

// Enregistrer une soumission
export async function recordProjectSubmission(email: string): Promise<void> {
  const tracker = await readTracker()
  const normalizedEmail = email.toLowerCase()

  if (!tracker[normalizedEmail]) {
    tracker[normalizedEmail] = {
      count: 1,
      lastSubmission: new Date().toISOString()
    }
  } else {
    tracker[normalizedEmail].count++
    tracker[normalizedEmail].lastSubmission = new Date().toISOString()
  }

  await saveTracker(tracker)
}

// Réinitialiser le compteur d'un email (pour admin/debug)
export async function resetEmailCounter(email: string): Promise<void> {
  const tracker = await readTracker()
  const normalizedEmail = email.toLowerCase()

  delete tracker[normalizedEmail]
  await saveTracker(tracker)
}

// Obtenir les stats d'un email
export async function getEmailStats(email: string): Promise<{ count: number; lastSubmission?: string } | null> {
  const tracker = await readTracker()
  const emailData = tracker[email.toLowerCase()]

  if (!emailData) {
    return null
  }

  return {
    count: emailData.count,
    lastSubmission: emailData.lastSubmission
  }
}

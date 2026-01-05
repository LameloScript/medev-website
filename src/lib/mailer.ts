import nodemailer from 'nodemailer'

// Configuration du transporteur Nodemailer avec serveur SMTP personnalisé
export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'mail.medev-group.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true, // true pour port 465, false pour 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

// Vérifier la configuration du transporteur
export async function verifyMailer() {
  try {
    await transporter.verify()
    console.log('✅ Email transporter is ready')
    return true
  } catch (error) {
    console.error('❌ Email transporter error:', error)
    return false
  }
}

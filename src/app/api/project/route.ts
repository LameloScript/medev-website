import { NextResponse } from 'next/server'
import { verifyRecaptcha } from '@/src/lib/recaptcha-verify'
import { transporter } from '@/src/lib/mailer'
import { getProjectAdminEmailTemplate, getProjectClientConfirmationTemplate } from '@/src/lib/project-email-templates'
import { canSubmitProject, recordProjectSubmission } from '@/src/lib/email-tracker'
import { validateEmail } from '@/src/lib/email-validator'

export async function POST(req: Request) {
  try {
    const { token, form } = await req.json()

    // Validation des données du formulaire
    if (!form.name || !form.email || !form.industry || !form.company || !form.message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
    }

    // Validation de l'email (bloquer les emails temporaires)
    const emailValidation = validateEmail(form.email)
    if (!emailValidation.valid) {
      console.log(`❌ Email rejeté: ${form.email} - Raison: ${emailValidation.reason}`)
      return NextResponse.json({
        ok: false,
        error: emailValidation.reason || 'Email non valide'
      }, { status: 400 })
    }

    console.log(`✅ Email validé: ${form.email} (${emailValidation.domain})`)

    // Vérification de la limite d'envoi par email
    const submissionCheck = await canSubmitProject(form.email)
    if (!submissionCheck.allowed) {
      console.log(`🚫 Email ${form.email} a atteint la limite de 2 soumissions`)
      return NextResponse.json({
        ok: false,
        error: 'Vous avez atteint la limite de 2 demandes de projet. Veuillez nous contacter directement.',
        limit_reached: true
      }, { status: 429 })
    }

    console.log(`✅ Email ${form.email} peut soumettre (${submissionCheck.remaining} restant)`)

    // Vérification reCAPTCHA (désactivée en dev pour localhost)
    const isDevelopment = process.env.NODE_ENV === 'development'

    if (!isDevelopment) {
      console.log('🔍 Vérification reCAPTCHA pour le formulaire projet...')
      const result = await verifyRecaptcha(token)
      console.log('📊 Résultat reCAPTCHA:', result)

      if (!result.success) {
        console.error('❌ reCAPTCHA échoué:', result.raw)
        return NextResponse.json({ ok: false, error: 'reCAPTCHA failed', details: result.raw }, { status: 403 })
      }
    } else {
      console.log('⚠️ Mode développement - reCAPTCHA désactivé')
    }

    const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER

    // Attacher le logo Medev
    const brandLogoPath = `${process.cwd()}/public/assets/medev-logo.png`
    const logoAttachment = {
      filename: 'medev-logo.png',
      path: brandLogoPath,
      cid: 'brandLogo',
      contentType: 'image/png'
    }

    // Envoi de l'email à l'admin
    await transporter.sendMail({
      from: `"Formulaire Projet Medev" <${process.env.EMAIL_USER}>`,
      to: adminEmail,
      subject: `Nouvelle demande de projet - ${form.company} (${form.name})`,
      html: getProjectAdminEmailTemplate(form),
      replyTo: form.email,
      attachments: [logoAttachment]
    })

    // Envoi de l'email de confirmation au client
    await transporter.sendMail({
      from: `"Medev Group" <${process.env.EMAIL_USER}>`,
      to: form.email,
      subject: 'Votre projet nous intéresse - Medev Group',
      html: getProjectClientConfirmationTemplate(form.name, form),
      attachments: [logoAttachment]
    })

    // Enregistrer la soumission
    await recordProjectSubmission(form.email)
    console.log(`📝 Soumission enregistrée pour ${form.email}`)

    return NextResponse.json({
      ok: true,
      message: 'Emails sent successfully',
      remaining: submissionCheck.remaining - 1
    })
  } catch (error) {
    console.error('Error in project API:', error)
    return NextResponse.json({ ok: false, error: 'Internal server error' }, { status: 500 })
  }
}

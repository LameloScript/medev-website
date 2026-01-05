import { NextResponse } from 'next/server'
import { verifyRecaptcha } from '@/src/lib/recaptcha-verify'
import { transporter } from '@/src/lib/mailer'
import { getAdminEmailTemplate, getClientConfirmationTemplate } from '@/src/lib/email-templates'
import { validateEmail } from '@/src/lib/email-validator'

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get('content-type') || ''
    let token: string = ''
    let form: any = {}
    let cvFile: File | null = null
    if (contentType.includes('multipart/form-data')) {
      const fd = await req.formData()
      token = String(fd.get('token') || '')
      form = {
        name: String(fd.get('name') || ''),
        phone: String(fd.get('phone') || ''),
        email: String(fd.get('email') || ''),
        message: String(fd.get('message') || ''),
        contactReason: String(fd.get('contactReason') || ''),
        mediaType: String(fd.get('mediaType') || ''),
        partnershipType: String(fd.get('partnershipType') || ''),
        recruitmentType: String(fd.get('recruitmentType') || ''),
        suppliersType: String(fd.get('suppliersType') || ''),
        educationType: String(fd.get('educationType') || ''),
        legalType: String(fd.get('legalType') || ''),
        portfolioUrl: String(fd.get('portfolioUrl') || ''),
        eventDate: String(fd.get('eventDate') || ''),
        acceptTerms: String(fd.get('acceptTerms') || 'false') === 'true'
      }
      const f = fd.get('cvFile')
      if (f && typeof f !== 'string') {
        cvFile = f as File
      }
    } else {
      const body = await req.json()
      token = body.token
      form = body.form
    }

    if (!form.name || !form.email || !form.message) {
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
    console.log('📋 Données du formulaire:', JSON.stringify(form, null, 2))

    // Vérification reCAPTCHA (désactivée en dev pour localhost)
    const isDevelopment = process.env.NODE_ENV === 'development'

    if (!isDevelopment) {
      console.log('🔍 Vérification reCAPTCHA pour le formulaire contact...')
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
    const brandLogoPath = `${process.cwd()}/public/assets/medev-logo.png`
    const baseAttachments = [{
      filename: 'medev-logo.png',
      path: brandLogoPath,
      cid: 'brandLogo',
      contentType: 'image/png'
    }]
    const adminAttachments = (form.contactReason === 'recrutement' && cvFile)
      ? [{
          filename: (cvFile as File).name || 'CV',
          content: Buffer.from(await (cvFile as File).arrayBuffer())
        }, ...baseAttachments]
      : [...baseAttachments]
    await transporter.sendMail({
      from: `"Formulaire Contact Medev" <${process.env.EMAIL_USER}>`,
      to: adminEmail,
      subject: `Nouvelle demande de contact${form.contactReason ? ` [${form.contactReason}]` : ''} - ${form.name}`,
      html: getAdminEmailTemplate({ ...form, cvAttached: !!cvFile }),
      replyTo: form.email,
      attachments: adminAttachments
    })

    await transporter.sendMail({
      from: `"Medev Group" <${process.env.EMAIL_USER}>`,
      to: form.email,
      subject: 'Votre demande a bien été reçue - Medev Group',
      html: getClientConfirmationTemplate(form.name, { ...form, cvAttached: !!cvFile }),
      attachments: baseAttachments
    })

    return NextResponse.json({ ok: true, message: 'Emails sent successfully' })
  } catch (error) {
    console.error('Error in contact API:', error)
    return NextResponse.json({ ok: false, error: 'Internal server error' }, { status: 500 })
  }
}

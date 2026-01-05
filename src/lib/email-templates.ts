interface ContactFormData {
  name: string
  phone: string
  email: string
  message: string
  acceptTerms: boolean
  contactReason?: string
  mediaType?: string
  partnershipType?: string
  recruitmentType?: string
  suppliersType?: string
  educationType?: string
  legalType?: string
  portfolioUrl?: string
  eventDate?: string
  cvAttached?: boolean
}

// Template pour l'email de notification à l'admin
export function getAdminEmailTemplate(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nouvelle demande de contact</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: #ffffff; border-radius: 10px; padding: 30px; margin-bottom: 20px; text-align: center; border-bottom: 3px solid #FF6300;">
        <img src="cid:brandLogo" alt="Medev Group" style="max-width: 180px; height: auto; margin-bottom: 20px;" />
        <h1 style="color: #000000; margin: 0; font-size: 28px;">Nouvelle demande de contact</h1>
        <p style="color: #555; margin: 10px 0;">Formulaire de contact du site</p>
      </div>

      <div style="background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 25px; margin-bottom: 20px;">
        <h2 style="color: #000000; border-bottom: 2px solid #FF6300; padding-bottom: 10px;">Informations du contact</h2>

        ${data.contactReason ? `
        <div style="margin: 15px 0 20px 0; padding: 12px 16px; background: #fff5ed; border-left: 4px solid #FF6300; border-radius: 6px;">
          <div style="font-size: 24px; font-weight: 700; color: #000;">
            Motif: ${data.contactReason}${(data.mediaType || data.partnershipType || data.recruitmentType || data.suppliersType || data.educationType || data.legalType) ? ` - ${data.mediaType || data.partnershipType || data.recruitmentType || data.suppliersType || data.educationType || data.legalType}` : ''}
          </div>
        </div>` : ''}

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Nom & Prénom:</td>
            <td style="padding: 10px 0;">${data.name}</td>
          </tr>
          ${data.contactReason ? `
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Motif:</td>
            <td style="padding: 10px 0;">${data.contactReason}</td>
          </tr>` : ''}
          ${(data.mediaType || data.partnershipType || data.recruitmentType || data.suppliersType || data.educationType || data.legalType) ? `
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Détail motif:</td>
            <td style="padding: 10px 0;">${data.mediaType || data.partnershipType || data.recruitmentType || data.suppliersType || data.educationType || data.legalType || ''}</td>
          </tr>` : ''}
          ${data.cvAttached ? `
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 10px 0; font-weight: bold; color: #555;">CV:</td>
            <td style="padding: 10px 0;">Joint en pièce-jointe</td>
          </tr>` : ''}
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Email:</td>
            <td style="padding: 10px 0;"><a href="mailto:${data.email}" style="color: #FF6300; text-decoration: none;">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Téléphone:</td>
            <td style="padding: 10px 0;"><a href="tel:${data.phone}" style="color: #FF6300; text-decoration: none;">${data.phone || 'Non renseigné'}</a></td>
          </tr>
          
          ${data.portfolioUrl ? `
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Portfolio:</td>
            <td style="padding: 10px 0;"><a href="${data.portfolioUrl}" style="color: #FF6300; text-decoration: none;">${data.portfolioUrl}</a></td>
          </tr>` : ''}
          ${data.eventDate ? `
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Date/ période:</td>
            <td style="padding: 10px 0;">${data.eventDate}</td>
          </tr>` : ''}
        </table>
      </div>

      <div style="background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 25px; margin-bottom: 20px;">
        <h3 style="color: #2c3e50; margin-top: 0;">Message:</h3>
        <p style="white-space: pre-wrap; background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #FF6300;">${data.message}</p>
      </div>

      <div style="background-color: #e8f4f8; border-radius: 8px; padding: 15px; text-align: center;">
        <p style="margin: 0; color: #555; font-size: 14px;">
          Reçu le ${new Date().toLocaleDateString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
      </div>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #999; font-size: 12px;">
        <p>Cet email a été envoyé automatiquement depuis le formulaire de contact de Medev Group</p>
      </div>
    </body>
    </html>
  `
}

// Mapping des motifs de contact en français
const contactReasonLabels: Record<string, string> = {
  'presse': 'Presse et médias',
  'partenariat': 'Partenariats/alliances',
  'recrutement': 'Recrutement/talents',
  'fournisseurs': 'Fournisseurs/prestataires',
  'education': 'Éducation/événements',
  'legal': 'Administratif/légal',
  'autre': 'Autre'
}

const detailReasonLabels: Record<string, string> = {
  // Media types
  'interviews': 'Interviews',
  'communiques': 'Communiqués',
  'etude-de-cas': 'Étude de cas',
  // Partnership types
  'agence': 'Agence',
  'integrateur': 'Intégrateur',
  'revendeur': 'Revendeur',
  'co-marketing': 'Co-marketing',
  // Recruitment types
  'stage': 'Stage',
  'cdi': 'CDI',
  'freelance': 'Freelance',
  // Suppliers types
  'hebergement': 'Hébergement',
  'marketing': 'Marketing',
  'design': 'Design',
  'developpement': 'Développement',
  // Education types
  'conference': 'Conférence',
  'formation': 'Formation',
  'atelier': 'Atelier',
  'webinar': 'Webinar',
  // Legal types
  'facturation': 'Facturation',
  'contrat': 'Contrat',
  'rgpd': 'RGPD',
  'autre': 'Autre'
}

// Template pour l'email de confirmation au client
export function getClientConfirmationTemplate(clientName: string, data?: ContactFormData): string {
  const contactReasonLabel = data?.contactReason ? contactReasonLabels[data.contactReason] || data.contactReason : null
  const detailType = data?.mediaType || data?.partnershipType || data?.recruitmentType || data?.suppliersType || data?.educationType || data?.legalType
  const detailLabel = detailType ? detailReasonLabels[detailType] || detailType : null
  return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirmation de réception</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: #ffffff; border-radius: 10px; padding: 40px; text-align: center; margin-bottom: 30px; border-bottom: 3px solid #FF6300;">
        <img src="cid:brandLogo" alt="Medev Group" style="max-width: 200px; height: auto;" />
      </div>

      <div style="background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <p style="font-size: 18px; color: #2c3e50; margin-top: 0;">Bonjour <strong>${clientName}</strong>,</p>

        <p style="font-size: 16px; color: #555;">
          Nous avons bien reçu votre demande de contact et nous vous en remercions !
        </p>

        ${contactReasonLabel ? `
        <div style="background-color: #fff5ed; border-left: 4px solid #FF6300; padding: 20px; margin: 25px 0; border-radius: 5px;">
          <div style="margin: 0 0 6px 0; font-size: 20px; font-weight: 700; color: #000000;">
            Motif: ${contactReasonLabel}${detailLabel ? ` - ${detailLabel}` : ''}
          </div>
          ${data?.contactReason === 'recrutement' ? `
          <p style="margin: 10px 0; font-size: 15px; color: #000000;">
            ${data?.cvAttached ? 'Votre CV a bien été reçu en pièce jointe.' : 'Vous pouvez répondre à cet email pour nous transmettre votre CV en pièce jointe.'}
          </p>` : ''}
          ${data?.portfolioUrl ? `
          <p style="margin: 10px 0; font-size: 15px; color: #000000;">
            <strong>Portfolio:</strong> <a href="${data?.portfolioUrl}" style="color: #FF6300; text-decoration: none;">${data?.portfolioUrl}</a>
          </p>` : ''}
          ${data?.educationType || data?.eventDate ? `
          <p style="margin: 10px 0; font-size: 15px; color: #000000;">
            ${data?.educationType ? `<strong>Événement:</strong> ${data?.educationType}. ` : ''}${data?.eventDate ? `<strong>Date/période:</strong> ${data?.eventDate}` : ''}
          </p>` : ''}
        </div>` : `
        <div style="background-color: #fff5ed; border-left: 4px solid #FF6300; padding: 20px; margin: 25px 0; border-radius: 5px;">
          <p style="margin: 0; font-size: 15px; color: #000000;">
            <strong>Notre équipe examine actuellement votre demande et vous contactera dans les plus brefs délais.</strong>
          </p>
        </div>`}

        <p style="font-size: 16px; color: #555;">
          En attendant, n'hésitez pas à consulter notre site web pour découvrir nos réalisations et nos services.
        </p>

        <div style="text-align: center; margin: 30px 0;">
          <a href="https://medev-group.com" style="display: inline-block; background-color: #FF6300; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px;">Visiter notre site</a>
        </div>

        ${data ? `
        <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-top: 10px;">
          <h3 style="color: #2c3e50; margin-top: 0; font-size: 18px;">Récapitulatif</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Nom</td>
              <td style="padding: 8px;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 8px;"><a href="mailto:${data.email}" style="color: #FF6300; text-decoration: none;">${data.email}</a></td>
            </tr>
            ${data.phone ? `
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Téléphone</td>
              <td style="padding: 8px;"><a href="tel:${data.phone}" style="color: #FF6300; text-decoration: none;">${data.phone}</a></td>
            </tr>` : ''}
            ${contactReasonLabel ? `
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Motif</td>
              <td style="padding: 8px;">${contactReasonLabel}</td>
            </tr>` : ''}
            ${detailLabel ? `
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Détail</td>
              <td style="padding: 8px;">${detailLabel}</td>
            </tr>` : ''}
          </table>
        </div>` : ''}
      </div>

      <div style="margin-top: 30px; text-align: center;">
        <p style="color: #999; font-size: 14px; margin: 5px 0;">À bientôt,</p>
        <p style="color: #2c3e50; font-size: 16px; font-weight: bold; margin: 5px 0;">L'équipe Medev Group</p>
      </div>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #999; font-size: 12px;">
        <p>Cet email a été envoyé automatiquement. Merci de ne pas y répondre directement.</p>
        <p style="margin-top: 10px;">© ${new Date().getFullYear()} Medev Group. Tous droits réservés.</p>
      </div>
    </body>
    </html>
  `
}

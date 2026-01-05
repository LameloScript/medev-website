interface ProjectFormData {
  industry: string
  name: string
  email: string
  phone: string
  company: string
  position: string
  budget: string
  solutions: string[]
  message: string
}

// Mapping des valeurs en français
const industryLabels: Record<string, string> = {
  fintech: 'Fintech',
  ecommerce: 'E-commerce',
  healthcare: 'Healthcare',
  education: 'Education',
  saas: 'SaaS',
  logistics: 'Logistique - Transport',
  'real-estate': 'Immobilier',
  retail: 'Retail',
  hospitality: 'Hôtellerie',
  entertainment: 'Showbizz',
  insurance: 'Assurances',
  energy: 'Énergies',
  government: 'Gouvernement & Instituts publics',
  multinational: 'Multinationales',
  ngo: 'ONG & Organisations internationales'
}

const positionLabels: Record<string, string> = {
  ceo: 'CEO / Directeur Général',
  cto: 'CTO / Directeur Technique',
  manager: 'Manager / Chef de Projet',
  developer: 'Développeur',
  designer: 'Designer',
  marketing: 'Marketing / Communication',
  other: 'Autre'
}

const solutionLabels: Record<string, string> = {
  mobile: 'Mobile',
  web: 'Web',
  iot: 'IoT',
  spatial: 'Ingénierie spatiale',
  other: 'Autres'
}

// Template pour l'email de notification à l'admin
export function getProjectAdminEmailTemplate(data: ProjectFormData): string {
  const industryLabel = industryLabels[data.industry] || data.industry
  const positionLabel = positionLabels[data.position] || data.position
  const solutionsLabel = data.solutions.map(s => solutionLabels[s] || s).join(', ')

  return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nouvelle demande de projet</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: #ffffff; border-radius: 10px; padding: 30px; margin-bottom: 20px; text-align: center; border-bottom: 3px solid #FF6300;">
        <img src="cid:brandLogo" alt="Medev Group" style="max-width: 180px; height: auto; margin-bottom: 20px;" />
        <h1 style="color: #000000; margin: 0; font-size: 28px;">Nouvelle demande de projet</h1>
        <p style="color: #555; margin: 10px 0;">Formulaire : Prêts à discuter de votre projet</p>
      </div>

      <div style="background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 25px; margin-bottom: 20px;">
        <h2 style="color: #000000; border-bottom: 2px solid #FF6300; padding-bottom: 10px; margin-top: 0;">Informations du contact</h2>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555; width: 40%;">Nom & Prénom:</td>
            <td style="padding: 10px 0;">${data.name}</td>
          </tr>
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Email:</td>
            <td style="padding: 10px 0;"><a href="mailto:${data.email}" style="color: #FF6300; text-decoration: none;">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Téléphone:</td>
            <td style="padding: 10px 0;"><a href="tel:${data.phone}" style="color: #FF6300; text-decoration: none;">${data.phone}</a></td>
          </tr>
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Entreprise:</td>
            <td style="padding: 10px 0;">${data.company}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Poste:</td>
            <td style="padding: 10px 0;">${positionLabel}</td>
          </tr>
        </table>
      </div>

      <div style="background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 25px; margin-bottom: 20px;">
        <h2 style="color: #000000; border-bottom: 2px solid #FF6300; padding-bottom: 10px; margin-top: 0;">Détails du projet</h2>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555; width: 40%;">Industrie:</td>
            <td style="padding: 10px 0;">${industryLabel}</td>
          </tr>
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Budget:</td>
            <td style="padding: 10px 0;">${data.budget} FCFA</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Solutions souhaitées:</td>
            <td style="padding: 10px 0;">${solutionsLabel}</td>
          </tr>
        </table>

        <div style="margin-top: 20px;">
          <h3 style="color: #2c3e50; margin-bottom: 10px;">Message:</h3>
          <p style="white-space: pre-wrap; background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #FF6300; margin: 0;">${data.message}</p>
        </div>
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
        <p>Cet email a été envoyé automatiquement depuis le formulaire projet de Medev Group</p>
      </div>
    </body>
    </html>
  `
}

// Template pour l'email de confirmation au client
export function getProjectClientConfirmationTemplate(clientName: string, data: ProjectFormData): string {
  return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirmation de réception - Votre projet</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: #ffffff; border-radius: 10px; padding: 40px; text-align: center; margin-bottom: 30px; border-bottom: 3px solid #FF6300;">
        <img src="cid:brandLogo" alt="Medev Group" style="max-width: 200px; height: auto;" />
      </div>

      <div style="background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <p style="font-size: 18px; color: #2c3e50; margin-top: 0;">Bonjour <strong>${clientName}</strong>,</p>

        <p style="font-size: 16px; color: #555;">
          Merci d'avoir pris le temps de partager votre projet avec nous. Nous sommes ravis de découvrir votre vision !
        </p>

        <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin: 25px 0;">
          <h3 style="color: #000000; margin-top: 0; font-size: 18px; border-bottom: 2px solid #FF6300; padding-bottom: 10px;">Récapitulatif de votre demande</h3>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 40%;">Secteur d'activité :</td>
              <td style="padding: 8px 0; color: #000;">${industryLabels[data.industry] || data.industry}</td>
            </tr>
            <tr style="background-color: #ffffff;">
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Budget :</td>
              <td style="padding: 8px 0; color: #000;">${data.budget} FCFA</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Solutions demandées :</td>
              <td style="padding: 8px 0; color: #000;">${data.solutions.map(s => solutionLabels[s] || s).join(', ')}</td>
            </tr>
          </table>
        </div>

        <div style="background-color: #fff5ed; border-left: 4px solid #FF6300; padding: 20px; margin: 25px 0; border-radius: 5px;">
          <p style="margin: 0; font-size: 15px; color: #000000;">
            <strong>Notre équipe d'experts analyse actuellement votre demande et vous contactera très prochainement pour discuter de votre projet en détail.</strong>
          </p>
        </div>

        <div style="background-color: #fff9f0; border-left: 4px solid #ff6300; padding: 20px; margin: 25px 0; border-radius: 5px;">
          <h3 style="color: #2c3e50; margin-top: 0; font-size: 16px;">Prochaines étapes :</h3>
          <ol style="margin: 10px 0; padding-left: 20px; color: #555; font-size: 15px;">
            <li style="margin-bottom: 8px;">Analyse de votre demande par notre équipe</li>
            <li style="margin-bottom: 8px;">Prise de contact dans les 24-48h</li>
            <li style="margin-bottom: 8px;">Échange détaillé sur votre projet</li>
            <li style="margin-bottom: 8px;">Proposition et devis personnalisés</li>
          </ol>
        </div>

        <p style="font-size: 16px; color: #555;">
          En attendant, n'hésitez pas à consulter nos réalisations et découvrir comment nous avons accompagné d'autres entreprises dans leur transformation digitale.
        </p>

        <div style="text-align: center; margin: 30px 0;">
          <a href="https://medev-group.com" style="display: inline-block; background-color: #FF6300; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px;">Découvrir nos projets</a>
        </div>
      </div>

      <div style="margin-top: 30px; text-align: center;">
        <p style="color: #999; font-size: 14px; margin: 5px 0;">Au plaisir d'échanger avec vous,</p>
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

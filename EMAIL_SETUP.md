# Configuration du Système d'Emails

Ce guide vous explique comment configurer le système d'envoi d'emails pour le formulaire de contact.

## 📧 Fonctionnalités

Le système envoie **2 emails automatiquement** lors de la soumission du formulaire de contact :

1. **Email à l'admin** : Notification contenant tous les détails du formulaire
2. **Email au client** : Confirmation automatique que sa demande a été reçue

## 🔧 Configuration du serveur SMTP

Le système utilise le serveur SMTP personnalisé de Medev Group (`mail.medev-group.com`).

### Configuration du serveur

**Paramètres SMTP :**
- **Serveur SMTP** : `mail.medev-group.com`
- **Port SMTP** : `465` (connexion sécurisée SSL/TLS)
- **Authentification** : Requise
- **Email d'envoi** : `contacts@medev-group.com`

### Configurer les variables d'environnement

Ajoutez ces variables dans votre fichier `.env` (à la racine du projet) :

```bash
# Serveur SMTP
SMTP_HOST=mail.medev-group.com
SMTP_PORT=465

# Identifiants email
EMAIL_USER=contacts@medev-group.com
EMAIL_PASSWORD=votre_mot_de_passe_email

# Email de l'admin (optionnel - par défaut utilise EMAIL_USER)
ADMIN_EMAIL=contacts@medev-group.com
```

**Important** :
- Utilisez le **mot de passe du compte email** contacts@medev-group.com
- Le port 465 utilise une connexion SSL/TLS sécurisée
- Assurez-vous que le serveur SMTP autorise l'envoi depuis votre application

## 🧪 Test de l'installation

Pour tester si votre configuration fonctionne :

1. Démarrez le serveur de développement :
```bash
pnpm dev
```

2. Allez sur la page de contact de votre site
3. Remplissez et soumettez le formulaire
4. Vérifiez que vous recevez les 2 emails :
   - ✅ Email admin : notification avec les détails
   - ✅ Email client : confirmation de réception

## 📨 Templates d'emails

Les templates sont configurés dans `/src/lib/email-templates.ts` :

- **Template Admin** : Design professionnel avec tableau récapitulatif
- **Template Client** : Design moderne avec gradient et informations de contact

Vous pouvez personnaliser ces templates selon vos besoins.

## 🔒 Sécurité

- ✅ Le fichier `.env` est dans `.gitignore` (vos credentials ne seront jamais commités)
- ✅ Vérification reCAPTCHA avant l'envoi des emails
- ✅ Validation des champs requis
- ✅ Gestion des erreurs

## 🚨 Dépannage

### "Invalid login: 535 Authentication failed"

**Solution** : Les identifiants email sont incorrects
- Vérifiez que EMAIL_USER est bien `contacts@medev-group.com`
- Vérifiez que EMAIL_PASSWORD est le bon mot de passe
- Contactez votre administrateur serveur si le problème persiste

### "Missing credentials for PLAIN"

**Solution** : Les variables EMAIL_USER ou EMAIL_PASSWORD ne sont pas définies
- Vérifiez votre fichier `.env`
- Redémarrez le serveur après modification du `.env`

### "Connection timeout" ou "ECONNREFUSED"

**Solution** : Le serveur SMTP n'est pas accessible
1. Vérifiez que SMTP_HOST est bien `mail.medev-group.com`
2. Vérifiez que SMTP_PORT est bien `465`
3. Vérifiez votre connexion internet
4. Vérifiez que votre hébergeur ne bloque pas le port 465

### Les emails ne sont pas envoyés

1. Vérifiez que votre `.env` contient les bonnes valeurs
2. Vérifiez les logs du serveur pour voir les erreurs
3. Testez la connexion SMTP avec un client email (Thunderbird, Outlook)
4. Vérifiez que le compte email est actif et non suspendu

## 📝 Exemple de fichier .env complet

```bash
# Strapi Configuration
STRAPI_API_URL=http://localhost:1337
STRAPI_API_TOKEN=your_strapi_api_token_here

# Google reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here

# Email Configuration (Serveur SMTP Medev)
SMTP_HOST=mail.medev-group.com
SMTP_PORT=465
EMAIL_USER=contacts@medev-group.com
EMAIL_PASSWORD=votre_mot_de_passe
ADMIN_EMAIL=contacts@medev-group.com
```

## ✅ Checklist de configuration

- [ ] Mot de passe du compte email contacts@medev-group.com disponible
- [ ] Variables SMTP_HOST et SMTP_PORT ajoutées dans `.env`
- [ ] Variables EMAIL_USER et EMAIL_PASSWORD configurées dans `.env`
- [ ] Variable ADMIN_EMAIL configurée (optionnel)
- [ ] Serveur redémarré après modification du `.env`
- [ ] Test du formulaire effectué
- [ ] Emails reçus avec succès (admin + client)

## 🎯 Prochaines étapes

Une fois le système configuré, vous pouvez :
- Personnaliser les templates d'email
- Ajouter des champs supplémentaires au formulaire
- Configurer des webhooks pour intégrer avec un CRM
- Ajouter des pièces jointes

## 💡 Notes

- **Serveur SMTP personnalisé** : Vous utilisez votre propre serveur mail.medev-group.com
- **Limites d'envoi** : Vérifiez les limites de votre hébergeur email
- Les emails sont envoyés en HTML pour un meilleur rendu visuel
- Le port 465 utilise SSL/TLS pour une connexion sécurisée
- Tous les emails proviennent de `contacts@medev-group.com`

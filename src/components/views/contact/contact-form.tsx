'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Breadcrumb from "@/components/ui/breadcrumb"

// Schéma de validation Zod
const contactFormSchema = z.object({
  contactReason: z.string().min(1, "Veuillez sélectionner un motif de contact"),
  mediaType: z.string().optional(),
  partnershipType: z.string().optional(),
  recruitmentType: z.string().optional(),
  suppliersType: z.string().optional(),
  educationType: z.string().optional(),
  legalType: z.string().optional(),
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  phone: z.string().optional(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
  howDidYouKnow: z.string().optional(),
  portfolioUrl: z.string().url("URL invalide").optional().or(z.literal("")),
  eventDate: z.string().optional(),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter les conditions pour continuer"
  }),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; message?: string }>({ type: 'idle' })
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      contactReason: '',
      mediaType: '',
      partnershipType: '',
      recruitmentType: '',
      suppliersType: '',
      educationType: '',
      legalType: '',
      name: '',
      email: '',
      phone: '',
      message: '',
      howDidYouKnow: '',
      portfolioUrl: '',
      eventDate: '',
      acceptTerms: false,
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    if (!siteKey) {
      setStatus({ type: 'error', message: 'Une erreur technique s\'est produite. Veuillez rafraîchir la page et réessayer.' })
      return
    }

    setStatus({ type: 'loading', message: 'Nous envoyons votre message. Cela ne prendra que quelques secondes...' })

    try {
      const token = await (window as any).grecaptcha.execute(siteKey, { action: 'contact' })
      const body = {
        token,
        form: {
          name: data.name,
          phone: data.phone || '',
          email: data.email,
          message: data.message,
          site: data.contactReason,
          howDidYouKnow: data.howDidYouKnow || '',
          mediaType: data.mediaType || '',
          partnershipType: data.partnershipType || '',
          recruitmentType: data.recruitmentType || '',
          suppliersType: data.suppliersType || '',
          educationType: data.educationType || '',
          legalType: data.legalType || '',
          portfolioUrl: data.portfolioUrl || '',
          eventDate: data.eventDate || ''
        }
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })

      const responseData = await res.json()

      if (!res.ok) {
        setStatus({ type: 'error', message: responseData.error || 'L\'envoi a échoué. Vérifiez votre connexion internet et réessayez. Si le problème persiste, appelez-nous au +225 07 89 77 60 28.' })
        return
      }

      setStatus({ type: 'success', message: 'Merci pour votre message ! Nous l\'avons bien reçu et vous répondrons dans un délai de 24 à 48 heures. À très bientôt !' })
      form.reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus({ type: 'error', message: 'Une erreur inattendue s\'est produite. Veuillez réessayer ou nous contacter directement au +225 07 89 77 60 28.' })
    }
  }

  const contactReason = form.watch('contactReason')

  return (
    <div className="min-h-screen bg-white font-sans relative">
      {/* Mask SVG - Left */}
      <img
        src="/assets/mask.svg"
        alt=""
        className="absolute top-1/4 left-0 w-64 lg:w-96 h-auto opacity-5 pointer-events-none -translate-x-1/3"
      />

      {/* Mask SVG - Right */}
      <img
        src="/assets/mask.svg"
        alt=""
        className="absolute top-2/3 right-0 w-64 lg:w-96 h-auto opacity-5 pointer-events-none translate-x-1/3"
      />

      {/* Header spacer */}
      <div className="h-18"></div>

      {/* Breadcrumb and Title */}
      <div className="container mx-auto px-4 lg:px-20 pt-6 lg:pt-8 pb-8 lg:pb-12 flex flex-col items-center text-center">
        <Breadcrumb
          items={[
            { label: 'Accueil', href: '/fr' },
            { label: 'Contact' }
          ]}
        />
        <h1 className="font-bangers text-4xl lg:text-6xl mt-6 lg:mt-8">
          Contactez-nous
        </h1>
      </div>

      <div className="container mx-auto px-4 mt-8 lg:px-20 py-0 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Intro */}
          <div className="space-y-8">
            <p className="text-xs lg:text-sm uppercase tracking-wider font-nunito">
              UNE QUESTION ? UN PROJET ?
            </p>

            <h1 className="font-bangers text-3xl lg:text-5xl leading-tight">
              N'hésitez pas,<br />
              <span className="text-secondary">Contactez-nous</span>
            </h1>

            <div className="space-y-2 text-sm lg:text-base font-nunito">
              <p>Quel que soit votre besoin (projet, recrutement, partenariat, presse...), notre équipe est à votre écoute.</p>
              <p>Remplissez le formulaire pour nous contacter et nous vous répondrons dans les meilleurs délais.</p>
            </div>
          </div>

          {/* Right Column - Contact Info & Form */}
          <div className="space-y-12">
            {/* Coordonnées */}
            <div className="space-y-6">
              <h2 className="font-bangers text-2xl lg:text-3xl">
                Nos coordonnées
              </h2>

              <div className="space-y-2 font-nunito">
                <a href="mailto:contacts@medev-group.com" className="block text-base lg:text-lg hover:underline">
                  contacts@medev-group.com
                </a>
                <a href="tel:+2250789776028" className="block text-base lg:text-lg hover:underline">
                  +225 07 89 77 60 28 
                </a>
                <a href="tel:+2250708813516" className="block text-base lg:text-lg hover:underline">
                   +225 07 08 81 35 16
                </a>
              </div>
            </div>

            {/* Formulaire */}
            <div className="space-y-8">
              <h2 className="font-bangers text-2xl lg:text-3xl">
                Notre formulaire
              </h2>

              <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="contactReason"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <select
                          {...field}
                          className="w-full bg-transparent border-b border-black pb-3 text-sm lg:text-base font-nunito focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Motif de contact :</option>
                          <option value="presse">Presse et médias</option>
                          <option value="partenariat">Partenariats/alliances</option>
                          <option value="recrutement">Recrutement/talents</option>
                          <option value="fournisseurs">Fournisseurs/prestataires</option>
                          <option value="education">Éducation/événements</option>
                          <option value="legal">Administratif/légal</option>
                          <option value="autre">Autre</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {contactReason === 'presse' && (
                  <FormField
                    control={form.control}
                    name="mediaType"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full bg-transparent border-b border-black pb-3 text-sm lg:text-base font-nunito focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer"
                          >
                            <option value="">Sélectionnez le type de demande média :</option>
                            <option value="interviews">Interviews</option>
                            <option value="communiques">Communiqués</option>
                            <option value="etude-de-cas">Étude de cas</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {contactReason === 'partenariat' && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="partnershipType"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <select
                              {...field}
                              className="bg-transparent border-b border-black pb-3 text-sm lg:text-base font-nunito focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer"
                            >
                              <option value="">Type de partenariat :</option>
                              <option value="agence">Agence</option>
                              <option value="integrateur">Intégrateur</option>
                              <option value="revendeur">Revendeur</option>
                              <option value="co-marketing">Co-marketing</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="howDidYouKnow"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Contexte ou référence"
                              className="bg-transparent border-b border-black border-t-0 border-x-0 rounded-none pb-3 text-sm lg:text-base font-nunito placeholder-gray-600 focus:outline-none focus:border-black focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {contactReason === 'recrutement' && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="recruitmentType"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <select
                              {...field}
                              className="bg-transparent border-b border-black pb-3 text-sm lg:text-base font-nunito focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer"
                            >
                              <option value="">Type de collaboration :</option>
                              <option value="stage">Stage</option>
                              <option value="cdi">CDI</option>
                              <option value="freelance">Freelance</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="portfolioUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              {...field}
                              type="url"
                              placeholder="Portfolio (URL)"
                              className="bg-transparent border-b border-black border-t-0 border-x-0 rounded-none pb-3 text-sm lg:text-base font-nunito placeholder-gray-600 focus:outline-none focus:border-black focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {contactReason === 'fournisseurs' && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="suppliersType"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <select
                              {...field}
                              className="bg-transparent border-b border-black pb-3 text-sm lg:text-base font-nunito focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer"
                            >
                              <option value="">Type de prestation :</option>
                              <option value="hebergement">Hébergement</option>
                              <option value="marketing">Marketing</option>
                              <option value="design">Design</option>
                              <option value="developpement">Développement</option>
                              <option value="autre">Autre</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="howDidYouKnow"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Référence ou proposition"
                              className="bg-transparent border-b border-black border-t-0 border-x-0 rounded-none pb-3 text-sm lg:text-base font-nunito placeholder-gray-600 focus:outline-none focus:border-black focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {contactReason === 'education' && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="educationType"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <select
                              {...field}
                              className="bg-transparent border-b border-black pb-3 text-sm lg:text-base font-nunito focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer"
                            >
                              <option value="">Type d'événement :</option>
                              <option value="conference">Conférence</option>
                              <option value="formation">Formation</option>
                              <option value="atelier">Atelier</option>
                              <option value="webinar">Webinar</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="eventDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Date ou période prévue"
                              className="bg-transparent border-b border-black border-t-0 border-x-0 rounded-none pb-3 text-sm lg:text-base font-nunito placeholder-gray-600 focus:outline-none focus:border-black focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {contactReason === 'legal' && (
                  <FormField
                    control={form.control}
                    name="legalType"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full bg-transparent border-b border-black pb-3 text-sm lg:text-base font-nunito focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer"
                          >
                            <option value="">Type de demande :</option>
                            <option value="facturation">Facturation</option>
                            <option value="contrat">Contrat</option>
                            <option value="rgpd">RGPD</option>
                            <option value="autre">Autre</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                {/* Nom & Prénom */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Nom & Prénom :"
                          className="w-full bg-transparent border-b border-black border-t-0 border-x-0 rounded-none pb-3 text-sm lg:text-base font-nunito placeholder-gray-600 focus:outline-none focus:border-black focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Téléphone & Email */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type="tel"
                            placeholder="Téléphone :"
                            className="bg-transparent border-b border-black border-t-0 border-x-0 rounded-none pb-3 text-sm lg:text-base font-nunito placeholder-gray-600 focus:outline-none focus:border-black focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="E-mail :"
                            className="bg-transparent border-b border-black border-t-0 border-x-0 rounded-none pb-3 text-sm lg:text-base font-nunito placeholder-gray-600 focus:outline-none focus:border-black focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Message :"
                          rows={4}
                          className="w-full bg-transparent border-b border-black border-t-0 border-x-0 rounded-none pb-3 text-sm lg:text-base font-nunito placeholder-gray-600 focus:outline-none focus:border-black focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Checkbox RGPD */}
                <FormField
                  control={form.control}
                  name="acceptTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="mt-1 border-black"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <label className="text-xs lg:text-sm font-nunito cursor-pointer">
                          J'accepte que mes coordonnées soient enregistrées utilisées dans le but d'être recontacté.
                        </label>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status.type === 'loading'}
                    className="bg-secondary hover:bg-black transition-colors duration-200 flex items-center gap-2 px-4 py-2 rounded-full text-white text-base font-bangers w-fit disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="rounded-full bg-gray-100 p-1">
                      <img src="/assets/Vector.png" alt="" className="w-5 h-5" />
                    </div>
                    Envoyer
                  </button>
                </div>
              </form>
              </Form>
            </div>
          </div>
        </div>
      </div>

      {/* Status Dialog */}
      <Dialog open={status.type !== 'idle'} onOpenChange={(open) => !open && status.type !== 'loading' && setStatus({ type: 'idle' })}>
        <DialogContent className="sm:max-w-md" showCloseButton={status.type !== 'loading'}>
          <DialogHeader className="flex flex-col items-center text-center gap-4">
            {status.type === 'success' && (
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
            {status.type === 'error' && (
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            )}
            {status.type === 'loading' && (
              <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto"></div>
            )}
            <DialogTitle className="font-bangers text-2xl">
              {status.type === 'success' && 'Message envoyé !'}
              {status.type === 'error' && 'Une erreur est survenue'}
              {status.type === 'loading' && 'Envoi en cours'}
            </DialogTitle>
            <DialogDescription className="text-base">
              {status.message}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Map Section */}
      <div className="container mx-auto px-4 lg:px-20 py-12 lg:py-16">
        <div className="space-y-6">
          <div className="text-center">
          </div>
          <div className="w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127262.17073869965!2d-4.0894447!3d5.359952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb4a1c0c70c5%3A0xb9b1e3e5d5e5e5e5!2sAbidjan%2C%20C%C3%B4te%20d&#39;Ivoire!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Medev Group - Abidjan, Côte d'Ivoire"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 lg:px-20 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:gap-16">
          <div className="lg:w-1/3 flex flex-col mb-8 lg:mb-0">
            <span className="text-sm lg:text-base">[FAQ]</span>
            <h2 className="font-bangers text-3xl lg:text-4xl mt-3">Questions fréquentes</h2>
          </div>
          <div className="w-full lg:w-2/3">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg lg:text-xl font-medium">Quels sont vos horaires de disponibilité ?</AccordionTrigger>
                <AccordionContent className="text-base lg:text-base text-balance">
                  Nous sommes disponibles du lundi au vendredi de 9h00 à 18h00 (GMT). Vous pouvez nous contacter par email à tout moment et nous vous répondrons dans les plus brefs délais.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg lg:text-xl font-medium">Sous quel délai puis-je recevoir une réponse ?</AccordionTrigger>
                <AccordionContent className="text-base lg:text-base text-balance">
                  Nous nous engageons à répondre à toutes les demandes dans un délai de 24 à 48 heures ouvrables. Pour les demandes urgentes, n'hésitez pas à nous appeler directement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg lg:text-xl font-medium">Proposez-vous des consultations gratuites ?</AccordionTrigger>
                <AccordionContent className="text-base lg:text-base text-balance">
                  Oui, nous offrons une première consultation gratuite de 30 minutes pour discuter de votre projet et vous proposer la meilleure solution adaptée à vos besoins et votre budget.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg lg:text-xl font-medium">Comment se déroule le processus après le premier contact ?</AccordionTrigger>
                <AccordionContent className="text-base lg:text-base text-balance">
                  Après votre demande, nous organisons un échange pour comprendre vos besoins, puis nous vous envoyons un devis détaillé. Une fois validé, nous lançons le projet avec un planning précis et des points de suivi réguliers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg lg:text-xl font-medium">Travaillez-vous avec des clients internationaux ?</AccordionTrigger>
                <AccordionContent className="text-base lg:text-base text-balance">
                  Absolument ! Nous collaborons avec des clients dans toute l'Afrique et au-delà. Nous sommes habitués à travailler à distance et disposons des outils nécessaires pour une communication efficace.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Breadcrumb from "@/components/ui/breadcrumb"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    site: '',
    budget: '',
    message: '',
    howDidYouKnow: '',
    acceptTerms: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique d'envoi du formulaire à implémenter
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

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
              <p>Vous avez une ou des questions ?</p>
              <p>Vous avez un projet à lancer ou une identité visuelle à refondre ?</p>
              <p>N'hésitez pas à nous écrire en remplissant ce formulaire de contact. On</p>
              <p>sera ravis de vous répondre dans les plus brefs délais.</p>
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
                <a href="mailto:contact@lagencedesignstudio.com" className="block text-base lg:text-lg hover:underline">
                  contact@medev-group.com
                </a>
                <a href="tel:+2250789776028" className="block text-base lg:text-lg hover:underline">
                  +225 07 89 77 60 28 <br/> +225 07 08 81 35 16
                </a>
              </div>
            </div>

            {/* Formulaire */}
            <div className="space-y-8">
              <h2 className="font-bangers text-2xl lg:text-3xl">
                Notre formulaire
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nom & Prénom */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nom & Prénom :"
                    required
                    className="w-full bg-transparent border-b border-black pb-3 text-sm lg:text-base font-nunito placeholder-gray-600 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                {/* Téléphone & Email */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Téléphone :"
                    className="bg-transparent border-b border-black pb-3 text-sm lg:text-base font-nunito placeholder-gray-600 focus:outline-none focus:border-black transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-mail :"
                    required
                    className="bg-transparent border-b border-black pb-3 text-sm lg:text-base font-nunito placeholder-gray-600 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                {/* Type de site web et Budget */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <select
                    name="site"
                    value={formData.site}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-b border-black pb-3 text-sm lg:text-base font-nunito focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Type de site web :</option>
                    <option value="vitrine">Site vitrine</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="sur-mesure">Sur mesure</option>
                  </select>

                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="Budget (Ex: 5 000 000 - 30 000 000 FCFA)"
                    className="bg-transparent border-b border-black pb-3 text-sm lg:text-base font-nunito placeholder-gray-600 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message :"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-black pb-3 text-sm lg:text-base font-nunito placeholder-gray-600 focus:outline-none focus:border-black transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Comment nous avez-vous connu ? */}
                <div>
                  <input
                    type="text"
                    name="howDidYouKnow"
                    value={formData.howDidYouKnow}
                    onChange={handleChange}
                    placeholder="Comment nous avez-vous connu ?"
                    className="w-full bg-transparent border-b border-black pb-3 text-sm lg:text-base font-nunito placeholder-gray-600 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                {/* Checkbox RGPD */}
                <div className="flex items-start gap-3 pt-4">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    id="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 border border-black cursor-pointer"
                  />
                  <label htmlFor="acceptTerms" className="text-xs lg:text-sm font-nunito cursor-pointer">
                    J'accepte que mes coordonnées soient enregistrées utilisées dans le but d'être recontacté.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="bg-secondary flex items-center gap-2 px-4 py-2 rounded-full text-white text-base font-bangers w-fit hover:bg-secondary/90 transition-colors"
                  >
                    <div className="rounded-full bg-gray-100 p-1">
                      <img src="/assets/Vector.png" alt="" className="w-5 h-5" />
                    </div>
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

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

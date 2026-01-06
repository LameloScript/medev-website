'use client'

import Header from '../header/header'
import Breadcrumb from '@/components/ui/breadcrumb'

export default function Cgu() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header darkMode={true} />

      {/* Breadcrumb and Title Section */}
      <div className="pt-24 pb-8 lg:pt-28 lg:pb-12">
        <div className="container-fixed px-4 lg:px-8 flex flex-col items-center text-center">
          <div className="mb-6 lg:mb-8 [&_a]:text-gray-400 [&_a]:hover:text-secondary [&_span]:text-white [&_svg]:text-gray-600">
            <Breadcrumb
              items={[
                { label: 'Accueil', href: '/fr' },
                { label: 'Conditions Générales d\'Utilisation' }
              ]}
            />
          </div>
          <h1 className="font-bangers text-4xl lg:text-6xl text-white">
            Conditions Générales d'Utilisation
          </h1>
          <p className="text-gray-400 mt-4 text-sm">
            Dernière mise à jour : Janvier 2026
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="pb-20 lg:pb-32">
        <div className="container-fixed px-4 lg:px-20">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Introduction */}
            <div className="bg-gray-900/50 rounded-2xl p-6 lg:p-8 border border-gray-800">
              <p className="text-gray-300 font-nunito leading-relaxed">
                Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités de mise à disposition des services du site www.medev-group.com et les conditions d'utilisation du Service par l'Utilisateur.
              </p>
            </div>

            {/* 1. Accès au site */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">01.</span> Accès au Site
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50 space-y-4">
                <p className="text-gray-300 font-nunito leading-relaxed">
                  Le site www.medev-group.com est accessible gratuitement à tout Utilisateur disposant d'un accès à internet. Tous les coûts afférents à l'accès au Service, que ce soient les frais matériels, logiciels ou d'accès à internet sont exclusivement à la charge de l'Utilisateur.
                </p>
                <p className="text-gray-300 font-nunito leading-relaxed">
                  Medev Group met en œuvre tous les moyens raisonnables à sa disposition pour assurer un accès de qualité au Service, mais n'est tenu à aucune obligation d'y parvenir.
                </p>
              </div>
            </article>

            {/* 2. Services proposés */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">02.</span> Description des Services
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50">
                <p className="text-gray-300 font-nunito leading-relaxed mb-4">
                  Le site www.medev-group.com a pour objet de fournir une information concernant l'ensemble des activités de la société Medev Group, spécialisée dans :
                </p>
                <ul className="space-y-2 text-gray-300 font-nunito">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    Le développement de solutions web et mobiles
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    L'ingénierie spatiale et la géomatique
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    L'Internet des Objets (IoT) et l'intelligence artificielle
                  </li>
                </ul>
                <p className="text-gray-300 font-nunito leading-relaxed mt-4">
                  Les informations indiquées sur le site sont données à titre indicatif, et sont susceptibles d'évoluer.
                </p>
              </div>
            </article>

            {/* 3. Tarification (Transparence) */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">03.</span> Tarification des Services
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50">
                <p className="text-gray-300 font-nunito leading-relaxed">
                  En tant que prestataire de services sur mesure, nos tarifs sont établis sur devis en fonction des besoins spécifiques de chaque client. Tous nos prix sont exprimés en <strong className="text-white">Francs CFA (FCFA) Toutes Taxes Comprises (TTC)</strong>, sauf indication contraire explicite.
                </p>
              </div>
            </article>

            {/* 4. Convention de preuve */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">04.</span> Convention de Preuve
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50">
                <p className="text-gray-300 font-nunito leading-relaxed mb-4">
                  Conformément à la <strong className="text-white">Loi n° 2013-546 du 30 juillet 2013</strong> relative aux transactions électroniques, l'Utilisateur reconnaît et accepte que :
                </p>
                <ul className="space-y-3 text-gray-300 font-nunito">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    Les données enregistrées par le site font foi et constituent la preuve de l'ensemble des transactions passées.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    Les courriers électroniques, les journaux de connexion (logs) et autres enregistrements informatiques conservés par Medev Group constituent des preuves admissibles devant les tribunaux et font foi entre les parties.
                  </li>
                </ul>
              </div>
            </article>

            {/* 5. Propriété intellectuelle */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">05.</span> Propriété Intellectuelle
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50">
                <p className="text-gray-300 font-nunito leading-relaxed">
                  L'Utilisateur s'engage à une utilisation des contenus du site dans un cadre strictement privé. Une utilisation des contenus à des fins commerciales est strictement interdite. Tout contenu mis en ligne par l'Utilisateur est de sa seule responsabilité.
                </p>
              </div>
            </article>

            {/* 6. Responsabilité */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">06.</span> Responsabilité
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50 space-y-4">
                <p className="text-gray-300 font-nunito leading-relaxed">
                  Les sources des informations diffusées sur le site www.medev-group.com sont réputées fiables mais le site ne garantit pas qu'il soit exempt de défauts, d'erreurs ou d'omissions.
                </p>
                <p className="text-gray-300 font-nunito leading-relaxed">
                  Le site ne peut être tenu pour responsable d'éventuels virus qui pourraient infecter l'ordinateur ou tout matériel informatique de l'Internaute, suite à une utilisation, à l'accès, ou au téléchargement provenant de ce site.
                </p>
              </div>
            </article>

            {/* 7. Droit applicable */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">07.</span> Droit Applicable et Juridiction
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50 space-y-4">
                <p className="text-gray-300 font-nunito leading-relaxed">
                  Les présentes CGU sont soumises au <strong className="text-white">Droit Ivoirien</strong>.
                </p>
                <p className="text-gray-300 font-nunito leading-relaxed">
                  En cas de litige non résolu à l'amiable, compétence exclusive est attribuée aux <strong className="text-white">Tribunaux d'Abidjan</strong>, nonobstant pluralité de défendeurs ou appel en garantie.
                </p>
              </div>
            </article>

            {/* 8. Contact */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">08.</span> Contact
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50">
                <p className="text-gray-300 font-nunito leading-relaxed">
                  Pour toute question relative à l'application des présentes CGU, vous pouvez joindre l'éditeur aux coordonnées suivantes : <a href="mailto:contacts@medev-group.com" className="text-secondary hover:underline">contacts@medev-group.com</a>
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>
    </div>
  )
}

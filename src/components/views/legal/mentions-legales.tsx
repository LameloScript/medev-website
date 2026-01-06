'use client'

import Header from '../header/header'
import Breadcrumb from '@/components/ui/breadcrumb'

export default function MentionsLegales() {
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
                { label: 'Mentions légales' }
              ]}
            />
          </div>
          <h1 className="font-bangers text-4xl lg:text-6xl text-white">
            Mentions Légales
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
                Conformément aux dispositions de la <strong className="text-white">Loi n° 2013-546 du 30 juillet 2013</strong> relative aux transactions électroniques en Côte d'Ivoire, notamment son article 5, les présentes mentions légales ont pour objet de porter à la connaissance des utilisateurs les informations relatives à l'éditeur et à l'hébergeur du site.
              </p>
            </div>

            {/* 1. Éditeur du site */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">01.</span> Éditeur du Site
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-500 text-sm block mb-1">Dénomination sociale</span>
                    <span className="text-white font-medium">Medev Group</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block mb-1">Forme juridique</span>
                    <span className="text-white font-medium">SARL (Société à Responsabilité Limitée)</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block mb-1">Capital social</span>
                    <span className="text-white font-medium">1 000 000 FCFA</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block mb-1">Siège social</span>
                    <span className="text-white font-medium">Cocody Faya, Abidjan, Côte d'Ivoire</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block mb-1">RCCM</span>
                    <span className="text-white font-medium">En cours d'obtention</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block mb-1">Compte Contribuable (NCC)</span>
                    <span className="text-white font-medium">En cours d'obtention</span>
                  </div>
                </div>
              </div>
            </article>

            {/* 2. Contact */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">02.</span> Contact
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-500 text-sm block mb-1">Email</span>
                    <a href="mailto:contacts@medev-group.com" className="text-secondary hover:underline font-medium">
                      contacts@medev-group.com
                    </a>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block mb-1">Téléphone</span>
                    <a href="tel:+2250789776028" className="text-secondary hover:underline font-medium">
                      +225 07 89 77 60 28
                    </a>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-gray-500 text-sm block mb-1">Site web</span>
                    <a href="https://www.medev-group.com" className="text-secondary hover:underline font-medium">
                      www.medev-group.com
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* 3. Responsable de publication */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">03.</span> Responsable de Publication
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50">
                <p className="text-gray-300 font-nunito leading-relaxed">
                  Le responsable de la publication du site www.medev-group.com est le représentant légal de la société Medev Group SARL.
                </p>
              </div>
            </article>

            {/* 4. Hébergeur */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">04.</span> Hébergeur du Site
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50 space-y-4">
                <div>
                  <span className="text-gray-500 text-sm block mb-1">Nom de l'hébergeur</span>
                  <span className="text-white font-medium">TpeCloud</span>
                </div>
                <p className="text-gray-400 text-sm font-nunito">
                  Pour toute question relative à l'hébergement, veuillez contacter directement l'hébergeur.
                </p>
              </div>
            </article>

            {/* 5. Activité */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">05.</span> Activité
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50">
                <p className="text-gray-300 font-nunito leading-relaxed mb-4">
                  Medev Group est une agence digitale spécialisée dans la fourniture de services numériques et technologiques aux entreprises et organisations. Nos domaines d'expertise comprennent :
                </p>
                <ul className="space-y-2 text-gray-300 font-nunito">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    Développement d'applications web et mobiles
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    Solutions Internet des Objets (IoT)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    Ingénierie spatiale et géomatique
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    Intelligence artificielle et automatisation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    Design UX/UI et identité visuelle
                  </li>
                </ul>
              </div>
            </article>

            {/* 6. Propriété intellectuelle */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">06.</span> Propriété Intellectuelle
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50 space-y-4">
                <p className="text-gray-300 font-nunito leading-relaxed">
                  L'ensemble des éléments constituant le site www.medev-group.com (textes, graphismes, logiciels, photographies, images, vidéos, sons, logos, marques, etc.) est la propriété exclusive de Medev Group ou de ses partenaires.
                </p>
                <p className="text-gray-300 font-nunito leading-relaxed">
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Medev Group.
                </p>
                <p className="text-gray-300 font-nunito leading-relaxed">
                  Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions du Code de la Propriété Intellectuelle ivoirien.
                </p>
              </div>
            </article>

            {/* 7. Données personnelles */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">07.</span> Données Personnelles
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50">
                <p className="text-gray-300 font-nunito leading-relaxed">
                  Le traitement des données personnelles collectées sur ce site est soumis à la <strong className="text-white">Loi n° 2013-450 du 19 juin 2013</strong> relative à la protection des données à caractère personnel en Côte d'Ivoire. Pour plus d'informations sur la collecte et le traitement de vos données, veuillez consulter notre{' '}
                  <a href="/fr/confidentialite" className="text-secondary hover:underline">
                    Politique de Confidentialité
                  </a>.
                </p>
              </div>
            </article>

            {/* 8. Droit applicable */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">08.</span> Droit Applicable et Juridiction
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50 space-y-4">
                <p className="text-gray-300 font-nunito leading-relaxed">
                  Les présentes mentions légales sont régies par le droit ivoirien.
                </p>
                <p className="text-gray-300 font-nunito leading-relaxed">
                  En cas de litige relatif à l'interprétation ou à l'exécution des présentes, les tribunaux d'Abidjan seront seuls compétents, sauf disposition légale impérative contraire.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>
    </div>
  )
}

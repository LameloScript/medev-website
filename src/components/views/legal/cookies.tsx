'use client'

import Header from '../header/header'
import Breadcrumb from '@/components/ui/breadcrumb'

export default function Cookies() {
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
                { label: 'Politique de Cookies' }
              ]}
            />
          </div>
          <h1 className="font-bangers text-4xl lg:text-6xl text-white">
            Politique de Cookies
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
                Cette politique de cookies explique comment Medev Group utilise des cookies et technologies similaires sur son site web www.medev-group.com, conformément à la législation ivoirienne sur la protection des données personnelles.
              </p>
            </div>

            {/* 1. Qu'est-ce qu'un cookie ? */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">01.</span> Qu'est-ce qu'un cookie ?
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50">
                <p className="text-gray-300 font-nunito leading-relaxed mb-4">
                  Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d'un site. Il permet à son émetteur d'identifier le terminal dans lequel il est enregistré, pendant la durée de validité ou d'enregistrement du cookie.
                </p>
                <p className="text-gray-300 font-nunito leading-relaxed">
                  Les cookies ont de multiples usages : ils peuvent servir à mémoriser votre identifiant client auprès d'un site marchand, le contenu courant de votre panier d'achat, la langue d'affichage de la page web, un identifiant permettant de tracer votre navigation à des fins statistiques ou publicitaires, etc.
                </p>
              </div>
            </article>

            {/* 2. Types de cookies utilisés */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">02.</span> Cookies utilisés sur notre site
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50 space-y-6">
                
                <div className="border-l-2 border-secondary pl-4">
                  <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Cookies strictement nécessaires
                  </h4>
                  <p className="text-gray-400 text-sm font-nunito mb-2">
                    Ces cookies sont indispensables au bon fonctionnement du site et ne peuvent pas être désactivés dans nos systèmes. Ils ne stockent généralement aucune donnée personnelle identifiable.
                  </p>
                  <p className="text-gray-500 text-xs font-nunito italic">
                    Exemple : Cookies de session, préférences de confidentialité.
                  </p>
                </div>

                <div className="border-l-2 border-secondary pl-4">
                  <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Cookies de performance (Analytiques)
                  </h4>
                  <p className="text-gray-400 text-sm font-nunito mb-2">
                    Ces cookies nous permettent de déterminer le nombre de visites et les sources du trafic, afin de mesurer et d'améliorer les performances de notre site. Ils nous aident également à identifier les pages les plus / moins visitées et d'évaluer comment les visiteurs naviguent sur le site.
                  </p>
                  <p className="text-gray-500 text-xs font-nunito italic">
                    Outils utilisés : Google Analytics.
                  </p>
                </div>

                <div className="border-l-2 border-secondary pl-4">
                  <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    Cookies de fonctionnalité
                  </h4>
                  <p className="text-gray-400 text-sm font-nunito mb-2">
                    Ces cookies permettent d'améliorer et de personnaliser les fonctionnalités du site Web. Ils peuvent être activés par nos équipes, ou par des tiers dont les services sont utilisés sur les pages de notre site Web.
                  </p>
                </div>

              </div>
            </article>

            {/* 3. Durée de conservation */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">03.</span> Durée de conservation
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50">
                <p className="text-gray-300 font-nunito leading-relaxed">
                  Conformément aux recommandations de l'ARTCI et à la législation en vigueur, la durée de validité du consentement donné dans ce cadre est de <strong className="text-white">13 mois maximum</strong>.
                </p>
              </div>
            </article>

            {/* 4. Gestion des cookies */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">04.</span> Comment gérer vos cookies ?
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50 space-y-6">
                <p className="text-gray-300 font-nunito leading-relaxed">
                  Lors de votre première visite sur notre site, un bandeau vous informe de la présence de cookies et vous invite à indiquer votre choix.
                </p>
                
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-3">Paramétrage via le navigateur</h4>
                  <p className="text-gray-400 text-sm font-nunito mb-4">
                    Vous pouvez à tout moment choisir de désactiver les cookies via les paramètres de votre navigateur. Voici les liens vers les procédures pour les principaux navigateurs :
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm font-nunito">
                    <li>
                      <a href="https://support.google.com/chrome/answer/95647?hl=fr" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline flex items-center gap-2">
                        <span className="text-gray-500">•</span> Google Chrome
                      </a>
                    </li>
                    <li>
                      <a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies-preferences" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline flex items-center gap-2">
                        <span className="text-gray-500">•</span> Mozilla Firefox
                      </a>
                    </li>
                    <li>
                      <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline flex items-center gap-2">
                        <span className="text-gray-500">•</span> Apple Safari
                      </a>
                    </li>
                    <li>
                      <a href="https://support.microsoft.com/fr-fr/windows/supprimer-et-g%C3%A9rer-les-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline flex items-center gap-2">
                        <span className="text-gray-500">•</span> Microsoft Edge
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            {/* 5. Contact */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">05.</span> Plus d'informations
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50">
                <p className="text-gray-300 font-nunito leading-relaxed">
                  Pour obtenir plus d'informations sur les cookies et vos droits, vous pouvez nous contacter à l'adresse <a href="mailto:contacts@medev-group.com" className="text-secondary hover:underline">contacts@medev-group.com</a> ou consulter notre <a href="/fr/confidentialite" className="text-secondary hover:underline">Politique de Confidentialité</a>.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>
    </div>
  )
}

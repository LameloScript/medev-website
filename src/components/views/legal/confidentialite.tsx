'use client'

import Header from '../header/header'
import Breadcrumb from '@/components/ui/breadcrumb'

export default function Confidentialite() {
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
                { label: 'Politique de confidentialité' }
              ]}
            />
          </div>
          <h1 className="font-bangers text-4xl lg:text-6xl text-white">
            Politique de Confidentialité
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
              <p className="text-gray-300 font-nunito leading-relaxed mb-4">
                La présente politique de confidentialité est établie conformément à la <strong className="text-white">Loi n° 2013-450 du 19 juin 2013</strong> relative à la protection des données à caractère personnel en République de Côte d'Ivoire.
              </p>
              <p className="text-gray-300 font-nunito leading-relaxed">
                Cette loi vise à garantir que tout traitement de données à caractère personnel, sous quelque forme que ce soit, respecte les libertés fondamentales et les droits des personnes physiques.
              </p>
            </div>

            {/* Déclaration ARTCI */}
            <div className="bg-secondary/10 rounded-2xl p-6 lg:p-8 border border-secondary/30">
              <h3 className="font-bangers text-xl text-secondary mb-3">Déclaration auprès de l'ARTCI</h3>
              <p className="text-gray-300 font-nunito leading-relaxed">
                Conformément à l'article 5 de la Loi n° 2013-450, le traitement des données à caractère personnel effectué par Medev Group fait l'objet d'une déclaration auprès de l'<strong className="text-white">Autorité de Régulation des Télécommunications/TIC de Côte d'Ivoire (ARTCI)</strong>.
              </p>
              <p className="text-gray-400 font-nunito text-sm mt-2">
                <strong>Statut de la déclaration :</strong> En cours d'obtention
              </p>
            </div>

            {/* 1. Responsable du traitement */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">01.</span> Responsable du Traitement
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50 space-y-4">
                <p className="text-gray-300 font-nunito leading-relaxed">
                  Le responsable du traitement des données personnelles collectées sur le site www.medev-group.com est :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-500 text-sm block mb-1">Société</span>
                    <span className="text-white font-medium">Medev Group SARL</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block mb-1">Adresse</span>
                    <span className="text-white font-medium">Cocody Faya, Abidjan, Côte d'Ivoire</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block mb-1">Email DPO</span>
                    <a href="mailto:contacts@medev-group.com" className="text-secondary hover:underline font-medium">
                      contacts@medev-group.com
                    </a>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block mb-1">Téléphone</span>
                    <span className="text-white font-medium">+225 07 89 77 60 28</span>
                  </div>
                </div>
              </div>
            </article>

            {/* 2. Données collectées */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">02.</span> Données Collectées
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50 space-y-6">
                <p className="text-gray-300 font-nunito leading-relaxed">
                  Dans le cadre de l'utilisation de notre site et de nos services, nous sommes amenés à collecter les catégories de données suivantes :
                </p>
                
                <div className="space-y-4">
                  <div className="border-l-2 border-secondary pl-4">
                    <h4 className="text-white font-medium mb-2">Données d'identification</h4>
                    <p className="text-gray-400 text-sm font-nunito">Nom, prénom, adresse email, numéro de téléphone</p>
                  </div>
                  
                  <div className="border-l-2 border-secondary pl-4">
                    <h4 className="text-white font-medium mb-2">Données professionnelles</h4>
                    <p className="text-gray-400 text-sm font-nunito">Nom de l'entreprise, poste occupé, secteur d'activité</p>
                  </div>
                  
                  <div className="border-l-2 border-secondary pl-4">
                    <h4 className="text-white font-medium mb-2">Données de connexion</h4>
                    <p className="text-gray-400 text-sm font-nunito">Adresse IP, type de navigateur, pages visitées, horodatage des visites</p>
                  </div>
                  
                  <div className="border-l-2 border-secondary pl-4">
                    <h4 className="text-white font-medium mb-2">Données de correspondance</h4>
                    <p className="text-gray-400 text-sm font-nunito">Messages envoyés via le formulaire de contact, échanges par email</p>
                  </div>
                </div>
              </div>
            </article>

            {/* 3. Finalités du traitement */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">03.</span> Finalités du Traitement
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50">
                <p className="text-gray-300 font-nunito leading-relaxed mb-4">
                  Conformément à l'article 16 de la Loi n° 2013-450, les données personnelles sont collectées pour des finalités déterminées, explicites et légitimes :
                </p>
                <ul className="space-y-3 text-gray-300 font-nunito">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span><strong className="text-white">Gestion des demandes de contact :</strong> répondre à vos questions et demandes d'information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span><strong className="text-white">Gestion des projets :</strong> suivi et exécution des prestations de services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span><strong className="text-white">Communication :</strong> envoi de newsletters et informations sur nos services (avec consentement)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span><strong className="text-white">Amélioration du site :</strong> analyse statistique de l'utilisation du site</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span><strong className="text-white">Obligations légales :</strong> respect des obligations légales et réglementaires</span>
                  </li>
                </ul>
              </div>
            </article>

            {/* 4. Base légale */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">04.</span> Base Légale du Traitement
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50">
                <p className="text-gray-300 font-nunito leading-relaxed mb-4">
                  Le traitement de vos données personnelles est fondé sur :
                </p>
                <ul className="space-y-3 text-gray-300 font-nunito">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span><strong className="text-white">Votre consentement</strong> (article 14 de la Loi 2013-450) pour l'envoi de communications marketing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span><strong className="text-white">L'exécution d'un contrat</strong> auquel vous êtes partie ou de mesures précontractuelles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span><strong className="text-white">Nos intérêts légitimes</strong> pour l'amélioration de nos services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span><strong className="text-white">Le respect d'une obligation légale</strong> à laquelle nous sommes soumis</span>
                  </li>
                </ul>
              </div>
            </article>

            {/* 5. Durée de conservation */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">05.</span> Durée de Conservation
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50">
                <p className="text-gray-300 font-nunito leading-relaxed mb-4">
                  Conformément à l'article 17 de la Loi 2013-450, les données personnelles sont conservées pendant une durée n'excédant pas celle nécessaire aux finalités pour lesquelles elles sont collectées :
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 text-white font-medium">Type de données</th>
                        <th className="text-left py-3 text-white font-medium">Durée de conservation</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300 font-nunito">
                      <tr className="border-b border-gray-800">
                        <td className="py-3">Données de contact (prospects)</td>
                        <td className="py-3">3 ans après le dernier contact</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3">Données clients (contrats)</td>
                        <td className="py-3">5 ans après la fin de la relation contractuelle</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3">Données de connexion</td>
                        <td className="py-3">13 mois</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3">Cookies</td>
                        <td className="py-3">13 mois maximum</td>
                      </tr>
                      <tr>
                        <td className="py-3">Documents comptables</td>
                        <td className="py-3">10 ans (obligation légale)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>

            {/* 6. Droits des personnes */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">06.</span> Vos Droits
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50 space-y-6">
                <p className="text-gray-300 font-nunito leading-relaxed">
                  Conformément aux articles 24 à 28 de la Loi n° 2013-450, vous disposez des droits suivants concernant vos données personnelles :
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Droit d'accès</h4>
                    <p className="text-gray-400 text-sm font-nunito">
                      Vous avez le droit d'obtenir la confirmation que des données vous concernant sont ou ne sont pas traitées, et d'en obtenir une copie.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Droit de rectification</h4>
                    <p className="text-gray-400 text-sm font-nunito">
                      Vous pouvez demander la rectification de vos données si elles sont inexactes, incomplètes ou périmées.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Droit de suppression</h4>
                    <p className="text-gray-400 text-sm font-nunito">
                      Vous pouvez demander la suppression de vos données lorsqu'elles ne sont plus nécessaires au regard des finalités.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Droit d'opposition</h4>
                    <p className="text-gray-400 text-sm font-nunito">
                      Vous pouvez vous opposer, pour des motifs légitimes, au traitement de vos données personnelles.
                    </p>
                  </div>
                </div>

                <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/30">
                  <h4 className="text-secondary font-medium mb-2">Exercer vos droits</h4>
                  <p className="text-gray-300 text-sm font-nunito">
                    Pour exercer l'un de ces droits, vous pouvez nous contacter à l'adresse{' '}
                    <a href="mailto:contacts@medev-group.com" className="text-secondary hover:underline">
                      contacts@medev-group.com
                    </a>{' '}
                    ou par courrier à notre siège social. Une pièce d'identité pourra vous être demandée. Nous répondrons dans un délai de 30 jours.
                  </p>
                </div>
              </div>
            </article>

            {/* 7. Destinataires des données */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">07.</span> Destinataires des Données
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50">
                <p className="text-gray-300 font-nunito leading-relaxed mb-4">
                  Vos données personnelles peuvent être transmises aux catégories de destinataires suivantes :
                </p>
                <ul className="space-y-2 text-gray-300 font-nunito">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    Les membres habilités de l'équipe Medev Group
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    Nos sous-traitants techniques (hébergement, maintenance)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    Les autorités compétentes en cas d'obligation légale
                  </li>
                </ul>
                <p className="text-gray-400 text-sm font-nunito mt-4">
                  Nous ne vendons ni ne louons vos données personnelles à des tiers.
                </p>
              </div>
            </article>

            {/* 8. Transfert hors CEDEAO */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">08.</span> Transfert des Données
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50 space-y-4">
                <p className="text-gray-300 font-nunito leading-relaxed">
                  Conformément aux articles 21 et 22 de la Loi n° 2013-450, tout transfert de données personnelles vers un pays tiers n'assurant pas un niveau de protection adéquat est soumis à l'autorisation préalable de l'ARTCI.
                </p>
                <p className="text-gray-300 font-nunito leading-relaxed">
                  Notre site est hébergé par <strong className="text-white">TpeCloud</strong>. Dans le cas où des données seraient transférées vers des serveurs situés hors de l'espace CEDEAO, nous nous engageons à :
                </p>
                <ul className="space-y-2 text-gray-300 font-nunito">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    Obtenir les autorisations nécessaires auprès de l'ARTCI
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    Mettre en place des garanties appropriées (clauses contractuelles types)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    Vous informer de ces transferts et des mesures de protection
                  </li>
                </ul>
              </div>
            </article>

            {/* 9. Sécurité */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">09.</span> Sécurité des Données
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50">
                <p className="text-gray-300 font-nunito leading-relaxed mb-4">
                  Conformément à l'article 18 de la Loi n° 2013-450, nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre :
                </p>
                <ul className="space-y-2 text-gray-300 font-nunito">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    La destruction accidentelle ou illicite
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    La perte accidentelle, l'altération
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    La diffusion ou l'accès non autorisé
                  </li>
                </ul>
                <p className="text-gray-400 text-sm font-nunito mt-4">
                  Ces mesures incluent notamment : le chiffrement SSL/TLS, la limitation des accès, les sauvegardes régulières et la sensibilisation de notre équipe.
                </p>
              </div>
            </article>

            {/* 10. Réclamation */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">10.</span> Réclamation
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50">
                <p className="text-gray-300 font-nunito leading-relaxed">
                  Si vous estimez que le traitement de vos données personnelles constitue une violation de la Loi n° 2013-450, vous avez le droit d'introduire une réclamation auprès de :
                </p>
                <div className="mt-4 bg-gray-800/50 rounded-lg p-4">
                  <p className="text-white font-medium">Autorité de Régulation des Télécommunications/TIC de Côte d'Ivoire (ARTCI)</p>
                  <p className="text-gray-400 text-sm font-nunito mt-1">
                    Site web : <a href="https://www.artci.ci" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">www.artci.ci</a>
                  </p>
                </div>
              </div>
            </article>

            {/* 11. Modifications */}
            <article>
              <h2 className="font-bangers text-2xl lg:text-3xl text-white mb-6 flex items-center gap-3">
                <span className="text-secondary">11.</span> Modifications de la Politique
              </h2>
              <div className="bg-gray-900/30 rounded-xl p-6 lg:p-8 border border-gray-800/50">
                <p className="text-gray-300 font-nunito leading-relaxed">
                  Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec indication de la date de mise à jour. Nous vous invitons à consulter régulièrement cette page.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>
    </div>
  )
}

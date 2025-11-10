import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq() {
    return (

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 h-120">
            <div className="lg:w-1/2 gap-2 flex flex-col">
                <span>[FAQ]</span>
                <div className="lg:w-2/3 gap-2 flex flex-col">
                    <h2 className="font-bebas text-5xl lg:text-7xl lg:w-1/2">VOS QUESTIONS</h2>
                    <p className="text-sm lg:text-base">
                        Vous avez des questions ? Nous avons les réponses. Consultez notre FAQ pour en savoir plus sur notre processus, nos tarifs et comment nous donnons vie à votre vision créative.
                    </p>
                </div>
            </div>
            <div className="w-1/2">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Quels types de projets pouvez-vous réaliser ?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Nous créons des sites web (vitrine, e-commerce, marketplace), des applications mobiles (Android/iOS),
                                des solutions d'intelligence artificielle, des systèmes IoT, et des outils de géomatique (SIG).
                            </p>
                            <p>
                                Notre expertise couvre également le design (logos, charte graphique, UX/UI),
                                l'automatisation des processus métier, la data science, et l'hébergement cloud sécurisé.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Quel est le prix pour un site web ou une application mobile ?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Pour un site web : Starter Package (1 200 000 FCFA), Growth Package avec e-commerce (2 800 000 FCFA),
                                ou Premium Package pour marketplace/SaaS (5 000 000 FCFA).
                            </p>
                            <p>
                                Pour une application mobile : Starter (2 500 000 FCFA), Growth Android & iOS (4 500 000 FCFA),
                                ou Premium avec IA et stores (7 000 000 FCFA). Nos packages vous font économiser jusqu'à 30%.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Combien de temps prend la réalisation d'un projet ?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Un site vitrine prend généralement 3-4 semaines, un site e-commerce 6-8 semaines,
                                et une application mobile complète 10-12 semaines.
                            </p>
                            <p>
                                Les délais varient selon la complexité du projet, votre réactivité pour les validations,
                                et la disponibilité de vos contenus (textes, images, fonctionnalités spécifiques).
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Qu'est-ce qui est inclus dans vos packages ?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Tous nos packages incluent l'hébergement sécurisé (1 an), l'optimisation SEO,
                                une charte graphique professionnelle, et la maintenance (3 à 12 mois selon le package).
                            </p>
                            <p>
                                Les packages Growth et Premium incluent aussi le paiement en ligne (Mobile Money, CB, PayPal),
                                un système de gestion de contenu (CMS), et pour le Premium : intégrations API avancées,
                                support prioritaire et mises à jour évolutives.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Avez-vous déjà réalisé des projets similaires ?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Oui, nous avons accompagné plusieurs entreprises : Tecnimuro Africa (site + app mobile),
                                Taohome et Caracole Afrique (e-commerce + app), Ong Yiwô zone, Happy Livraison,
                                Afrikababba, Slash, et Ageo SA.
                            </p>
                            <p>
                                Notre portfolio démontre notre capacité à livrer des solutions web et mobile performantes
                                pour différents secteurs d'activité, de la simple vitrine aux plateformes complexes.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>Comment vous contacter pour démarrer un projet ?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Vous pouvez nous joindre par téléphone au +225 07 89 77 60 28,
                                par email à contacts@medev-group.com, ou visiter notre site www.medev-group.com.
                            </p>
                            <p>
                                Nous sommes basés à Abidjan, Côte d'Ivoire. Contactez-nous pour un devis gratuit
                                et personnalisé selon vos besoins. Suivez-nous aussi sur nos réseaux sociaux @MedevGroup.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}
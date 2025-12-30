'use client'

import Header from '../header/header'
import Breadcrumb from '@/components/ui/breadcrumb'

interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image?: string
  author: {
    name: string
    role: string
    avatar?: string
  }
  content: {
    introduction: string
    sections: {
      title: string
      content: string[]
    }[]
    conclusion: string
  }
  tags: string[]
  relatedArticles?: string[]
}

const articles: { [key: string]: Article } = {
  'ia-developpement-africain': {
    slug: 'ia-developpement-africain',
    title: "L'IA au service du développement africain",
    excerpt: "Découvrez comment l'intelligence artificielle révolutionne les secteurs clés du continent africain.",
    category: "Intelligence Artificielle",
    date: "15 décembre 2024",
    readTime: "5 min",
    image: "https://picsum.photos/seed/ia-developpement-africain-hero/1600/900",
    author: {
      name: "Dr. Kouassi Adjoumani",
      role: "Expert IA & Data Science",
      avatar: "https://i.pravatar.cc/150?u=Dr.%20Kouassi%20Adjoumani"
    },
    content: {
      introduction: "L'intelligence artificielle (IA) n'est plus une technologie du futur pour l'Afrique, mais une réalité qui transforme déjà de nombreux secteurs. De l'agriculture à la santé, en passant par l'éducation et les services financiers, l'IA offre des solutions innovantes adaptées aux défis spécifiques du continent.",
      sections: [
        {
          title: "L'IA dans l'agriculture intelligente",
          content: [
            "L'agriculture représente plus de 60% de l'emploi en Afrique subsaharienne. L'IA transforme ce secteur crucial à travers des solutions de prédiction des récoltes, d'optimisation de l'irrigation et de détection précoce des maladies des cultures.",
            "Des startups africaines comme FarmCrowdy au Nigeria ou Tulaa en Côte d'Ivoire utilisent des algorithmes de machine learning pour aider les agriculteurs à maximiser leurs rendements tout en réduisant les coûts et l'impact environnemental.",
            "Les drones équipés d'IA permettent maintenant de surveiller de vastes exploitations, d'identifier les zones nécessitant une attention particulière et d'optimiser l'utilisation des engrais et pesticides."
          ]
        },
        {
          title: "Révolution de la santé grâce à l'IA",
          content: [
            "Le manque de personnel médical qualifié est un défi majeur en Afrique. L'IA aide à combler ce fossé grâce aux systèmes de diagnostic assisté, permettant aux agents de santé communautaires de détecter des maladies avec une précision accrue.",
            "Des applications mobiles utilisent l'IA pour analyser des images médicales, identifier des symptômes et recommander des traitements appropriés, rendant les soins de santé plus accessibles dans les zones rurales.",
            "La télémédecine alimentée par l'IA permet aux patients des régions éloignées de consulter des spécialistes sans avoir à parcourir de longues distances."
          ]
        },
        {
          title: "Éducation personnalisée et inclusive",
          content: [
            "L'IA permet de créer des expériences d'apprentissage personnalisées adaptées au rythme et au style d'apprentissage de chaque élève. Des plateformes éducatives utilisent des algorithmes pour identifier les lacunes dans les connaissances et proposer des exercices ciblés.",
            "Les systèmes de traduction automatique alimentés par l'IA brisent les barrières linguistiques, permettant aux contenus éducatifs d'être accessibles dans les langues locales africaines.",
            "Les chatbots éducatifs offrent un support 24/7 aux étudiants, répondant à leurs questions et les guidant dans leur apprentissage."
          ]
        },
        {
          title: "Inclusion financière via l'IA",
          content: [
            "L'IA révolutionne les services financiers en Afrique en permettant l'évaluation du crédit basée sur des données alternatives. Les personnes sans historique bancaire traditionnel peuvent maintenant accéder à des prêts grâce à l'analyse de leurs données de téléphonie mobile et de transactions numériques.",
            "Les systèmes de détection de fraude alimentés par l'IA protègent les consommateurs et les institutions financières, renforçant la confiance dans les services de paiement mobile qui connaissent une croissance explosive sur le continent.",
            "Les assistants virtuels bancaires utilisant le traitement du langage naturel démocratisent l'accès aux services financiers en permettant aux utilisateurs d'interagir dans leur langue locale."
          ]
        },
        {
          title: "Défis et opportunités",
          content: [
            "Malgré ces avancées prometteuses, plusieurs défis subsistent. L'accès limité à l'internet haut débit, le manque de données de qualité et la pénurie de talents en IA sont des obstacles à surmonter.",
            "Cependant, ces défis représentent aussi d'énormes opportunités. La formation locale de talents en IA, le développement d'infrastructures numériques et la création de datasets africains sont des domaines où l'investissement peut générer des retours importants.",
            "Les gouvernements africains commencent à reconnaître l'importance stratégique de l'IA, avec plusieurs pays développant des stratégies nationales d'IA et investissant dans la recherche et le développement."
          ]
        }
      ],
      conclusion: "L'IA offre à l'Afrique une opportunité unique de 'sauter' certaines étapes du développement traditionnel et de créer des solutions innovantes adaptées à ses besoins spécifiques. En investissant dans la formation, les infrastructures et la recherche, le continent peut non seulement bénéficier de l'IA mais aussi devenir un leader mondial dans certains domaines d'application. L'avenir de l'IA en Afrique est prometteur, et nous ne faisons que commencer à explorer son potentiel transformateur."
    },
    tags: ["Intelligence Artificielle", "Innovation", "Développement", "Agriculture", "Santé", "Éducation", "FinTech"]
  },
  'applications-mobiles-agriculture-cote-ivoire': {
    slug: 'applications-mobiles-agriculture-cote-ivoire',
    title: "Les applications mobiles transforment l'agriculture en Côte d'Ivoire",
    excerpt: "Comment les technologies mobiles permettent aux agriculteurs d'optimiser leurs rendements.",
    category: "Technologie",
    date: "10 décembre 2024",
    readTime: "4 min",
    image: "https://picsum.photos/seed/applications-mobiles-agriculture-cote-ivoire-hero/1600/900",
    author: {
      name: "Aminata Traoré",
      role: "Spécialiste AgriTech",
      avatar: "https://i.pravatar.cc/150?u=Aminata%20Traore"
    },
    content: {
      introduction: "La Côte d'Ivoire, premier producteur mondial de cacao et important acteur agricole en Afrique de l'Ouest, connaît une révolution silencieuse grâce aux technologies mobiles. Les applications dédiées à l'agriculture transforment la façon dont les producteurs cultivent, vendent et gèrent leurs exploitations.",
      sections: [
        {
          title: "Accès à l'information en temps réel",
          content: [
            "Les agriculteurs ivoiriens peuvent désormais accéder instantanément aux prévisions météorologiques, aux prix du marché et aux conseils agronomiques via leurs smartphones. Cette information autrefois difficile d'accès est maintenant à portée de main.",
            "Des applications comme MyAgri et AgriMarket fournissent des données actualisées sur les cours des produits agricoles, permettant aux producteurs de négocier de meilleurs prix et de choisir le moment optimal pour vendre leurs récoltes.",
            "Les alertes précoces sur les conditions météorologiques défavorables ou les épidémies de parasites permettent aux agriculteurs de prendre des mesures préventives, réduisant ainsi les pertes de récoltes."
          ]
        },
        {
          title: "Connexion directe aux marchés",
          content: [
            "Les plateformes de mise en relation éliminent les intermédiaires, permettant aux agriculteurs de vendre directement aux grossistes, détaillants ou consommateurs finaux. Cette désintermédiation augmente significativement leurs marges bénéficiaires.",
            "Les systèmes de paiement mobile intégrés facilitent les transactions sécurisées et instantanées, réduisant les risques liés au transport d'argent liquide dans les zones rurales.",
            "Les coopératives agricoles utilisent ces applications pour consolider les offres de leurs membres et négocier de meilleurs contrats avec les acheteurs."
          ]
        },
        {
          title: "Formation et accompagnement digitaux",
          content: [
            "Des tutoriels vidéo en langues locales enseignent les meilleures pratiques agricoles, de la préparation du sol à la récolte. Les agriculteurs peuvent apprendre à leur rythme, répétant les leçons autant de fois que nécessaire.",
            "Les services de conseil agricole via chatbot permettent aux producteurs de poser des questions et de recevoir des réponses personnalisées basées sur leur situation spécifique et leur type de culture.",
            "Les forums communautaires en ligne favorisent le partage d'expériences entre agriculteurs, créant un réseau d'entraide et d'apprentissage mutuel."
          ]
        },
        {
          title: "Gestion optimisée des exploitations",
          content: [
            "Les outils de gestion numérique aident les agriculteurs à planifier leurs activités, suivre leurs dépenses et calculer leur rentabilité. Cette visibilité financière améliore la prise de décision et facilite l'accès au crédit.",
            "Les registres numériques des traitements phytosanitaires et des fertilisants appliqués aident à respecter les normes de traçabilité exigées par les marchés d'exportation.",
            "Les applications de cartographie permettent aux producteurs de mesurer précisément leurs parcelles et d'optimiser l'utilisation de leurs terres."
          ]
        },
        {
          title: "Impact sur les revenus et la productivité",
          content: [
            "Les études montrent que les agriculteurs utilisant régulièrement des applications mobiles augmentent leurs rendements de 15 à 25% en moyenne, grâce à l'application de meilleures pratiques et à une meilleure planification.",
            "L'accès direct aux marchés permet d'augmenter les revenus de 30 à 40%, en éliminant les intermédiaires et en permettant de vendre au moment le plus opportun.",
            "La réduction des pertes post-récolte grâce à une meilleure connaissance des techniques de conservation et à un accès plus rapide aux acheteurs contribue également à améliorer les revenus des producteurs."
          ]
        }
      ],
      conclusion: "Les applications mobiles sont en train de démocratiser l'accès à des outils et des informations qui étaient autrefois réservés aux grandes exploitations. En Côte d'Ivoire, cette transformation digitale de l'agriculture ne fait que commencer. Alors que la couverture mobile s'étend et que les smartphones deviennent plus abordables, nous pouvons nous attendre à voir encore plus d'innovations qui aideront les agriculteurs à prospérer dans un marché de plus en plus compétitif."
    },
    tags: ["AgriTech", "Mobile", "Côte d'Ivoire", "Agriculture", "Innovation"]
  }
  // Les autres articles peuvent être ajoutés de la même manière
}

export default function BlogArticleDetail({ slug }: { slug: string }) {
  const article = articles[slug] || articles['ia-developpement-africain'] // Fallback

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Header darkMode={false} />

      {/* Breadcrumb */}
      <div className="pt-24 pb-8 lg:pt-28 lg:pb-12">
        <div className="container-fixed px-4 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Accueil', href: '/fr' },
              { label: 'Blog', href: '/fr/Blog' },
              { label: article.category, href: '/fr/Blog' },
              { label: article.title }
            ]}
          />
        </div>
      </div>

      {/* Article Header */}
      <article className="container-fixed px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Category & Reading Time */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-secondary text-sm font-nunito uppercase tracking-wider bg-secondary/10 px-4 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-gray-500 text-sm font-nunito">{article.readTime} de lecture</span>
          </div>

          {/* Title */}
          <h1 className="font-bangers text-4xl lg:text-6xl mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={article.author.avatar || '/assets/team/img-1.avif'}
                  alt={article.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-nunito font-semibold text-gray-900">{article.author.name}</div>
                <div className="text-gray-500 text-sm font-nunito">{article.author.role}</div>
              </div>
            </div>
            <div className="sm:ml-auto text-gray-500 text-sm font-nunito">
              {article.date}
            </div>
          </div>

          {/* Featured Image */}
          <div className="my-12 w-full h-96 rounded-2xl overflow-hidden">
            <img
              src={article.image || '/assets/hero.png'}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none font-nunito">
            {/* Introduction */}
            <p className="text-xl leading-relaxed text-gray-700 mb-8 font-medium">
              {article.content.introduction}
            </p>

            {/* Sections */}
            {article.content.sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="font-bangers text-3xl lg:text-4xl mb-6 text-gray-900">
                  {section.title}
                </h2>
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 leading-relaxed mb-4 text-base lg:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            {/* Conclusion */}
            <div className="bg-gray-50 border-l-4 border-secondary p-8 rounded-r-xl my-12">
              <h3 className="font-bangers text-2xl mb-4 text-gray-900">Conclusion</h3>
              <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                {article.content.conclusion}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="py-8 border-t border-gray-200">
            <h4 className="font-nunito font-semibold mb-4 text-gray-900">Tags :</h4>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-nunito hover:bg-secondary/10 hover:text-secondary transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="py-8 border-t border-gray-200">
            <h4 className="font-nunito font-semibold mb-4 text-gray-900">Partager cet article :</h4>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-nunito hover:bg-blue-700 transition-colors">
                LinkedIn
              </button>
              <button className="px-6 py-3 bg-green-600 text-white rounded-full font-nunito hover:bg-green-700 transition-colors">
                WhatsApp
              </button>
              <button className="px-6 py-3 bg-sky-500 text-white rounded-full font-nunito hover:bg-sky-600 transition-colors">
                Twitter
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-black mt-20">
        <div className="container-fixed px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bangers text-3xl lg:text-5xl text-white mb-6">
              Besoin d'accompagnement pour votre projet digital ?
            </h2>
            <p className="text-gray-400 font-nunito text-base lg:text-lg mb-8">
              Notre équipe d'experts est prête à transformer vos idées en solutions innovantes.
            </p>
            <a href="/fr/Contact">
              <button className="bg-secondary hover:bg-black transition-colors duration-200 flex items-center gap-2 px-6 py-3 rounded-full text-white text-base font-bangers mx-auto">
                <div className="rounded-full bg-gray-100 p-1">
                  <img src="/assets/Vector.png" alt="" className="w-5 h-5" />
                </div>
                Contactez-nous
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20">
        <div className="container-fixed px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h3 className="font-bangers text-3xl lg:text-4xl mb-12 text-center">
              Articles similaires
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <a
                  key={item}
                  href="/fr/Blog"
                  className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="w-full h-48 relative">
                    <img
                      src={
                        item === 1
                          ? 'https://picsum.photos/seed/related-1/800/600'
                          : item === 2
                          ? 'https://picsum.photos/seed/related-2/800/600'
                          : 'https://picsum.photos/seed/related-3/800/600'
                      }
                      alt={`Article ${item}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-secondary text-xs font-nunito uppercase">Technologie</span>
                    <h4 className="font-bangers text-xl mt-2 mb-2 group-hover:text-secondary transition-colors">
                      Titre de l'article connexe
                    </h4>
                    <p className="text-gray-600 text-sm font-nunito line-clamp-2">
                      Description courte de l'article...
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

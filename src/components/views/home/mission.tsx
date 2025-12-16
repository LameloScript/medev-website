import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Missions() {
  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-8">
        <div className="w-full lg:w-1/2">
          <span className="text-xs lg:text-sm">[NOTRE MISSION]</span>
          <h2 className="font-bangers w-2/3 text-3xl sm:text-5xl lg:text-7xl pt-2 lg:pt-4">
            Taillé pour vos besoins et vos défis.
          </h2>
        </div>

        <p className="w-full lg:w-1/2 text-sm lg:text-base text-left lg:text-right lg:pt-8">
          Nous créons des expériences qui font bouger les choses, des interfaces
          qui comprennent les gens, des parcours simples, et des résultats
          percutants.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-3 lg:gap-4">
        {/* Large Image Column */}
        <div className="flex flex-col">
          <div className="bg-white rounded-xl flex flex-col gap-4 justify-between lg:h-full">
            <div className="bg-gray-100 rounded-xl overflow-hidden h-[400px] lg:h-full relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center p-10">
                <img
                  src="/assets/masque.png"
                  alt="VR / 3D"
                  className="lg:w-full w-3/4  object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
              </div>
            </div>

          </div>
        </div>

        {/* Card 1 - Large testimonial */}
        <div className="flex flex-col gap-3 lg:gap-4">
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
            <div className="bg-gray-100 rounded-xl p-6 lg:p-8 flex flex-col justify-between min-h-[300px] lg:min-h-[400px] lg:w-2/3">
              <div className="flex flex-col gap-4">
                <div className="text-4xl lg:text-5xl">''</div>
                <blockquote className="text-base lg:text-xl font-medium">
                  Une collaboration exceptionnelle. L'équipe a transformé notre
                  vision en une plateforme qui dépasse nos attentes. L'engagement
                  utilisateur a triplé.
                </blockquote>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="font-semibold text-sm lg:text-base">
                    Sophie Marchand
                  </p>
                  <p className="text-xs lg:text-sm text-gray-600">
                    Directrice Innovation, TechCorp France
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Industry Recognitions */}
            <div className="relative w-full lg:w-1/3 text-white rounded-xl p-6 flex flex-col items-center justify-center min-h-[200px] lg:min-h-[195px] overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/bck.png')" }}
              ></div>
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-neutral-800/70"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-2">
                <h3 className="text-3xl lg:text-4xl font-bold font-bangers mb-1">
                  05+
                </h3>
                <p className="font-poppins text-xs lg:text-base text-white text-center lg:text-left">
                  Prix et Distinctions
                </p>
              </div>
              <div className="relative z-10 mt-4 lg:mt-6 flex flex-wrap justify-center gap-2 lg:gap-3 items-center">
                <span className="text-xs text-white-400">
                  Prix d'Excellence Nationale
                </span>
                <span className="text-xs text-white-400">Awwards</span>
              </div>
            </div>
          </div>

          {/* Card 3 - Client Retention */}
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 w-full">
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col lg:w-1/2 justify-between min-h-[200px] lg:min-h-[195px]">
              <div>
                <h3 className="text-4xl lg:text-5xl font-bold mb-2 lg:mb-3">95%</h3>
                <p className="font-semibold text-sm lg:text-base mb-1">
                  Taux de Fidélité Client
                </p>
                <p className="text-xs text-gray-600">
                  La confiance se construit sur la durée. 95% de nos clients nous
                  font confiance sur le long terme.
                </p>
              </div>
              <button className="mt-4 bg-[#FF6300] text-white px-4 py-2 lg:px-5 lg:py-2.5 rounded-full text-xs lg:text-sm font-medium hover:bg-orange-600 transition-colors w-fit">
                Prendre RDV →
              </button>
            </div>

            {/* Card 4 - Total satisfied clients */}

            {/* Card 5 - Mission statement */}
            <div className="bg-[#FF6300] text-white rounded-xl p-6 lg:p-8 flex flex-col lg:w-1/2 justify-center min-h-[200px] lg:min-h-[195px]">
              <div className="text-3xl lg:text-4xl mb-4">🏆</div>
              <p className="text-base lg:text-xl font-nunito font-medium">
                Du concept à l'exécution, nous travaillons avec efficacité sans
                jamais compromettre la créativité
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

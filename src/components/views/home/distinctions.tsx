export default function distinctions() {
  const awards = [
    {
      icon: "/assets/distinctions/logo-prix-1.png",
      text:
        "1er prix du Hackaton du Marché Africain des Solutions Spatiales en 2025",
    },
    {
      icon: "/assets/distinctions/logo-prix-1.png",
      text:
        "1er prix Startups Géospaciales sur les inondations et les zones humides Côte d'Ivoire GDZHIAO 2023",
    },
    {
      icon: "/assets/distinctions/logo-prix-2.png",
      text:
        "2e prix national d'excellence 2024 pour la meilleure contribution à la vulgarisation des usages du numérique",
    },
    {
      icon: "/assets/distinctions/logo-prix-2.png",
      text:
        "2e prix du Hackaton Gnambélé bootcamp PNUD L'IA au service de la biodiversité 2025",
    },
    {
      icon: "/assets/distinctions/logo-prix-2.png",
      text:
        "2e prix du Hackathon MARCONVA pour la protection de l'espace maritime 2024",
    },
  ];

  return (
    <section className="relative bg-black text-white w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: "url('/assets/distinctions/background-distinction.png')" }}
      />

      <div className="container-fixed py-40 px-4 lg:px-20 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <span className="text-xs md:text-sm text-center">[ NOS DISTINCTIONS ]</span>
          <h2 className="font-bangers text-3xl md:text-4xl lg:text-5xl mt-4 md:mt-6 text-center lg:leading-14 leading-tight">
            Nous sommes taillé pour vos besoins <span className="text-secondary">et vos défis.</span>
          </h2>
          <p className="text-center font-nunito text-sm md:text-base lg:text-lg leading-relaxed max-w-3xl mt-4 md:mt-6">
            Nous créons des expériences qui font bouger les choses, des interfaces qui
            comprennent les gens, des parcours simples, et des résultats percutants.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, i) => (
            <div key={i} className="flex flex-col items-start gap-4">
              <img
                src={award.icon}
                alt="Distinction"
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
              <p className="font-nunito text-sm lg:text-xl md:text-base leading-relaxed">
                {award.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
}

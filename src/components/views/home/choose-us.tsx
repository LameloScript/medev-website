export default function ChooseUs() {
  const items = [
    {
      title: "Nous respectons votre temps.",
      img: "/assets/choose-us/choose-1.png",
      bg: "bg-[#FFE6D5]",
    },
    {
      title: "Nous fournissons des résultats de haute qualité",
      img: "/assets/choose-us/Choose-2.png",
      bg: "bg-[#FFE6D5]",
    },
    {
      title: "Nous assurons une communication claire",
      img: "/assets/choose-us/choose-3.png",
      bg: "bg-[#FFE6D5]",
    },
    {
      title: "Nous mettons l'accent sur l'évolutivité",
      img: "/assets/choose-us/choose-4.png",
      bg: "bg-[#FFE6D5]",
    },
    {
      title: "Nous utilisons des technologies les plus récentes",
      img: "/assets/choose-us/choose-5.png",
      bg: "bg-[#FFE6D5]",
    },
    {
      title: "Nous sommes le partenaire de votre succès",
      img: "/assets/choose-us/choose-6.png",
      bg: "bg-[#FFE6D5]",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col lg:gap-24 lg:py-22 py-14 px-4 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        <div className="">
          <span className="text-black text-xs md:text-sm text-center lg:text-start ">
            [POURQUOI NOUS CHOISIR ?]
          </span>
          <h2 className="text-black font-bangers text-3xl md:text-4xl lg:text-5xl mt-4 md:mt-6  lg:leading-14 leading-tight">
            Il existe des milliers d'agences, alors pourquoi <span className="text-secondary">nous choisir</span> ?
          </h2>
        </div>
        <p className="lg:text-center text-start font-nunito text-sm md:text-base lg:text-lg leading-relaxed max-w-3xl ">
          Depuis le premier jour, conformément à nos principes fondamentaux, nous
          nous concentrons principalement sur plusieurs aspects pour satisfaire
          le client.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6 ">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`${item.bg} rounded-2xl p-6 md:p-8 lg:pl-8 lg:pt-8 relative flex flex-col min-h-[280px] md:min-h-80 lg:min-h-[250px]`}
          >
            <span className="font-bangers text-3xl  leading-tight max-w-[18ch]">
              {item.title}
            </span>
            <img
              src={item.img}
              alt={item.title}
              className="absolute bottom-0 right-0 w-40 h-auto md:w-32 lg:w-36 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

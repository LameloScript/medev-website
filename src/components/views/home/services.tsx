 "use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function services() {
  const items = [
    {
      title: "Developpement Web",
      img: "/assets/service-1.png",
      bg: "bg-[#FBFBFB]",
    },
    {
      title: "Developpement Mobile",
      img: "/assets/service-2.png",
      bg: "bg-[#FFE6D5]",
    },
    {
      title: "internet \ndes objets (IOT)",
      img: "/assets/service-3.png",
      bg: "bg-[#FFE6D5]",
    },
    {
      title: "GEOSPATIALe",
      img: "/assets/service-4.png",
      bg: "bg-[#FBFBFB]",
    },
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col gap-6 lg:gap-24 py-22 px-4 lg:px-20">
      <div className="flex flex-col items-start lg:items-center justify-center">
        <span className="text-white text-xs lg:text-sm text-start lg:text-center">
          [NOS SERVICES]
        </span>
        <h2 className="text-white font-bangers lg:text-5xl text-3xl mt-6 text-start lg:text-center lg:leading-14">
          Grâce à notre équipe interne, nous offrons{" "}
          <span className="text-secondary"> des services personnalisés </span>
        </h2>
      </div>

      <div className="mt-2 md:hidden">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
        >
          <CarouselContent>
            {items.map((item, idx) => (
              <CarouselItem key={idx} className="pl-4">
                <div
                  className={`${item.bg} p-6 rounded-2xl flex items-start justify-between min-h-[220px]`}
                >
                  <span className="font-bangers text-2xl">
                    {item.title.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < item.title.split("\n").length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </span>
                  <div>
                    <img src={item.img} alt="" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm" />
        </Carousel>
      </div>

      <div className="hidden md:grid lg:grid-cols-2 gap-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`${item.bg} p-6 lg:flex rounded-2xl items-start justify-between`}
          >
            <span className="font-bangers lg:text-4xl text-2xl">
              {item.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < item.title.split("\n").length - 1 ? <br /> : null}
                </span>
              ))}
            </span>
            <div>
              <img src={item.img} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-6">
        <a href="/fr/Contact">
          <button className="bg-secondary hover:bg-white hover:text-black transition-colors duration-200 flex items-center gap-2 px-4 py-2 rounded-full text-white text-base font-bangers w-fit opacity-0 animate-fade-in-up [animation-delay:0.4s]">
            <div className="rounded-full bg-gray-100 p-1">
              <img src="/assets/Vector.png" alt="" className="w-5 h-5" />
            </div>
            Donner vie à votre projet
          </button>
        </a>
      </div>
    </div>
  );
}

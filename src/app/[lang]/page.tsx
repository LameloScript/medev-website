import Faq from "@/src/components/views/home/faq";
import Missions from "@/src/components/views/home/mission";
import Project from "@/src/components/views/home/project";
import Yproject from "@/src/components/views/home/yproject";
import Team from "@/src/components/views/home/team";
import Trusted from "@/src/components/views/home/trusted";
import Hero from "@/src/components/views/home/hero"
import Services from "@/src/components/views/home/services";
import Cta from "@/src/components/views/home/cta";
import Industry from "@/src/components/views/home/industry";
import ChooseUs from "@/src/components/views/home/choose-us";
import Distinctions from "@/src/components/views/home/distinctions";
import TeamTest from "@/src/components/views/home/team-test";



// Generate static params for supported languages
export async function generateStaticParams() {
  return [
    { lang: 'fr' },
    { lang: 'en' },
  ]
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white font-sans dark:bg-black">
      {/* Hero prend toute la hauteur de l'écran avec son propre header */}
      <Hero />

      {/* Contenu après le hero avec spacing */}
      <Services />
      <Yproject />
      <Cta />
      <Industry />
      <ChooseUs />
      <TeamTest/>
      <Project />
      <Faq /> 
      
     
      <div className="container-fixed">
        <div className="flex flex-col gap-24 py-22 px-4 lg:px-20">

          {/* 
          <Trusted />
          */}
        </div>
      </div>
    </div>
  );
}

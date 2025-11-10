import Faq from "@/src/components/views/home/faq";
import Missions from "@/src/components/views/home/mission";
import Project from "@/src/components/views/home/project";
import Team from "@/src/components/views/home/team";
import Trusted from "@/src/components/views/home/trusted";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 lg:py-22 py-8 px-4  lg:px-8 min-h-screen w-full bg-white font-sans dark:bg-black">
      <Missions/>
      <Project/>
      <Trusted/>
      <Team />
      <Faq />
      
    </div>
  );
}

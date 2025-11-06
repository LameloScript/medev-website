import Faq from "@/src/components/views/home/faq";
import Project from "@/src/components/views/home/project";
import Team from "@/src/components/views/home/team";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 lg:py-22 py-8 px-4  lg:px-8 min-h-screen w-full bg-white font-sans dark:bg-black">
      <Project/>
      <Team />
      <Faq />
      
    </div>
  );
}

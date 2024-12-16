import Hero from "@/components/homepage/Hero/Hero";
import SectionTwo from "@/components/homepage/Value/SectionTwo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-c-c min-h-[100vh] px-[1rem]">

      <section id="hero-section" className="w-full min-h-[100vh] h-[150vh] border-b
      px-[2rem]">
        <Hero/>
      </section>


      <section id="hero-section" className="w-full min-h-[100vh]">
        <SectionTwo/>
      </section>


    </main>
  );
}

import Hero from "@/components/homepage/Hero/Hero";
import SectionFour from "@/components/homepage/Whyus/SectionFour";
import SectionThree from "@/components/homepage/Occasions/SectionThree";
import SectionTwo from "@/components/homepage/Value/SectionTwo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-c-c min-h-[100vh] relative">

      <section id="hero-section" className="w-full min-h-[100vh] h-[150vh] border-b
      px-[2rem]">
        <Hero/>
      </section>


      <section id="hero-section" className="w-full relative overflow-x-hidden">
        <SectionTwo/>
      </section>

      <section className="w-full min-h-[50vh]">
        <SectionThree/>
      </section>

      <section className="mt-[-30vh] w-full min-h-[100vh] max-w-[1400px] mx-auto">
        <SectionFour/>
      </section>

      <section className="w-full min-h-[100vh] max-w-[1400px] mx-auto">
      </section>


    </main>
  );
}

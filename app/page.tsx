import Hero from "@/components/homepage/Hero/Hero";
import SectionFour from "@/components/homepage/Whyus/SectionFour";
import SectionThree from "@/components/homepage/Occasions/SectionThree";
import SectionTwo from "@/components/homepage/Value/SectionTwo";
import Image from "next/image";
import SectionFive from "@/components/homepage/Services/SectionFive";
import SectionSix from "@/components/homepage/SectionSix/SectionSix";

export default function Home() {
  return (
    <div className="flex-c-c min-h-[100vh] relative">

      <section id="hero-section" className="w-full min-h-[100vh] h-[150vh]">
        <Hero/>
      </section>


      <section className="w-full relative overflow-x-hidden overflow-y-hidden" id="about">
        <SectionTwo/>
      </section>

      <section className="w-full min-h-[50vh] mt-[-5vh] vp3:mt-0" id="events">
        <SectionThree/>
      </section>

      <section className="mt-[min(calc(10rem+10vw),22rem)] w-full min-h-[100vh] max-w-[1400px] mx-auto">
        <SectionFour/>
      </section>

      <section className="w-full min-h-[60vh] max-w-[1400px] mx-auto mt-[4rem]" id="services">
        <SectionFive/>
      </section>

      <section className="w-full min-h-[70vh] max-w-[1400px] mx-auto mb-[-13rem]">
        <SectionSix/>
      </section>


      <div className="sticky bottom-[1rem] ml-auto mr-[1rem] flex flex-col gap-2 z-[99]">
        <button className="w-[35px] h-[35px] accent2-bg rounded-full flex items-center justify-center">
          <a href="https://www.facebook.com/wtgstaffing/" aria-label="Way to go staffing - facebook page">

          <svg fill="#ffff" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 19.253906 2 C 15.311906 2 13 4.0821719 13 8.8261719 L 13 13 L 8 13 L 8 18 L 13 18 L 13 30 L 18 30 L 18 18 L 22 18 L 23 13 L 18 13 L 18 9.671875 C 18 7.884875 18.582766 7 20.259766 7 L 23 7 L 23 2.2050781 C 22.526 2.1410781 21.144906 2 19.253906 2 z"/></svg>
          </a>

        </button>
        <button className="w-[35px] h-[35px] accent2-bg rounded-full flex items-center justify-center">
        <a href="https://www.instagram.com/wtgstaffing/" aria-label="Way to go staffing - instagram page">
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#ffffff"/>
            <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#ffffff"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#ffffff"/>
          </svg>
        </a>
        </button>
      </div>


    </div>
  );
}

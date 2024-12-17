"use client"
import { allText, section2_cards } from '@/constants'
import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger, ScrollToPlugin} from "gsap/all";
import Image from 'next/image';


const SectionTwo = () => {



  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
  useGSAP(()=> {
        // parallax cards
        gsap.to(".parallaxCard3", {
        yPercent: window.innerWidth < 520 ? -320 : -250,
        rotate: "-0deg",
        ease: "none",
        scrollTrigger: {
            trigger: "#section2Container",
            start: "center bottom", // the default values
            end: "bottom top",
            scrub: 0.1
        }, 
        });
        
        let section2Headings = gsap.utils.toArray(".section2Heading");

        gsap.to(section2Headings, {
          y:0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.25,
          scrollTrigger: {
              trigger: "#section2Container",
              start: "20% bottom", // the default values
              end: "bottom top",
              // markers: true,
          }, 
          });

          gsap.to(".section2Para", {
            y:0,
            opacity: 1,
            duration: 0.5,
            delay: 0.25,
            scrollTrigger: {
                trigger: "#section2Container",
                start: "20% bottom", // the default values
                end: "bottom top",
                // markers: true,
            }, 
            });
            

        gsap.to(".section2DarkCard", {
          x:0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
              trigger: "#section2Container",
              start: "20% bottom", // the default values
              end: "bottom top",
              // markers: true,
          }, 
          });

          gsap.to(".section2LightCard", {
            x:0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: "#section2Container",
                start: "20% bottom", // the default values
                end: "bottom top",
                // markers: true,
            }, 
            });

  },[]);

  return (
    <div className='w-full h-[70vh] vp4:min-h-[90vh] flex flex-col max-w-[1400px] mx-auto
    px-[1rem] vp4:px-[2rem] mt-[8rem]' id="section2Container">

      <h2 className="flex flex-row gap-4 heading1 items-center">
        {allText.section2.header.split(" ").map((word,index)=> (
          <div key={index}
          className={`
             ${index===1 ? 'heading1_signature mt-[-15px] ml-1' : ''}`}>
              <div className='section2Heading translate-y-[20px] opacity-0'>{word}</div>
          </div>
        ))}
      </h2>

      <p className='paragraph2 w-[70%] m-[2rem] mt-0 ml-[1rem] section2Para translate-y-[25px] opacity-0'>
          <span className='font-bold'>The team - </span>{section2_cards.card2.about}
      </p>

      <div className='cardsContainer mx-auto flex flex-row gap-[2rem] w-full relative
      vp5:px-[2rem] '>

        {/* dark card */}
        <div className='section2DarkCard opacity-0 translate-x-[-100px] mx-auto w-[min(calc(200px+20vw),400px)] 
        h-[min(calc(200px+20vw),400px)] 
        rounded-[10px]
        hidden vp5:flex accent1-dark-bg-grad text-white box_shadow_dark_main
        heading2 flex-col overflow-hidden p-[2rem]'>

          <h3 className='mt-[-1rem]'>
            {section2_cards.card1.header}
          </h3>

          <p className='paragraph1'>
           {section2_cards.card1.paragraph}
          </p>

          {/* google  */}
          <div className='flex-1 flex flex-col px-[1rem]
          accent1-light-bgg m-[1rem] rounded-[10px] items-center justify-center'>
              
              <div className='flex-c-c'>
                <div className='w-[200px] h-[70px] relative'>
                  <Image fill src="/images/google-white-logo.png" alt="google reviews logo"
                  className='grayscale brightness-[2.5]'></Image>
                </div>

              </div>

              <div className='w-[200px] h-[40px] mt-[0.5rem] flex-c-c relative'>
              <Image fill src="/images/stars.png" alt="google reviews logo"
                  className='grayscale brightness-[2.5]'></Image>
              </div>

              <p className='text-sm opacity-80 font-light font-sans'>Google Certified rating</p>

          </div>
        </div>


        {/* light card */}
        <div className='section2LightCard opacity-0 translate-x-[100px] flex-1 h-[min(calc(200px+20vw),400px)] rounded-[10px]
        vp5:w-[50%] accent1-light-bg box_shadow_dark_main
        px-[2rem] py-[2rem] flex flex-col justify-center gap-[1rem] relative overflow-hidden
        text-white'>


          <p className='paragraph2 w-[70%] mt-auto z-[1] text_shadow_2'>
            <span className='font-bold text_shadow_2'>Our mission - </span>{section2_cards.card2.mission}
          </p>

          <p className='paragraph2 w-[70%] z-[1] text_shadow_2'>
            <span className='font-bold text_shadow_2'>Our vision - </span>{section2_cards.card2.vision}
          </p>

          <div className='absolute w-full h-full right-0 top-0 
          rounded-0 Section2card1Circle
          '
          style={{
            background: `
            linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.90) 100%), url("${allText.section2.cardImage1}")
            `,
            backgroundPosition: "center",
            backgroundSize: "contain",
            }}>

          </div>

        </div>


        {/* dark card small view port */}
        <div className='absolute top-[2rem] right-[1rem] rotate-[16deg] vp5:hidden parallaxCard3
        mx-auto w-[min(calc(100px+10vw),200px)] h-[min(calc(100px+10vw),200px)] rounded-[10px]
        accent1-dark-bg text-white text-xs p-[0.5rem] flex flex-col gap-[0.25rem]  vp3:gap-[0.5rem]
        items-center justify-center z-[1]'>
           <h3 className='font-semibold'>
            {section2_cards.card1.header}
          </h3>

          <p className="font-light font-sans text-center">
           {section2_cards.card1.paragraph}
          </p>


          <div className='flex-c-c w-full mt-[0.5rem]'>
          <div className='flex-c-c'>
            <div className='w-[40px] h-[15px] vp3:w-[60px] vp3:h-[20px] relative'>
              <Image fill src="/images/google-white-logo.png" alt="google reviews logo"
              className='grayscale brightness-[2.5]'></Image>
            </div>

          </div>

              <div className='w-[80px] h-[15px]  vp3:mt-[0.15rem]  vp3:w-[100px]  vp3:h-[22px] flex-c-c relative'>
              <Image fill src="/images/stars.png" alt="google reviews logo"
                  className='grayscale brightness-[2.5]'></Image>
              </div>

              <p className='vp3:text-xs text-[10px] opacity-80 font-light font-sans'>Google Certified rating</p>

          </div>


        </div>


      </div>
    
    </div>
  )
}

export default SectionTwo

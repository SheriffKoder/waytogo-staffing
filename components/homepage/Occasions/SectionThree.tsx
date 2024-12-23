"use client"

import React from 'react'
import ScrollFillText from "./ScrollFillText/page"
import ScrollStackCards from "./ScrollStackCards"
import { allText } from '@/constants'

import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger, ScrollToPlugin} from "gsap/all";

const SectionThree = () => {

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


  useGSAP(()=> {


    let section3Headings = gsap.utils.toArray(".section3Heading");

    gsap.to(section3Headings, {
      y:0,
      opacity: 1,
      duration: 1,
      stagger: 0,
      scrollTrigger: {
          trigger: "#section3Container",
          start: "top bottom", // the default values
          end: "bottom top",
          // markers: true,
      }, 
      });


  },[]);




  return (
    <div className='w-full h-full px-[0rem] pt-[5rem] relative' id="section3Container">

    <h2 className="px-[2rem] pb-[min(calc(31rem-2vw),50rem)] vp4:pb-[min(calc(32rem-2vw),30rem)] 
    vp5:pb-[min(calc(32rem-2vw),26rem)] sticky z-[-1] bg-black text-white top-[6rem] vp4:px-[4rem] flex flex-row gap-4 heading1 items-center max-w-[2000px] mx-auto mb-[3rem]
    vp4:mb-0 sectionThreeHeading_container"
    style={{mixBlendMode: "difference"}}>
        {allText.section3.header.split(" ").map((word,index)=> (
          <div key={index}
          className={`${index===1 ? 'heading1_signature2 mt-[-15px] ml-1' : ''}`}>
            <div className='section3Heading translate-y-[20px] opacity-0 '>
              {word}
            </div>
          </div>
        ))}
      </h2>

      <ScrollFillText/>

      <div className='w-full px-[0.5rem]'>
        <ScrollStackCards/>
      </div>
    </div>
  )
}

export default SectionThree

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
    <div className='w-full h-full px-[1rem]' id="section3Container">

    <h2 className="vp4:px-[4rem] flex flex-row gap-4 heading1 items-center max-w-[1400px] mx-auto mb-[3rem]
    vp4:mb-0">
        {allText.section3.header.split(" ").map((word,index)=> (
          <div key={index}
          className={`${index===1 ? 'heading1_signature mt-[-15px] ml-1' : ''}`}>
            <div className='section3Heading translate-y-[20px] opacity-0 '>
              {word}
            </div>
          </div>
        ))}
      </h2>

      <ScrollFillText/>

      <div className='w-full'>
        <ScrollStackCards/>
      </div>
    </div>
  )
}

export default SectionThree
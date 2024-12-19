"use client"
import React from 'react'
import CarouselGames from "./CarouselGames"

import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger, ScrollToPlugin} from "gsap/all";
import { allText } from '@/constants'


const SectionFive = () => {

  useGSAP(()=> {

    gsap.utils.toArray(".section5Heading").forEach((heading, i) => {
      gsap.to(heading, {
        y:0,
        opacity: 1,
        duration: 1,
        delay: 0,
        scrollTrigger: {
                trigger: "#section5Container",
                start: "20% bottom", // the default values
                end: "bottom top",
                // markers: true,
            }, 
     })

    })

    let section5Para = gsap.utils.toArray(".section5Para");

    gsap.to(section5Para, {
      y:0,
      opacity: 1,
      duration: 1,
      stagger: 0,
      scrollTrigger: {
          trigger: "#section5Container",
          start: "top bottom", // the default values
          end: "bottom top",
          // markers: true,
      }, 
      });


      gsap.to(".CarouselContainer", {
        y:0,
        opacity: 1,
        duration: 1,
        // delay: 0.25,
        scrollTrigger: {
            trigger: "#section5Container",
            start: "10% bottom", // the default values
            end: "bottom top",
            // scrub: 0.1,
            // markers: true,
        }, 
        });

    },[]);



  return (
    <div id="section5Container">

      <div className='px-[1rem] vp4:px-[4rem]'>
        <h2 className="flex flex-row gap-4 heading1 items-center flex-wrap">
          {allText.section5.header.split(" ").map((word,index)=> (
            <div key={index}
            className={`${index===1 ? 'heading1_signature mt-[-15px] ml-1' : ''}`}>
              <div className='section5Heading translate-y-[20px] opacity-0'>{word}</div>
              </div>
          ))}
        </h2>

        <p className='paragraph1 mb-[0.5rem] section5Para translate-y-[20px] opacity-0'>{allText.section5.paragraph}</p>
      </div>

      <CarouselGames/>
      
    </div>
  )
}

export default SectionFive

"use client"
import React from 'react'
import { allText, sectionFour_contents } from '@/constants'

import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger, ScrollToPlugin} from "gsap/all";

const SectionFour = () => {



  useGSAP(()=> {

    gsap.utils.toArray(".section4Heading").forEach((heading:any, i) => {
      gsap.to(heading, {
        y:0,
        opacity: 1,
        duration: 1,
        delay: 0,
        scrollTrigger: {
                trigger: "#section4Container",
                start: "20% bottom", // the default values
                end: "bottom top",
                // markers: true,
            }, 
     })

    })

    let section4Para = gsap.utils.toArray(".section4Para");

    gsap.to(section4Para, {
      y:0,
      opacity: 1,
      duration: 1,
      delay: 0.5,
      stagger: 0,
      scrollTrigger: {
          trigger: "#section4Container",
          start: "20% bottom", // the default values
          end: "bottom top",
          // markers: true,
      }, 
      });

  

    gsap.utils.toArray(".section4Content").forEach((content:any, i) => {

      var number = content.querySelector(".contentIndex");

      gsap.to(number, {
        // y:0,
        opacity: 1,
        duration: 1,
        delay: i/8,
        scrollTrigger: {
                trigger: "#section4Container",
                start: "50% bottom", // the default values
                end: "bottom top",
                // markers: true,
            }, 
      })


      var line = content.querySelector(".bottomLine");

      gsap.to(line, {
        // width: "100%",
        // opacity: 1,
        duration: 1,
        delay: i/7,
        opacity: 0.05,
        scrollTrigger: {
                trigger: "#section4Container",
                start: "50% bottom", // the default values
                end: "bottom top",
                // markers: true,
            }, 
      })

      var title = content.querySelector(".title");

      gsap.to(title, {
        x:0,
        opacity: 1,
        duration: 1,
        delay: i/7,
        scrollTrigger: {
                trigger: "#section4Container",
                start: "50% bottom", // the default values
                end: "bottom top",
                // markers: true,
            }, 
      })

      var content = content.querySelector(".content");

      gsap.to(content, {
        x:0,
        opacity: 1,
        duration: 1.1,
        delay: (i/7)+0.1,
        scrollTrigger: {
                trigger: "#section4Container",
                start: "50% bottom", // the default values
                end: "bottom top",
                // markers: true,
            }, 
      })



      
    //   gsap.to(content, {
    //     y:0,
    //     opacity: 1,
    //     duration: 0.5,
    //     delay: i/3.5,
    //     scrollTrigger: {
    //             trigger: "#section4Container",
    //             start: "20% bottom", // the default values
    //             end: "bottom top",
    //             // markers: true,
    //         }, 
    //  })

    })

  },[]);



  return (
    <div className='px-[1rem] vp4:px-[2rem]' id="section4Container">
        <h2 className="flex flex-row gap-4 heading1 items-center flex-wrap leading-[calc(6vw+1rem)] mb-[2rem]">
        {allText.section4.header.split(" ").map((word,index)=> (
          <div key={index}
          className={`${index===1 ? 'heading1_signature mt-[-15px] ml-1' : ''}`}>
            <div className='section4Heading translate-y-[20px] opacity-0'>{word}</div>
            </div>
        ))}
      </h2>

  
      <p className='paragraph1 mb-[0.5rem] section4Para translate-y-[20px] opacity-0'>{allText.section4.paragraph1}</p>
      <p className='paragraph1 section4Para translate-y-[20px] opacity-0'>{allText.section4.paragraph2}</p>

    <div className='flex flex-col gap-[2rem] justify-center mt-[2rem] vp4:mt-[4rem]'>

        {
            sectionFour_contents.map((content, index)=> (

            <div className='section4Content w-[80vw] mx-auto h-[8rem] vp5:h-[10rem] flex flex-row max-w-[1100px]' key={index}>

                <div className='heading2 mb-auto
                w-[10%] text-center vp9:mt-auto vp9:mb-0 contentIndex opacity-0'>
                    {index+1}
                </div>

                <div className='w-full h-full flex flex-col vp9:flex-row vp4:gap-2 relative'>
                    <div className='w-full h-[1px] bg-[#252525] absolute bottom-0 bottomLine opacity-[0]'/>
                    <h3 className='heading2 min-w-[30%] vp9:mt-auto title translate-x-[-20px] opacity-0'>{content.header}</h3>
                    <p className='paragraph1 vp9:mt-auto vp9:mb-[10px] content translate-x-[-20px] opacity-0'>{content.paragraph}</p>
                </div>

        
            </div>
  
            ))
        }





    </div>




    </div>
  )
}

export default SectionFour

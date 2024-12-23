"use client"
import React, { useEffect, useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger, ScrollToPlugin} from "gsap/all";

import { allText } from '@/constants'
import Link from 'next/link';
import CalendarButton from '@/components/GoogleCalendar/CalendarButton'

const SectionSix = () => {

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    useGSAP(()=> {

        // parallax cards
        gsap.to(".parallax6_1", {
            yPercent: -50,
            x: window.innerWidth > 700 ? -60 : -15,
            // rotate: "90deg",
            ease: "none",
            scrollTrigger: {
                trigger: ".section6Container",
                start: "center bottom", // the default values
                end: "bottom top",
                scrub: 0.1,
                // markers: true,
            }, 
            });


                    // parallax cards
        gsap.to(".parallax6_2", {
            yPercent: -50,
            x: window.innerWidth > 700 ? 60 : 20,
            // rotate: "90deg",
            ease: "none",
            scrollTrigger: {
                trigger: ".section6Container",
                start: "center bottom", // the default values
                end: "bottom top",
                scrub: 0.1,
                // markers: true,
            }, 
            });

        },[]);





  return (
    <div className='flex items-center justify-center vp6:min-h-[70vh] h-[120vh] min-h-[700px] w-full section6Container relative
    pb-[10vh]'>

            <div className='SixCard1 box_shadow_dark
            w-[85vw] vp4:w-[min(600px,65vw)]
            h-[40vh] vp4:h-[min(360px,30vw)]
            rounded-[20px]
            parallax6_1 accent1-light-bg 
            translate-y-[0vw] z-[1]
            top-[70%] vp4:top-[70%]
            absolute left-[46%] vp4:left-[38%]
            flex p-[1rem] vp4:p-[2rem]
            flex-col text-black items-start justify-center gap-[0.5rem]'
            style={{
                transform: 'translate(-50%,-50%)',
            }}>
                
                <h3 className='heading2 font-bold w-[80%] relative'>
                    {allText.section6.header}
                </h3>
                <span className='w-[20%] relative bottom-0 h-0 border-b bg-black'></span>

                <p className='paragraph1'>
                    {allText.section6.paragraph}
                </p>

                <div className='mt-2 flex flex-col vp4:flex-row gap-2 justify-center w-full vp3:justify-start'>
                    <CalendarButton
                        targetId="six-calendar" 
                        className='w-full accent1-bg rounded-full paragraph1 px-4 py-2 vp4:px-4 vp4:py-2 text-white
                        focus:outline-[#A58964] hover:outline-[#9b795d] trans1 outline-transparent outline outline-2 outline-offset-2
                        cursor-pointer'
                    />

                    <button className='w-full accent2-bg text-white rounded-full paragraph1 px-1 py-2 vp4:px-6 vp4:py-2
                    focus:outline-[#13162e] hover:outline-[#13162e] trans1 outline-transparent outline outline-2 outline-offset-2
                    focus:bg-[#13162e] hover:bg-[#13162e]'>
                        <Link href="/join-us">
                            Join Our Team
                        </Link>
                    </button>

                </div>

            </div>

            <div className='SixCard1 box_shadow_dark
            w-[85vw] vp4:w-[min(580px,70vw)]
            h-[45vh] vp4:h-[min(450px,40vw)]
            rounded-[20px] mr-0 vp4:mr-[10vw]
            top-[40%] vp4:top-[45%]
            parallax6_2 absolute left-[54.5%] vp4:left-[60%]'
            style={{
                backgroundImage: `url(${allText.section6.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                transform: 'translate(-50%,-50%)',

            }}>   
            </div>


    </div>
  )
}

// Add TypeScript declaration for the calendar object
declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (config: {
          url: string;
          color: string;
          label: string;
          target: HTMLElement | null;
        }) => void;
      };
    };
  }
}

export default SectionSix

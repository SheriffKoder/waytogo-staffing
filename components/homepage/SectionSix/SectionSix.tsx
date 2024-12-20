"use client"
import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger, ScrollToPlugin} from "gsap/all";

import { allText } from '@/constants'
import Link from 'next/link';

const SectionSix = () => {


    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    useGSAP(()=> {

        // parallax cards
        gsap.to(".parallax6_1", {
            yPercent: -150,
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
            yPercent: -150,
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
    <div className='flex items-end justify-center min-h-[70vh] w-full section6Container relative
    '>

            <div className='SixCard1 box_shadow_dark
            w-[70vw] h-[35vh]
            vp4:w-[min(600px,65vw)] vp4:h-[min(360px,30vw)] 
            rounded-[20px]
            parallax6_1 accent1-light-bg 
            translate-y-[0vw] z-[1]
            top-[120%] vp4:top-[100%]
            absolute left-[40%] vp4:left-[42%]
            flex p-[2rem] flex-col text-black items-start justify-center gap-[0.5rem]'
            style={{
                // backgroundImage: `url(${allText.hero.cardImage1})`,
                // backgroundSize: "300%",
                // transform: "translateX(50%) rotate(-25deg)"
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
                    <button className='w-full accent1-bg rounded-full paragraph1 px-4 py-2 vp4:px-4 vp4:py-2 text-white'>
                        <Link href="/">
                            Request a Consultation
                        </Link>                       
                    </button>

                    <button className='w-full accent2-bg text-white rounded-full paragraph1 px-1 py-2 vp4:px-6 vp4:py-2'>
                        <Link href="/">
                            Join Our Team
                        </Link>
                    </button>

                </div>

            </div>

            <div className='SixCard1 box_shadow_dark
            w-[70vw] h-[60vh]
            vp4:w-[min(580px,70vw)] vp4:h-[min(450px,40vw)] 
            rounded-[20px] mr-[10vw]
            top-[100%] vp4:top-[80%] vp5:top-[80%]
            parallax6_2 absolute left-[55%] vp4:left-[58%]'
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

export default SectionSix

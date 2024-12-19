"use client"
import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger, ScrollToPlugin} from "gsap/all";
import { allText } from '@/constants';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';


const Hero = () => {


        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
        useGSAP(()=> {

        // parallax effect for text
        gsap.to(".textHero", {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
        });
            

        // parallax effect for text
        gsap.to(".parallax1", {
            yPercent: window.innerWidth < 520 ? -320 : -125,
            ease: "none",
            scrollTrigger: {
                trigger: ".zoomWrapper",
                start: "center bottom", // the default values
                end: "bottom top",
                scrub: 0.1
            }, 
        });


        // parallax cards
        gsap.to(".parallax2", {
        yPercent: window.innerWidth < 520 ? -320 : -250,
        rotate: "90deg",
        ease: "none",
        delay: 3,
        scrollTrigger: {
            trigger: ".zoomWrapper",
            start: "center bottom", // the default values
            end: "bottom top",
            scrub: 0.1
        }, 
        });

        gsap.to(".HeroCard1", {
            opacity: 1,
            top: "-=3%",
            duration: 0.5,
            ease: "none",
            // scale:1,
            // rotation: "16deg"
        });

        gsap.to(".HeroCard2", {
            top: "-=3%",
            opacity: 1,
            duration: 0.5,
            ease: "none",
            // rotation: "-10deg"
            // scale: 1,
        });


        // parallax effect for text for text in section 2
        gsap.to(".parallaxPara", {
            yPercent: -150,
            // x: 50,
            duration: 0.5,
            ease: "none",
            scrollTrigger: {
                trigger: ".zoomWrapper",
            //   start: "top bottom", // the default values
                // end: "bottom top",
            //   markers: true,
                scrub: 0.1
            }, 
        });


        // fade in effect for text in section 2
        gsap.to(".parallaxPara", {
            y: -100,
            opacity: 1,
            duration: 0.25,
            ease: "none",
            scrollTrigger: {
                trigger: ".parallaxPara",
                start: "top bottom", // the default values
                end: "bottom top",
            //   markers: true,
            //   scrub: 0.1
            }, 
        });


        // scale up the box
            gsap.to(".zoomBox", {
            height: window.innerHeight,
            width: window.innerWidth,
            borderRadius: 0,
            scrollTrigger: {
                trigger: ".zoomWrapper",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                }
        })

        // move also its container to the top of the page in the same time
        gsap.to(".zoomContainer", {
            top:0,
            scrollTrigger: {
                trigger: ".zoomWrapper",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                }
        })

              

        },[]);



  return (
    <div className='w-full overflow-x-hidden'>


        {/* background */}
        <div className='
        h-[150vh] zoomWrapper absolute top-0 left-0 w-full
        '>


            {/* // section's text w parallax */}
            <div className='sticky top-[60%] vp3:top-[32%] parallax1 z-[2] max-w-[1400px] px-[2rem]
            flex items-start justify-center flex-col textHero translate-y-[5rem] opacity-0
            vp4:px-[4rem] mx-auto'>
                <h1 className='heading1 text_blend heroText text-center vp3:text-start w-full
                flex flex-col'>
                <span className=''>
                    Way to Go 
                </span>
                <span className='vp4:w-full'> Staffing</span>
                </h1>

                <p className='heading2 w-full heroText text-center flex flex-row flex-wrap gap-0 justify-center items-center vp3:justify-start'>
                    <span>Your Partner for</span>
                    <span className='signature mx-[0.5rem] text_shadow_white'>Exceptional</span>
                    <span className='vp4:w-full vp4:text-start'>
                    <span>Talent, Every Time.</span>
                    </span>
                </p>

                <div className='flex flex-row gap-2 justify-center w-full vp3:justify-start'>
                    <button className='accent1-bg rounded-full paragraph1 px-4 py-1 vp4:px-6 vp4:py-2 text-white'>
                        Request a Consultation
                    </button>

                    <button className='accent1-br rounded-full paragraph1 px-4 py-1 vp4:px-6 vp4:py-2'>
                        <Link href="#services">
                            View Our Services
                        </Link>
                        
                    </button>

                </div>
            </div>


            {/* Hero cards */}
            <div className='opacity-50 HeroCard1 absolute top-[21%] vp4:top-[35%] right-[50%] vp3:right-[30%] vp4:right-[25%]
            parallax2 z-[1]
            w-[150px] h-[150px] rounded-[20px] rotate-[16deg]
            vp4:w-[300px] vp4:h-[300px] vp8:w-[450] vp8:h-[450] box_shadow_dark'
            style={{
                backgroundImage: `url(${allText.hero.cardImage2})`,
                backgroundSize: "300%",
                transform: "translateX(50%)"
            }}>   
            </div>

            <div className='opacity-75 HeroCard2 absolute top-[21%] vp4:top-[35%] right-[52%] vp3:right-[30%] vp4:right-[25%]
            parallax2 z-[1]
            w-[150px] h-[150px] rounded-[20px] rotate-[-10deg]
            vp4:w-[300px] vp4:h-[300px] vp8:w-[450] vp8:h-[450] box_shadow_dark'
            style={{
                backgroundImage: `url(${allText.hero.cardImage1})`,
                backgroundSize: "300%",
                transform: "translateX(50%) rotate(-25deg)"

            }}>
            </div>


            {/* box container */}
            <div className='w-full zoomContainer sticky flex items-center 
            justify-center top-[95vh] vp4:top-[90vh]'>
                <div className='zoomBox h-[20vw] w-[40vw] rounded-[20px] 
                ' id="hero_bg"
                style={{
                    backgroundImage: `url(${allText.hero.image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"                    
                    }}>
                </div>
            </div>
           

            <div className='bottom-0 absolute flex-c-c w-full'>
                <div className='pb-[0rem] vp4:px-[4rem] parallaxPara
                paragraph1 flex justify-center vp3:justify-start vp3:pl-[2rem]'>

                    <p className='max-w-[min(700px,80vw)] text-center vp3:text-start font-semibold text-xl'>
                    Delivering tailored staffing solutions that prioritize quality, reliability, and trust—helping your business thrive with the right team.                    </p>
                </div>
            </div>

        </div>



    </div>
  )
}

export default Hero

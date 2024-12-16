"use client"
import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger, ScrollToPlugin} from "gsap/all";
import { allText } from '@/constants';


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
                yPercent: window.innerWidth < 520 ? -320 : -250,
                ease: "none",
                scrollTrigger: {
                  trigger: ".zoomWrapper",
                  start: "center bottom", // the default values
                  end: "bottom top",
                  scrub: 0.1
                }, 
              });


              gsap.to(".parallax2", {
                yPercent: window.innerWidth < 520 ? -320 : -250,
                rotate: "90deg",
                ease: "none",
                scrollTrigger: {
                  trigger: ".zoomWrapper",
                  start: "center bottom", // the default values
                  end: "bottom top",
                  scrub: 0.1
                }, 
              });

            // parallax effect for text
            gsap.to(".parallaxPara", {
                yPercent: -150,
                x: 50,
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


                          // parallax effect for text
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
    <div className='w-full'>


        {/* background */}
        <div className='
        h-[150vh] zoomWrapper text_shadow_white absolute top-0 left-0 w-full
        '>


            {/* // section's text w parallax */}
            <div className='sticky top-[40%] parallax1 z-[2] px-[4rem]
            flex items-start justify-center flex-col textHero translate-y-[5rem] opacity-0'>
                <h1 className='heading1 text_blend heroText'>WayToGo</h1>

                <span className='heading2 mt-[max(-3.5vw,-2.5rem)] heroText'>
                    your goto team for
                    <span className='signature mx-[0.5rem]'>flawless</span>
                    events
                </span>

                <div className='flex flex-row gap-2 '>
                    <button className='accent1-bg rounded-full paragraph1 px-4 py-1 vp4:px-6 vp4:py-2 text-white'>
                        Hire our team
                    </button>

                    <button className='accent1-br rounded-full paragraph1 px-4 py-1 vp4:px-6 vp4:py-2'>
                        Join our team
                    </button>

                </div>
            </div>

            <div className='absolute top-[40%] vp4:top-[30%] right-[10%] parallax2 z-[1]
            w-[150px] h-[150px] rounded-[20px] rotate-[16deg]
            vp4:w-[300px] vp4:h-[300px] box_shadow_dark'
            style={{
                backgroundImage: `url(${allText.hero.cardImage2})`,
                backgroundSize: "300%"
            }}>   
            </div>

            <div className='absolute top-[40%] vp4:top-[30%] right-[12%] parallax2 z-[1]
            w-[150px] h-[150px] rounded-[20px] rotate-[-10deg]
            vp4:w-[300px] vp4:h-[300px] box_shadow_dark'
            style={{
                backgroundImage: `url(${allText.hero.cardImage1})`,
                backgroundSize: "300%"
            }}>
            </div>


            {/* box container */}
            <div className='w-full zoomContainer sticky flex items-center 
            justify-center top-[90vh]'>
                <div className='zoomBox h-[200px] w-[500px] rounded-[20px] 
                ' id="hero_bg"
                style={{
                    backgroundImage: `url(${allText.hero.image})`                    
                    }}>
                </div>
            </div>
           

            <div className='bottom-0 absolute w-full flex-c-c'>
            <div className='pb-[0rem] w-full px-[4rem] mx-auto parallaxPara opacity-20
            paragraph1'>

                <p className='max-w-[1000px] text-start'>
                Our entire organization exists to elevate your events and exceed your expectations. With comprehensive screening, diligent training and careful placement of talent based on client feedback and an internal ratings system, you can be assured of success, each and every time.
                </p>
            </div>
            </div>

        </div>



    </div>
  )
}

export default Hero

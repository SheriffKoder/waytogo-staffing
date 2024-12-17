"use client"
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import React, { useRef } from 'react'
import {ScrollTrigger, ScrollToPlugin} from "gsap/all";

import "./Navigation.css"
// smooth scroll nav links and progress bars
// https://codepen.io/Juxtopposed/pen/mdQaNbG

const Tween = () => {

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    useGSAP(()=> {

        gsap.from(".zero-line", {
            scrollTrigger: {
                trigger: "#zero",
                scrub: true,
                start: "top 700px",
                end: "bottom 200px",
                // markers: true,
                // pin: true,
            },
            translateX: "-100vw",
            transformOrigin: "left center", 
            ease: "none"
        })
        
        gsap.from(".one-line", {
            scrollTrigger: {
                trigger: "#one",
                scrub: true,
                start: "top 500px",
                end: "bottom 200px",
                // markers: true,
                // pin: true,
            },
            translateX: "-100vw",
            transformOrigin: "left center", 
            ease: "none"
        });

        gsap.from(".two-line", {
            scrollTrigger: {
                trigger: "#two",
                scrub: true,
                start: "top 300px",
                end: "bottom 200px",
                // markers: true,
                // pin: true,
            },
            translateX: "-100vw",
            transformOrigin: "left center", 
            ease: "none"
        });


    },[]);

  return (
    <>




        {/* example on zero */}
        <section id="zero" className="relative
        bg-black text-white w-auto
        ">
            <span className=' zero-line absolute left-0 mask_nav_gsap
                w-full h-full bg-[#4b1fdb]
                flex items-center justify-center  text-white'>
                    {/* <span className="relative text-[10rem]">Hello world</span> */}
            </span>
            <div className="text">
                We Are trying to be
            </div>
        </section>

        {/* example on zero */}
        <section id="one" className="relative
        bg-black text-white w-auto
        ">
            <span className=' one-line absolute left-0 mask_nav_gsap
                w-full h-full bg-[#4b1fdb]
                flex items-center justify-center  text-white'>
                    {/* <span className="relative text-[10rem]">Hello world</span> */}
            </span>
            <div className="">
            of web development and design

            </div>
        </section>

        <section id="two" className="relative
        bg-black text-white w-auto
        ">
            <span className=' two-line absolute left-0 mask_nav_gsap
                w-full h-full bg-[#4b1fdb]
                flex items-center justify-center  text-white'>
                    {/* <span className="relative text-[10rem]">Hello world</span> */}
            </span>
            <div className="text">
            the best in the field
            </div>
        </section>
    
    </>
  )
}




const ScrollFillText = () => {

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    useGSAP(()=> {

               // example 2
               const textElements = gsap.utils.toArray('.textFill_text');
        
               textElements.forEach(text => {
                   gsap.to(text, {
                     backgroundSize: '100%',
                     ease: 'none',
                     scrollTrigger: {
                       trigger: text,
                       start: 'center 80%',
                       end: 'center 70%',
                       scrub: true,
                    //    markers: true,
                     },
                   });
               });

              
    
    },[]);

    return (
        <>
        {/* https://codepen.io/Juxtopposed/pen/mdQaNbG */}
        <h3 className="w-[80%] mx-auto">
            <div className="pl-[1rem] textFill_text heading2">We offer highly trained and professional staff<span>We offer highly trained and professional staff</span></div>
            <div className="pl-[1rem] textFill_text heading2">ensuring top-quality service<span>ensuring top-quality service</span></div>
            <div className="pl-[1rem] textFill_text heading2">and a seamless event experience<span>and a seamless event experience</span></div>
            <div className="pl-[1rem] textFill_text heading2">for every occasion.<span>for every occasion</span></div>
        </h3>

        </>
    )

}

export default ScrollFillText

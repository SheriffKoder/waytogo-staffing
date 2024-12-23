"use client"
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

import "./Navigation.css"
// smooth scroll nav links and progress bars
// https://codepen.io/Juxtopposed/pen/mdQaNbG

const Tween = () => {

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    useGSAP(() => {

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


    }, []);

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

    useGSAP(() => {

        // example 2
        const textElements = gsap.utils.toArray('.textFill_text');

        textElements.forEach(text => {
            gsap.to(text, {
                backgroundSize: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: text,
                    start: 'center 130%',
                    end: 'center 70%',
                    scrub: true,
                    //    markers: true,
                },
            });
        });



    }, []);
    {/* https://codepen.io/Juxtopposed/pen/mdQaNbG */ }

    return (
        <h3 className="scrollFillText w-[100%] mx-auto px-[2rem] vp4:px-[4rem] max-w-[1800px] bg-white
        text-[calc(0.75rem+0.6vw)] font-ogg2 vp3:text-[min(45px,2.6vw)] vp7:text-[min(60px,3vw)]
        gap-[0.5rem] flex flex-col">
            <div className="vp3:pl-[1rem] textFill_text ">From elegant weddings to corporate events,</div>
            <div className="vp3:pl-[1rem] textFill_text ">private dinners, or large celebrations,</div>
            <div className="vp3:pl-[1rem] textFill_text ">our service staff adapts seamlessly to any setting.</div>
            <div className="vp3:pl-[1rem] textFill_text ">Whether you need formal service or a casual touch,</div>
            <div className="vp3:pl-[1rem] textFill_text ">we provide tailored staffing to match</div>
            <div className="vp3:pl-[1rem] textFill_text ">your event's unique style and needs.</div>

        </h3>

    )

}

export default ScrollFillText

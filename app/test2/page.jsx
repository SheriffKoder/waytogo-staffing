"use client"
import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger, ScrollToPlugin} from "gsap/all";



const page = () => {

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
    useGSAP(()=> {
        gsap.to(".zoomBox", {
            height: window.innerHeight,
            width: window.innerWidth,
            borderRadius: 0,
            scrollTrigger: {
                trigger: ".zoomWrapper",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                pin: ".grid",
                anticipatePin: 1,
                markers: true,
              }
        })

        gsap.to(".zoomContainer", {
            top:0,
            scrollTrigger: {
                trigger: ".zoomWrapper",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                pin: ".grid",
                anticipatePin: 1,
                markers: true,
              }
        })
          

    },[]);


  return (
    // <div>
    //   <h1 className="header-section h-[100vh]">Scroll down to see a photo gallery being revealed</h1>

    // <div className="grid-container">
    //     <div className="grid">

    //         <div className="gridLayer">
    //             <div className="gridBlock"></div>
    //             </div>

    //         <div className="gridLayer">
    //         <div className="gridBlock"></div>
    //         </div>

    //         <div className="gridLayer">
    //         <div className="gridBlock"></div>
    //         </div>

    //         <div className="gridLayer centerPiece  border border-10 border-red-500">
    //         <div className="gridBlock centerBlock"></div>
    //         </div>

    //         <div className="gridLayer">
    //         <div className="gridBlock"><a href="https://greensock.com" target="_blank"></a></div>
    //         </div>

    //         <div className="gridLayer">
    //         <div className="gridBlock"></div>
    //         </div>

    //         <div className="gridLayer">
    //         <div className="gridBlock"></div>
    //         </div>

    //         <div className="gridLayer">
    //         <div className="gridBlock"></div>
    //         </div>

    //         <div className="gridLayer">
    //         <div className="gridBlock"></div>
    //         </div>

    //     </div>
    // </div>

    // <h1 className="header-section" style={{marginTop:0}}>Some additional content</h1>




    // </div>

    <div className='h-[400vh]'>




        <div className='bg-gradient-to-b from-cyan-100 to-blue-500
        h-[200vh] zoomWrapper relative'>

            <div className='sticky top-[50vh] z-[1]'>
                    Hi
            </div>
            
            <div className='w-full zoomContainer sticky flex items-center 
            justify-center tb top-[90vh]'>
            <div className='zoomBox h-[200px] w-[500px] rounded-[20px] 
             bg-red-400'>

            </div>
            </div>
           
        </div>


    </div>
  )
}

export default page

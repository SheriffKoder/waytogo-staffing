"use client"
import React from 'react'
import { nav_links } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'

import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger, ScrollToPlugin} from "gsap/all";

const Navbar = () => {

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
  useGSAP(()=> {

    let navLinks = gsap.utils.toArray(".navLinks");

    // move the links up on page entry
    gsap.to(navLinks, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    })


  },[]);

  return (
    <nav className='w-full h-auto py-[1.5rem] px-[1rem] vp4:px-[2rem] bg-[#fffffff1]
    fixed top-0 z-[99]'>

    <Image src="/images/logo.avif" alt="company logo 1" 
    className='absolute left-[1rem] top-[1rem] my-auto' width={75} height={50}></Image>

      <ul className='w-full flex flex-row gap-[1rem] vp4:gap-[4rem] paragraph1 justify-end vp4:justify-center'>
        {
          nav_links.map((link, index)=> (
            <Link href={link.href} aria-label={link.aria} key={"nav link"+link.text}
            className={`hover:text-[#A58964] trans1 navLinks opacity-0
            
            `}
            // according to index, initialy set the position of the links below
            style={{transform: `translateY(${4*(index+5)}px)`}}>
              {link.text}
            </Link>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar

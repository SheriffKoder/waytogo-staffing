import React from 'react'
import { nav_links } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {

  return (
    <div className='absolute bottom-[-40px] w-[98%] mx-auto py-[1rem] px-[2rem] vp4:px-[2rem] bg-[#a5896485]
    h-[100px] flex items-center justify-end mt-[15rem]
    rounded-[20px]' style={{transform: 'translateY(-50%)'}}>

    <Image src="/images/logo2.png" alt="company logo 1" 
    className='' width={75} height={50}></Image>

      <ul className='ml-auto flex flex-row gap-[1rem] vp4:gap-[4rem] paragraph1 justify-end vp4:justify-center'>
        {
          nav_links.map((link, index)=> (
            <Link href={link.href} aria-label={link.aria} key={"nav link"+link.text}
            className={`hover:text-[#A58964] trans1 navLinks opacity-0 text-[14px]
              text-[#5a4a36]
            
            `}
            // according to index, initialy set the position of the links below
            style={{transform: `translateY(${4*(index+5)}px)`}}>
              {link.text}
            </Link>
          ))
        }
      </ul>
    </div>
  )
}

export default Footer

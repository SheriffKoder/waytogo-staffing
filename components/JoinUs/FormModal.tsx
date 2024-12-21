"use client"
import React from 'react'
import dynamic from 'next/dynamic';

// avoid document not defined error when building
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });
// or lottie-react - depending on what library you use
import * as animationData from '@/public/lottie/paperFly.json'

const FormModal = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

  return (
    <div className="sticky w-full max-w-[700px] h-[450px] z-[2] top-[50%] left-[50%]
     accent1-light-bg rounded-[15px] box_shadow_light
    hidden flex-col gap-2 items-center justify-center text-center px-[2rem] vp4:translate-x-[-50%]
    " id="formModal">

        <div className='mt-[-2rem]'>
            <Lottie 
            options={defaultOptions}
            height={200}
            width={200}
        />
        </div>

        <h3 className="heading2 mt-[-2rem]">Thank you for considering WayToGo</h3>
        <p className="paragraph1">Your information has been sent, we shall reach back to you soon!</p>
        <span className='text-xs font-extralight opacity-70'>redirecting to homepage</span>
    </div>
  )
}

export default FormModal

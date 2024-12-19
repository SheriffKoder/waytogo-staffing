import React from 'react'
import {allText} from "@/constants"
const page = () => {
  return (
    <>
    <div className='flex-c-c min-h-[100vh] px-[2rem]'>

      <div className="gallery">
        <img src="https://picsum.photos/id/1004/400/400" alt="a lovely kiss in the night"/>
        <img src="https://picsum.photos/id/1013/400/400" alt="a women inside a car"/>
        <img src="https://picsum.photos/id/1066/400/400" alt="a baby"/>
        <img src="https://picsum.photos/id/325/400/400" alt="a girl in the forest"/>
        <img src="https://picsum.photos/id/65/400/400" alt="a girl"/>
      </div>
</div>

    <div className='flex-c-c min-h-[100vh] px-[2rem]'>
        <h1 className='heading1 text-right'>{allText.hero.header}</h1>
        <p className="signature accent1-t text-right w-full">at your service</p>

    </div>
    
    <div className='flex-c-c min-h-[100vh] px-[2rem]'>
    <p className='heading2 text-right'>{allText.hero.paragraph}</p>
    <p className='paragraph1 text-right'>{allText.hero.paragraph}</p>
    <p className="signature text-right w-full">at your service</p>

    </div>

    <div className="w-full min-h-[100vh] flex-c-c">
      <h1 className="font-ogg1 text-[5rem]">Pierson</h1>
      <p className="f_rale text-[1.5rem]">We are a staffing agency</p>
      <p className="f_rouge text-[3rem] accent1-t">at your service</p>
    </div>



    
    </>

  )
}

export default page

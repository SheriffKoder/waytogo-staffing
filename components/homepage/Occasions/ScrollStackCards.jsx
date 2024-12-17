import React from 'react'
// import Image from 'next/image'
// import { ScrollScene } from 'scrollscene';
import {sectionThree_cards } from "@/constants";

import Image from 'next/image';

const ScrollStackCards = () => {




  return (
    <div className="StackContainer">
    <ul id="cards">
      {
        sectionThree_cards.map((card,index)=> {

          const space = (index+1)*-10;
          const space2 = space+32;
          // const space3 = space2+"px"

          return (
            <li className="card" id={`card${index+1}`} key={card.header}
            >
            <div className={`card-body relative overflow-hidden`}
            >
              <Image src={`/sectionThreeImages/${index+1}.jpg`} fill alt={card.header}
              className='absolute w-full h-full cardImgStack'>
  
              </Image>
  
              <div className='absolute w-full h-full flex flex-col bg-[#00000060]
              text-white p-[2rem]'
              style={{
                background: "#00000060",
                background: "linear-gradient(160deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 51%, rgba(255,255,255,0) 100%)"
              }}>
                <h3 className='heading1'>{card.header}</h3>
                <p className='paragraph1'>{card.description}</p>
              </div>
  
            </div>
        </li>
            
          )

      })
      }

   
    </ul>
</div>
  )
}

export default ScrollStackCards
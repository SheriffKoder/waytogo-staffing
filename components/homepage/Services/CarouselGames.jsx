"use client"
import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { sectionFive_cards } from '@/constants';




function CarouselGames() {
    return (
        <div className="CarouselContainer translate-y-[50px] opacity-0 relative">
            <div className="">
                <Splide
                    options={{
                        type: "loop", // Loop back to the beginning when reaching the end
                        autoScroll: {
                            pauseOnHover: true, // Do not pause scrolling when hovering over the carousel
                            pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
                            rewind: true, // Rewind to start when the end is reached
                            speed: 0.4 // Scrolling speed
                        },
                        arrows: true, // Hide navigation arrows
                        pagination: false, // Hide pagination dots
                        gap: '12px', // Gap between slides
                        // wheel: true,
                        // waitForTransition: true,
                        // releaseWheel: true,
                        autoWidth: true,
                        

                    }}
                    extensions={{ AutoScroll }} // Use the AutoScroll extension
                >


{/* w-[min(500px,40vw)] h-[min(600px,50vw)] rounded-[10px] */}
                        {/* hover:w-[min(550px,42vw)] hover:h-[min(600px,50vw)] */}
                {
                    sectionFive_cards.map((card,index)=>(
                        <SplideSlide key={card.header}>
                        <div 
                        className='
                        w-[40vw] h-[50vh] rounded-[10px] p-[1rem]
                        hover:w-[min(550px,45vw)] hover:h-[50vh]
                        vp4:w-[min(500px,40vw)] vp4:h-[min(600px,55vw)] vp5:h-[min(600px,45vw)] vp6:h-[min(600px,37vw)]
                        vp4:hover:w-[min(550px,42vw)] vp4:hover:h-[min(600px,37vw)] vp5:hover:h-[min(600px,45vw)] vp6:hover:h-[min(600px,37vw)]
                        transition-all duration-500 ease-out border
                         
                        splideCard text-white'
                        style={{
                            background: "#00000060",
                            background: `linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 21%, rgba(255,255,255,0) 100%), url(${card.image})`,
                            backgroundPosition: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                          }}
                        >

                            <div className="max-w-[40vw] vp4:max-w-[min(500px,40vw)]
                            flex flex-col items-start justify-end h-full">
                                <h3 className='heading2 splideTitle w-[30vw] max-w-[400px]
                                transition-all duration-500 ease-out'>
                                    <span className='text-sm vp4:text-xl mr-[0.5rem]'>{index+1}</span>
                                    {card.header}
                                </h3>

                                <p className='paragraph1 splideContent w-[30vw] max-w-[400px]
                                transition-all duration-500 ease-out'>
                                    {card.paragraph}
                                </p>
                            </div>


                        </div>                    
                    </SplideSlide>
                    ))
                }

                   

                </Splide>
            </div>

            <div className='absolute w-[50px] aspect-square rounded-full accent2-bg bottom-[-2rem]
            left-[50%] translate-x-[-50%]'>
                <div className='w-full h-full invert swipe_rotate'
                style={{
                    backgroundImage: 'url("/images/swipe.png")',
                    backgroundSize: "80%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    // transform: "translateX(50%)",
                    }}>
                </div>
            </div>

           

        </div>
    );
}

export default CarouselGames;

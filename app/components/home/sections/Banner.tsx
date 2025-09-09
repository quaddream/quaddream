'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import Image from 'next/image'
import { homeData } from '../data'

import { Home } from  '../type'
 
import gsap from 'gsap' 

const Banner = ({data}: {data: Home['bannerSection']}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  // animate on slide change
  useEffect(() => {
 

    if (contentRefs.current[activeIndex]) {
      gsap
      .fromTo(
        contentRefs.current[activeIndex].children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      )
    }
  }, [activeIndex])

  return ( 
    <section className='h-[400px] md:h-screen 2xl:h-[100vh] bg-black relative z-[1] hero overflow-hidden'> 
      <div className='absolute top-0 left-0 w-full h-full bg-black z-0 transition-all duration-300'>
        
          <video src={data.video} autoPlay loop muted  poster={data.poster} 
          className="w-full h-full object-cover" />

      </div>
      
      <div className='absolute top-0 left-0 w-full h-full bg-black/55 z-0 transition-all duration-300'></div>
     
      <div className='container h-full'>
        <Swiper
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          navigation={false}
          pagination={true}
          slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={800}
          loop={true}
          autoplay={{ delay: 6000 }}
          className='hero-slider relative h-full w-full'
        >
          {data.items.map((item, index) => (
           <SwiperSlide key={index}>
  <div
    className='h-full w-full overflow-hidden relative'
    
  >
    <div className=' relative z-20 h-full'>
      <div className='flex flex-col gap-5 h-full justify-end lg:pt-25 pb-8 md:pb-20'>
        <div
          ref={(el) => { contentRefs.current[index] = el }}
          className="flex flex-col gap-4 md:gap-12  "
        >
          <h2 className="text-65 leading-[1.125] text-white opacity-0">{item.title}</h2>
                      <a
                        href='/projects'
                        className="opacity-0 fade-item flex items-center gap-2 cursor-pointer text-16 border-1 border-white py-1 2xl:py-[10px] px-3 2xl:px-5 rounded-[60px] w-fit text-white relative group overflow-hidden z-20 isolation-isolate fade-item"
                      >
                        <div className="absolute top-0 left-0 w-0 h-full bg-primary z-[-1] transition-all duration-300 group-hover:w-full"></div>
                        <span>View Our Projects</span>
                        <span className="bg-primary group-hover:bg-white group-hover:translate-x-[10px] h-8 w-8 md:w-[51.7px] md:h-[51.7px] flex items-center justify-center rounded-full transition-all duration-300">
                          <Image
                            src="/assets/images/bold-arrow.svg"
                            alt="Arrow"
                            width={30}
                            height={30}
                            className="invert w-[18px] h-[18px] md:w-[24px] md:h-[24px] brightness-0 group-hover:invert-0 group-hover:brightness-100 transition-all duration-300"
                          />
                        </span>
                        
                      </a>
                     
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Banner

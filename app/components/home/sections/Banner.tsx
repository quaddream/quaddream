'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { homeData } from '../data'
const Banner = () => {
  return (
    <section className='h-[60vh] xl:h-[839px]  bg-black relative z-[1] hero'>
      <div className='absolute top-0 left-0 w-full h-full bg-black z-0 transition-all duration-300'>
        <Image src={homeData.banner.items[0].image} alt="Banner" width={2500} height={1500} className="h-full w-full object-cover" />
      </div>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black z-0 transition-all duration-300 '></div>
      <div className='container h-full'>
        <Swiper navigation={false} pagination={true} slidesPerView={1} modules={[Navigation, Pagination]} speed={1000} loop={true} autoplay={{ delay: 2500 }} className='hero-slider relative h-full w-full'>
          {homeData.banner.items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='h-full w-full overflow-hidden relative'>
                <div className='container relative z-20 h-full'>
                  <div className='flex flex-col gap-5 h-full justify-center'>
                    <div>
                      <h2 className='text-80 leading-[1.125] mb-10 2xl:mb-50px text-white'>{item.title}</h2>
                      <a href={item.slug} className='flex items-center gap-2 cursor-pointer text-16 border-2 border-white py-[10px] px-[20px] rounded-[60px] w-fit text-white relative group overflow-hidden transition-all duration-300 z-20 isolation-isolate'>
                        <div className='absolute top-0 left-0 w-0 h-full bg-primary z-[-1] transition-all duration-300 group-hover:w-full'></div>
                        <span>View Our Projects</span>
                        <span className='bg-primary block group-hover:bg-white p-[14px] rounded-full transition-all duration-300'>
                          <Image src="/assets/images/arrow-right.svg" alt="Arrow" width={30} height={30} className='invert brightness-0 group-hover:invert-0 group-hover:brightness-100 transition-all duration-300' />
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
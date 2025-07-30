'use client'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import { homeData } from '../data'
const Banner = () => {
  const swiperRef = useRef(null);
  const handleSlideChange = () => {
    const slides = document.querySelectorAll('.hero-slider .swiper-slide');

    slides.forEach(slide => {
      const h2 = slide.querySelector('h2');
      if (h2) {
        h2.classList.remove('opacity-100', 'translate-y-0');
        h2.classList.add('opacity-0', 'translate-y-5');
      }
    });

    const activeSlide = document.querySelector('.hero-slider .swiper-slide-active');
    const activeH2 = activeSlide?.querySelector('h2');
    if (activeH2) {
      activeH2.classList.remove('opacity-0', 'translate-y-5');
      activeH2.classList.add('opacity-100', 'translate-y-0');
    }
  };
  return (
    <section className='h-[60vh] xl:h-screen bg-black relative z-[1] hero'>
      <div className='absolute top-0 left-0 w-full h-full bg-black z-0 transition-all duration-300'>
        <Image src={homeData.banner.items[0].image} alt="Banner" width={2500} height={1500} className="h-full w-full object-cover" />
      </div>
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black z-0 transition-all duration-300 '></div>
      <div className='container h-full '>
        <Swiper
          onSlideChangeTransitionEnd={() => {
            const slides = document.querySelectorAll('.hero-slider .swiper-slide');

            slides.forEach(slide => {
              const h2 = slide.querySelector('h2');
              const fadeItem = slide.querySelector('.fade-item');
              if (h2) {
                h2.classList.remove('opacity-100', 'translate-y-0');
                h2.classList.add('opacity-0', 'translate-y-5');
              }
              if (fadeItem) {
                fadeItem.classList.remove('opacity-100', 'translate-y-0');
                fadeItem.classList.add('opacity-0', 'translate-y-5');
              }
            });

            const activeSlide = document.querySelector('.hero-slider .swiper-slide-active');
            const activeH2 = activeSlide?.querySelector('h2');
            const activeFadeItem = activeSlide?.querySelector('.fade-item');
            if (activeH2) {
              activeH2.classList.remove('opacity-0', 'translate-y-5');
              activeH2.classList.add('opacity-100', 'translate-y-0');
            }
            if (activeFadeItem) {
              activeFadeItem.classList.remove('opacity-0', 'translate-y-5');
              activeFadeItem.classList.add('opacity-100', 'translate-y-0');
            }
          }}
          onInit={() => {
            const activeSlide = document.querySelector('.hero-slider .swiper-slide-active');
            const activeH2 = activeSlide?.querySelector('h2');
            const activeFadeItem = activeSlide?.querySelector('.fade-item');
            if (activeH2) {
              activeH2.classList.remove('opacity-0', 'translate-y-5');
              activeH2.classList.add('opacity-100', 'translate-y-0');
            }
            if (activeFadeItem) {
              activeFadeItem.classList.remove('opacity-0', 'translate-y-5');
              activeFadeItem.classList.add('opacity-100', 'translate-y-0');
            }
          }}
          navigation={false}
          pagination={true}
          slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay]}
          speed={1000}
          loop={true}
          autoplay={{ delay: 2500 }}
          className='hero-slider relative h-full w-full'
        >

          {homeData.banner.items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='h-full w-full overflow-hidden relative'>
                <div className='container relative z-20 h-full'>
                  <div className='flex flex-col gap-5 h-full justify-center 2xl:pt-25'>
                    <div>
                      <h2 className='text-80 leading-[1.125] mb-10 2xl:mb-50px text-white opacity-0 translate-y-5 transition-all duration-700'>
                        {item.title}
                      </h2>
                      <a
                        href={item.slug}
                        className='fade-item flex items-center gap-2 cursor-pointer text-16 border-2 border-white py-1 2xl:py-[10px] px-3 2xl:px-5 rounded-[60px] w-fit text-white relative group overflow-hidden transition-all duration-700 z-20 isolation-isolate fade-item'
                      >
                        <div className='absolute top-0 left-0 w-0 h-full bg-primary z-[-1] transition-all duration-300 group-hover:w-full'></div>
                        <span>View Our Projects</span>
                        <span className='bg-primary block group-hover:bg-white group-hover:translate-x-[10px] p-1 2xl:p-[14px] rounded-full transition-all duration-300'>
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
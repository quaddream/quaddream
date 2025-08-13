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
import {motion, Variants, AnimatePresence} from 'motion/react'

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
    },
  };


  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  }
  const btnVariants: Variants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
  }


  return (
    <section className='h-[60vh] xl:h-screen 2xl:h-[110vh] bg-black relative z-[1] hero overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full bg-black z-0 transition-all duration-300'>
        <Image src={homeData.banner.items[0].image} alt="Banner" width={2500} height={1500} className="h-full w-full object-cover" />
      </div>
      <div className='absolute top-0 left-0 w-full h-full bg-black/41 z-0 transition-all duration-300 '></div>
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/71 z-0 transition-all duration-300 '></div>
      <div className='container h-full '>
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

          {homeData.banner.items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='h-full w-full overflow-hidden relative'>
                <div className='container relative z-20 h-full'>
                  <div className='flex flex-col gap-5 h-full justify-center 2xl:pt-25'>
                    <div>
                      <AnimatePresence mode="wait">
                        {activeIndex === index && (
                          <motion.div
                            className="container flex flex-col"
                            variants={textContainerVariants}
                            initial="hidden"
                            animate="visible">
                            <div className="overflow-hidden mb-6 xl:mb-50px" key={`title-${index}`}>
                              <motion.h2 className="text-80 leading-[1.125] text-white" variants={titleVariants} >
                                {item.title}
                              </motion.h2>
                            </div>
                            <div className="overflow-hidden" key={`btn-${index}`}>
                              <motion.a href={item.slug} variants={btnVariants}   className="fade-item flex items-center gap-2 cursor-pointer text-16 border-1 border-white py-1 2xl:py-[10px] px-3 2xl:px-5 rounded-[60px] w-fit text-white relative group overflow-hidden  z-20 isolation-isolate fade-item"
                              >
                                <div className="absolute top-0 left-0 w-0 h-full bg-primary z-[-1] transition-all duration-300 group-hover:w-full"></div>
                                <span>View Our Projects</span>
                                <span className="bg-primary group-hover:bg-white group-hover:translate-x-[10px] w-[51.7px] h-[51.7px] flex items-center justify-center rounded-full transition-all duration-300">
                                  <Image
                                    src="/assets/images/bold-arrow.svg"
                                    alt="Arrow"
                                    width={30}
                                    height={30}
                                    className="invert w-[24px] h-[24px] brightness-0 group-hover:invert-0 group-hover:brightness-100 transition-all duration-300"
                                  />
                                </span>
                              </motion.a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

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
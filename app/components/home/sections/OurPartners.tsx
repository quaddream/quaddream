'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import { motion } from 'motion/react';
import { moveUp } from '../../motionVarients';
import { Home } from '../type';
 
 

export default function PartnersSection( data: Home['partnersSection'] ) {
  return (
    <section className="pt-150 bg-[#F9F9F9] swiper-partners relative z-[50] overflow-hidden">
   
      <Image src='/assets/images/home/partners/partner-bg.svg' alt="Partners Background" width={2000} height={1000} className="h-full absolute w-auto object-cover bottom-0 right-0 lg:right-[30px] z-0" />
   

      <div className="container pb-150 text-left">
        <motion.h2 className="text-80 mb-5 lg:mb-[50px] leading-[1.125]" variants={moveUp(0.2)} initial="hidden" whileInView="show" transition={{duration: 0.6}} viewport={{amount: 0.1, once: true}}>
          {data.title}
        </motion.h2>
        <motion.p className="text-19 text-gray-para leading-[1.7] lg:max-w-[758px] mb-[29.7px] font-normal" variants={moveUp(0.4)} initial="hidden" whileInView="show" transition={{duration: 0.6}} viewport={{amount: 0.1, once: true}}>{data.description}</motion.p>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={4}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={false}
          loop={true}
          // pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiperPartners"
        >
          {data.items.map((_, i) => {
            if (i % 2 !== 0) return null
            const first = data.items[i]
            const second = data.items[i + 1]

            return (
              <SwiperSlide key={i} className={i + 2 >= data.items.length ? '' : 'lg:border-r-[0.3px] border-solid border-lite-gray mr-0'} >
                <motion.div className="flex gap-4 flex-col" variants={moveUp(i * 0.2)} initial="hidden" whileInView="show"
                 transition={{duration: 0.6}} viewport={{amount: 0.1, once: true}}>
                  <div className="flex justify-center">
                    <Image src={data.items[i].logo} alt={data.items[i].logoAlt} width={500} height={500} className="object-contain h-[50px] md:h-[100px] xl:h-[123.84px] w-auto" />
                  </div>
                  <div className="border-t border-lite-gray" />
               
                    <div className="flex justify-center">
                      <Image src={data.items[i + 1].logo} alt={data.items[i + 1].logoAlt} width={500} height={500} className="object-contain h-[50px] md:h-[100px] xl:h-[123.84px] w-auto" />
                    </div>
                 
                </motion.div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

"use client";
import React, { useEffect, useState } from "react"; 
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';
import Image from "next/image";

import { motion } from "framer-motion";
type datapop = {
  heading: string;

  items: {
    year: string;
    description: string;
    image: string;
    title: string;
  }[];
};
type MissionProps = {
  Data: datapop[];
};

const OurJourney: React.FC<MissionProps> = ({ Data }) => { 
  

  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" as const
      } 
    },
  } as const;

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" as const,
        delay: 0.2 
      } 
    },
  } as const;

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>  
      <div className="relative">
      {/* Custom Cursor (only visible on hover) */}
      {isHovering && (
        <div
          className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9999] flex flex-col items-center"
          style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
        > 
          <div className="w-[75px] h-[75px] xl:w-[108px] xl:h-[108px] bg-primary rounded-full flex gap-[6px] items-center justify-center">
         
          <Image src="/assets/images/icons/rtwt.svg" alt="" width={7} height={15} className="rotate-180" />
          <p className="mb-0 text-center text-[14px] xl:text-[19px] uppercase text-white leading-none">
          DRAG
          </p>
          <Image src="/assets/images/icons/rtwt.svg" alt="" width={7} height={15} />
          </div>
        </div>
      )} 
    </div>


    <section className="py-150 rounded-t-2xl 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative  ">
      <div className="container ">
    
        <div>
          <h2 className="text-80 leading-[1.125] mb-4 lg:mb-10  text-black">
            {Data[0].heading}
          </h2>
        </div>
        <div className="relative"> 
  <div className="absolute h-full w-4/7 right-0 yrslider hidden md:block">
    <Swiper
      onSwiper={setThumbsSwiper}
      slidesPerView={4}
      spaceBetween={60}
      loop={true}   
      
      allowTouchMove={false}    
  simulateTouch={false} 
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        
        992: {
          slidesPerView: 4,
        },
      }}
      watchSlidesProgress={true}
      modules={[Navigation, Autoplay, Thumbs]}
      className="h-full"
    >
      {Data[0].items.map((itm, i) => (
        <SwiperSlide key={i}>
          <div
            className={`afterline relative h-full   cursor-pointer `}
          >
           <div>
           <div className="flex items-center gap-2 relative z-10">
            <div className="w-3 h-3 bg-primary rounded-full transition-all duration-300"></div>
              <p className="text-19 leading-[1.684210526315789]  transition-all duration-300">
                {itm.year}
              </p>
            </div>
           </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  
  <div
  className="relative top-0 md:top-10 lg:top-20 md:pb-10 lg:pb-20 swiper-area cursor-none"
  onMouseEnter={() => setIsHovering(true)}
  onMouseLeave={() => setIsHovering(false)}
>
  <Swiper
    slidesPerView={1}
    spaceBetween={40}
    loop={true}
    speed={800}
    modules={[Navigation, Autoplay, Thumbs]}
    thumbs={{ swiper: thumbsSwiper }}
    onSlideChange={(swiper) => {
      if (thumbsSwiper) {
        thumbsSwiper.slideToLoop(swiper.realIndex, 600);
      }
    }}
  >
    {Data[0].items.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-0 md:gap-15 lg:gap-25 items-end">
          {/* Left Column (Text) */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
          >
            <h3 className="text-80 xl:text-[150px] font-light mb-5 md:mb-7 leading-[1.125] text-black">
              {item.year}
            </h3>
            <p className="text-19 leading-[1.684210526315789] max-w-[75ch] mb-0">
              {item.description}
            </p>
          </motion.div>

          {/* Right Column (Image + Title) */}
          <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="text-30 text-black leading-[1.2] mb-5 lg:mb-7">
              {item.title}
            </p>
            <Image
              src={item.image}
              alt=""
              width={673}
              height={320}
              className="img-fluid group-hover:brightness-0 group-hover:invert-100 transition-all duration-300  object-cover"
            />
          </motion.div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
</div>
      </div>
    </section></>
  );
};

export default OurJourney;

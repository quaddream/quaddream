"use client";
import React, { useEffect, useState, useRef } from "react"; 
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';
import Image from "next/image";
import { moveUp,moveLeft } from '../../motionVarients' 

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
  

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
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
      {isHovering && (
        <div
          className="hidden  lg:flex fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9999]  flex-col items-center"
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


    <section className="pt-150 rounded-t-2xl 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative  bg-[#F9F9F9]"
    >
     <div className="bg-contain pb-150  bg-no-repeat bg-left  " style={{backgroundImage: `url(/assets/images/aboutus/abtbgs.png)`, backgroundPositionY:"40px"}}>
     <div className="container ">
    
    <div className="flex justify-between items-end mb-6 lg:mb-12">
      <motion.h2 className="text-80 leading-[1.125]  text-black"
      variants={moveUp(0.2)} initial="hidden" whileInView="show" transition={{duration: 0.6}} viewport={{amount: 0.1, once: true}}
        >
        {Data[0].heading}
      </motion.h2>
            <div className="flex justify-end gap-3 md:gap-4">
              {/* Prev button */}
              <div
                ref={prevRef}
                className="group cursor-pointer transition-transform duration-300 hover:scale-[1.4] group hover:-translate-x-1"
              > 
                <Image src="/assets/images/icons/arrow-left.svg" alt="" width={16} height={16} className="min-w-[16px] min-h-[16px]  brightness-0 invert-0 group-hover:brightness-100  transition-all duration-300" />
               
              </div>
  
              {/* Next button */}
              <div
                ref={nextRef}
                className="group cursor-pointer transition-transform duration-300 hover:scale-[1.4] hover:translate-x-1 group"
              >
                <Image src="/assets/images/icons/arrow-right.svg" alt="" width={16} height={16} className="min-w-[16px] min-h-[16px] brightness-0 invert-0 group-hover:brightness-100   transition-all duration-300 " />
               
              </div>
            </div>
    </div>
    <div className="relative"> 
<div className="absolute h-full w-4/7 right-0 yrslider hidden md:block">
<Swiper
  onSwiper={setThumbsSwiper} 
  spaceBetween={190}
  loop={true}   
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
  
  breakpoints={{
    0: {
      slidesPerView: 2,
      spaceBetween:45
    },
    768: {
      slidesPerView: 2,
      spaceBetween:55
    },
    
    992: {
      slidesPerView: 3,
    },
  }}
  watchSlidesProgress={true}
  modules={[Navigation, Autoplay, Thumbs]}
  className="h-full"
>
  {Data[0].items.map((itm, i) => (
    <SwiperSlide key={i}>
      <motion.div
        className={`afterline relative h-full   cursor-pointer `}
        variants={moveLeft(i * 0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}
      >
       <div>
       <div className="flex items-center gap-2 relative z-10">
        <div className="w-3 h-3 bg-primary rounded-full transition-all duration-300"></div>
          <p className="text-19 leading-[1.684210526315789]  transition-all duration-300">
            {itm.year}
          </p>
        </div>
       </div>
      </motion.div>
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
navigation={{
  prevEl: prevRef.current,
  nextEl: nextRef.current,
}}
thumbs={{ swiper: thumbsSwiper }}
onSlideChange={(swiper) => {
  if (thumbsSwiper) {
    thumbsSwiper.slideToLoop(swiper.realIndex, 600);
  }
}}
>
{Data[0].items.map((item, index) => (
  <SwiperSlide key={index}>
    <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-5 md:gap-15 lg:gap-25 items-end">
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
        <p className="text-19 leading-[1.684210526315789] max-w-[50ch] mb-0 text-gray-para">
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
          className="img-fluid group-hover:brightness-0 rounded-2xl group-hover:invert-100 transition-all duration-300  object-cover"
        />
      </motion.div>
    </div>
  </SwiperSlide>
))}
</Swiper>
</div>
</div>
      </div>
     </div>
    </section></>
  );
};

export default OurJourney;

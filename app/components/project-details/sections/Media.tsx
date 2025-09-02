"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";


type QAItem = {
  image: string; 
};

interface QualityAssuranceProps {
  qaData: {
    heading: string; 
    items: QAItem[];
  };
}

const Media: React.FC<QualityAssuranceProps> = ({qaData}) => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
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
    <section className="py-150 overflow-hidden">
      <div className="container pb-150  border-b border-b-lite-gray">
        <div className="flex justify-between items-end md:text-center">
        <h2 className="text-80 leading-[1.12] mb-10 md:mb-12 text-black">
          {qaData.heading}
        </h2>
       
        <div className="flex xl:flex-row flex-col items-end xl:gap-[75px] gap-[10px] mb-4 md:mb-0">
            
          <div className="flex justify-end gap-1"> 
            <div
              ref={prevRef}
              className="group cursor-pointer transition-transform duration-300 hover:scale-[1.75] hover:-translate-x-3"
            >
              <IoIosArrowRoundBack
                size={24}
                className="text-black transition-colors duration-300 group-hover:text-primary"
              />
            </div> 
            <div
              ref={nextRef}
              className="group cursor-pointer transition-transform duration-300 hover:scale-[1.75] hover:translate-x-3"
            >
              <IoIosArrowRoundForward
                size={24}
                className="text-black transition-colors duration-300 group-hover:text-primary"
              />
            </div>
          </div>
        </div>
        </div>

      {/* Swiper */}
      <div className="container !overflow-visible relative swiper-area cursor-none  " style={{paddingInline:"0"}}
onMouseEnter={() => setIsHovering(true)}
onMouseLeave={() => setIsHovering(false)}>
        <Swiper
          className="!overflow-visible "
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2.6,
            },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
        >
          {qaData.items.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col ">
                <Image
                  src={item.image}
                  alt={item.image}
                  width={560}
                  height={459}
                  className="rounded-2xl w-full h-full object-cover"
                /> 
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
    </section>
    </>
  );
};

export default Media;

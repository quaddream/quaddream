"use client";
import React, { useEffect, useState, useRef } from "react"; 
import Image from "next/image";
import { moveUp } from '../../motionVarients';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Splide as SplideCore, Components, Options } from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { motion } from "framer-motion";

// Type for the Splide instance
type SplideType = SplideCore;

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
  

  const [mainSplide, setMainSplide] = useState<SplideCore | null>(null);
  const [thumbsSplide, setThumbsSplide] = useState<SplideCore | null>(null);

  // Sync sliders
  useEffect(() => {
    if (mainSplide && thumbsSplide) {
      mainSplide.sync(thumbsSplide);
    }
  }, [mainSplide, thumbsSplide]);

  // Handle navigation
  const goPrev = () => {
    if (mainSplide) {
      mainSplide.go('-1');
    }
  };

  const goNext = () => {
    if (mainSplide) {
      mainSplide.go('+1');
    }
  };

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

  // const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
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
                onClick={goPrev}
                className="group cursor-pointer transition-transform duration-300 hover:scale-[1.4] group hover:-translate-x-1"
              > 
                <Image src="/assets/images/icons/arrow-left.svg" alt="Previous" width={16} height={16} className="min-w-[16px] min-h-[16px] brightness-0 invert-0 group-hover:brightness-100 transition-all duration-300" />
              </div>
  
              {/* Next button */}
              <div
                onClick={goNext}
                className="group cursor-pointer transition-transform duration-300 hover:scale-[1.4] hover:translate-x-1"
              >
                <Image src="/assets/images/icons/arrow-right.svg" alt="Next" width={16} height={16} className="min-w-[16px] min-h-[16px] brightness-0 invert-0 group-hover:brightness-100 transition-all duration-300" />
              </div>
            </div>
    </div>
     <div className="relative">
      {/* Thumbs Slider */}
      <div className="absolute h-full w-4/7 right-0 yrslider  hidden md:block">
        <Splide
          options={{
            type: "loop",
            gap: "9rem",
            pagination: false,
            arrows: false,
            perPage: 4,
            drag: false,
            focus: 0,
            breakpoints: {
              0: { perPage: 2, gap: "1.2rem" },
              1280: { perPage: 2, gap: "1.8rem" },
              1920: { perPage: 4, gap: "9rem" },
            },
          }}
          onMounted={(splide) => {
            setThumbsSplide(splide);
          }}
          className="h-full"
        >
          {Data[0].items.map((itm, i) => (
            <SplideSlide key={i}>
              <div
                className="afterline relative h-full cursor-pointer" 
              >
                <div className="flex items-center gap-2 relative z-10">
                  <div className="w-3 h-3 bg-primary rounded-full transition-all duration-300"></div>
                  <p className="text-19 font-medium leading-[1.68] transition-all duration-300">
                    {itm.year}
                  </p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Main Slider */}
      <div className="relative top-0 md:top-10 lg:top-20 md:pb-10 lg:pb-20 swiper-area cursor-none "
onMouseEnter={() => setIsHovering(true)}
onMouseLeave={() => setIsHovering(false)}>
        <Splide
          options={{
            type: "loop",
            pagination: false,
            arrows: false,
            gap: "2rem",
          }}
          onMounted={(splide) => {
            setMainSplide(splide);
          }}
        >
          {Data[0].items.map((item, index) => (
            <SplideSlide key={index}>
              <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-5 md:gap-15 lg:gap-25 items-end">
                {/* Left Column */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false, amount: 0.6 }}
                >
                  <h3 className="text-80 xl:text-[150px] font-light mb-5 md:mb-7 leading-[1.125] text-black">
                    {item.year}
                  </h3>
                  <p className="text-19 leading-[1.68] max-w-[50ch] mb-0 text-gray-para">
                    {item.description}
                  </p>
                </motion.div>

                {/* Right Column */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
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
                    className="img-fluid rounded-2xl transition-all duration-300 object-cover"
                  />
                </motion.div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
      </div>
     </div>
    </section></>
  );
};

export default OurJourney;

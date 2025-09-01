'use client'
import React, { useRef,useState } from 'react'   
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay} from 'swiper/modules'
import type { SwiperRef } from "swiper/react";
import Image from "next/image";
 
type datapop={
    heading:string, 

    items: {
        year:string,
        description:string,
        image:string, 
        title:string
    }[]
}
type MissionProps = {
    Data:datapop[];
}
 
  const OurJourney: React.FC<MissionProps> = ({   Data }) => { 
   
     const swiperRef = useRef<SwiperRef>(null);
     const [activeIndex, setActiveIndex] = useState(0); 

    return (
        <section className='py-150 rounded-t-2xl 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative  '>
            <div className='container '>
                <div>
                    <h2 className='text-80 leading-[1.125] mb-10  text-black'>{Data[0].heading}</h2>
                </div>
                <div className="flex gap-[172px] justify-end">
        {Data[0].items.map((item, index) => (
          <div key={index}>
            <p
              className={`text-19 leading-[1.684210526315789] max-w-[75ch] mb-5 lg:mb-7 cursor-pointer transition-all duration-300
                ${activeIndex === index ? "text-primary font-semibold" : "text-gray-500"}`}
            //   onClick={() => swiperRef.current?.slideToLoop(index)} // click to navigate
            >
              {item.year}
            </p>
          </div>
        ))}
      </div>
      <div>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={0}
          pagination={{ clickable: true }}
          modules={[Navigation, Autoplay]}
          loop={true}
          speed={800}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // update active year
          className=""
        >
          {Data[0].items.map((item, index) => (
            <SwiperSlide key={index} className="">
              <div className="grid grid-cols-2 gap-50">
                <div>
                  <h3 className="text-80 lg:text-[150px] mb-5 md:mb-7 leading-[1.125] text-black">
                    {item.year}
                  </h3>
                  <p className="text-19 leading-[1.684210526315789] max-w-[75ch] mb-5 lg:mb-7">
                    {item.description}
                  </p>
                </div>
                <div>
                  <p className="text-30 text-black leading-[1.2] mb-5 lg:mb-7">
                    {item.title}
                  </p>
                  <Image
                    src={item.image}
                    alt=""
                    width={673}
                    height={320}
                    className="group-hover:brightness-0 group-hover:invert-100 transition-all duration-300"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
 
                
            </div> 
            
        </section>
    )
}

export default OurJourney

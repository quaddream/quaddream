"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useRef } from "react";
import type { SwiperRef } from "swiper/react";
import { assets } from "../../../public/assets/assets";
import { motion } from "framer-motion";
import { moveUp, moveLeft } from "../motionVarients";
import { ProductsServicesData } from "../ProductsServices/type";

type WhatYouGetProps = {
  Data: ProductsServicesData["thirdSection"]["items"][number]["secondSection"];
};

const WhatYouGet: React.FC<WhatYouGetProps> = ({ Data }) => {
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <section className="bg-black py-150 overflow-hidden">
      <div className="container !overflow-visible">
        <div className="flex justify-between items-center mb-7 lg:mb-8 2xl:mb-12">
          <motion.h2
            variants={moveUp()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-80 leading-[1.125]  text-white"
          >
            {Data.title}
          </motion.h2>
          <motion.div
            variants={moveLeft()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <button onClick={() => swiperRef.current?.swiper.slidePrev()}>
              <Image
                src={assets.arrowLeft}
                alt=""
                width={20}
                height={20}
                className="cursor-pointer brightness-0 invert-100 hover:brightness-100 hover:invert-0 hover:scale-125 transition-all duration-300"
              />
            </button>
            <button onClick={() => swiperRef.current?.swiper.slideNext()}>
              <Image
                src={assets.arrowRight}
                alt=""
                width={20}
                height={20}
                className="cursor-pointer brightness-0 invert-100 hover:brightness-100 hover:invert-0 hover:scale-125 transition-all duration-300"
              />
            </button>
          </motion.div>
        </div>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={0}
          pagination={{ clickable: true }}
          modules={[Navigation, Autoplay]}
          loop={true}
          speed={800}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          className="what-you-get-swiper !overflow-visible"
        >
          {Data.items.map((item, index) => (
            <SwiperSlide
              key={index}
              className="border group hover:bg-primary hover:border-primary border-lite-gray transition-all duration-300"
            >
              <motion.div
                variants={moveUp(index * 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="p-10 flex flex-col justify-between h-[250px] xl:h-[299px]"
              >
                <Image
                  src={item.logo}
                  alt={item.logoAlt}
                  width={50}
                  height={50}
                  className="group-hover:brightness-0 group-hover:invert-100 transition-all duration-300"
                />
                <h3 className="text-33 leading-[1.212121212121212] text-white">
                  {item.title}
                </h3>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WhatYouGet;

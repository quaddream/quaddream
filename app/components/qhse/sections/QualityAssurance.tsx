"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";


type QAItem = {
  icon: string;
  content: string;
};

interface QualityAssuranceProps {
  qaData: {
    heading: string;
    subheading: string;
    description: string;
    items: QAItem[];
  };
}

const QualityAssurance: React.FC<QualityAssuranceProps> = ({qaData}) => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <section className="pt-124 lg:pt-150">
      <div className="container overflow-hidden pb-[15px] lg:pb-[30px]">
        {/* Heading */}
        <h2 className="text-80 leading-[90px] xl:mb-[50px] text-black">
          {qaData.heading}
        </h2>
        {/* Sub-title */}
        <p className="text-30 xl:leading-[40px] leading-[36px] mb-[15px] xl:mb-[30px] text-black">
          {qaData.subheading}
        </p>
        {/* Paragraph */}
        <div className="flex xl:flex-row flex-col items-end xl:gap-[75px] gap-[10px]">
          <div className="flex">
            <p className="text-gray-para text-19 leading-[32px]">
              {qaData.description}
            </p>
          </div>
          {/* Navigation buttons */}
          <div className="flex justify-end gap-1">
            {/* Prev button */}
            <div
              ref={prevRef}
              className="group cursor-pointer transition-transform duration-300 hover:scale-[1.75] hover:-translate-x-3"
            >
              <IoIosArrowRoundBack
                size={24}
                className="text-black transition-colors duration-300 group-hover:text-primary"
              />
            </div>

            {/* Next button */}
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
      <div className="container !overflow-visible">
        <Swiper
          className="!overflow-visible"
          modules={[Navigation]}
          spaceBetween={80}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2.3,
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
              <div className="flex flex-col gap-[20px] xl:border-r-1 xl:border-r-[#BEBEBE]">
                <Image
                  src={item.icon}
                  alt={item.content}
                  width={40}
                  height={40}
                />
                <p className="text-black text-25 leading-[40px]">
                  {item.content}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default QualityAssurance;

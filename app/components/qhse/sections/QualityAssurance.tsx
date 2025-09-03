"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { moveLeft, moveUp } from "@/app/components/motionVarients";

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

const QualityAssurance: React.FC<QualityAssuranceProps> = ({ qaData }) => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <section className="pt-124 lg:pt-150">
      <div className="container overflow-hidden pb-[15px] lg:pb-[30px]">
        {/* Heading */}
        <motion.h2
          variants={moveUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-80 leading-[1.12] mb-7 md:mb-8 lg:mb-12 text-black"
        >
          {qaData.heading}
        </motion.h2>
        {/* Sub-title */}
        <motion.p
          variants={moveUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-25 md:text-30  leading-[1.3] mb-[15px] xl:mb-[30px] text-black"
        >
          {qaData.subheading}
        </motion.p>
        {/* Paragraph */}
        <div className="flex xl:flex-row flex-col items-end xl:gap-[75px] gap-[10px]">
          <div className="flex">
            <motion.p
              variants={moveUp(0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-gray-para text-19 leading-[1.7]"
            >
              {qaData.description}
            </motion.p>
          </div>
          {/* Navigation buttons */}
          <motion.div
            variants={moveLeft()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-end gap-3 md:gap-5"
          >
            {/* Prev button */}
            <div
              ref={prevRef}
              className="group cursor-pointer transition-transform duration-300 hover:scale-[1.4] group hover:-translate-x-1"
            >
              <Image
                src="/assets/images/icons/arrow-left.svg"
                alt=""
                width={24}
                height={24}
                className="min-w-[24px] min-h-[24px]  brightness-0 invert-0 group-hover:brightness-100  transition-all duration-300"
              />
            </div>

            {/* Next button */}
            <div
              ref={nextRef}
              className="group cursor-pointer transition-transform duration-300 hover:scale-[1.4] hover:translate-x-1 group"
            >
              <Image
                src="/assets/images/icons/arrow-right.svg"
                alt=""
                width={24}
                height={24}
                className="min-w-[24px] min-h-[24px] brightness-0 invert-0 group-hover:brightness-100   transition-all duration-300 "
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Swiper */}
      <div className="container !overflow-visible">
        <Swiper
          className="!overflow-visible"
          modules={[Navigation]}
          spaceBetween={80}
          speed={600}
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
              <motion.div
                variants={moveUp(idx * 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col gap-[20px] xl:border-r-1 xl:border-r-[#BEBEBE]"
              >
                <Image
                  src={item.icon}
                  alt={item.content}
                  width={67}
                  height={57}
                />
                <p className="text-black text-19 md:text-25 leading-[1.6]">
                  {item.content}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default QualityAssurance;

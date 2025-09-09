"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import type { Swiper as SwiperType } from "swiper";
import type { NavigationOptions } from "swiper/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { moveLeft, moveUp } from "@/app/components/motionVarients";
import { QhseData } from "../type";

interface QualityAssuranceProps {
  qaData: QhseData["secondSection"];
}

const QualityAssurance: React.FC<QualityAssuranceProps> = ({ qaData }) => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.params.navigation &&
      typeof swiperRef.current.params.navigation !== "boolean"
    ) {
      const navigation = swiperRef.current.params
        .navigation as NavigationOptions;

      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

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
          {qaData.mainTitle}
        </motion.h2>

        {/* Sub-title */}
        <motion.p
          variants={moveUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-25 md:text-30  leading-[1.3] mb-[15px] xl:mb-[30px] text-black"
        >
          {qaData.subTitle}
        </motion.p>

        {/* Paragraph + navigation */}
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
            <div
              ref={prevRef}
              className="group cursor-pointer transition-transform duration-300 hover:scale-[1.4] group hover:-translate-x-1"
            >
              <Image
                src="/assets/images/icons/arrow-left.svg"
                alt=""
                width={24}
                height={24}
                className="min-w-[24px] min-h-[24px] brightness-0 group-hover:brightness-100 transition-all duration-300"
              />
            </div>
            <div
              ref={nextRef}
              className="group cursor-pointer transition-transform duration-300 hover:scale-[1.4] hover:translate-x-1 group"
            >
              <Image
                src="/assets/images/icons/arrow-right.svg"
                alt=""
                width={24}
                height={24}
                className="min-w-[24px] min-h-[24px] brightness-0 group-hover:brightness-100 transition-all duration-300"
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
            768: { slidesPerView: 2.3 },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {qaData.items.map((item, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                variants={moveUp(idx * 0.25)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`flex flex-col gap-[20px] ${
                  idx !== qaData.items.length - 1
                    ? "xl:border-r xl:border-r-[#BEBEBE]"
                    : ""
                }`}
              >
                <Image
                  src={item.logo}
                  alt={item.logoAlt}
                  width={67}
                  height={57}
                />
                <p className="text-black text-19 md:text-25 leading-[1.6]">
                  {item.title}
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

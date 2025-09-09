"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { moveUp } from "../../motionVarients";
import { QhseData } from "../type";

type CertificationProps = {
  certificationData: QhseData["fifthSection"];
};

const Certification: React.FC<CertificationProps> = ({ certificationData }) => {
  const { title, items } = certificationData;

  return (
    <section className=" pt-150 overflow-hidden ">
      <div className="container ">
        <motion.h2
          variants={moveUp()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-[25px] md:text-80 leading-[1.12] mb-5 md:mb-8 lg:mb-12 text-black"
        >
          {title}
        </motion.h2>
      </div>

      <div className="container md:!overflow-visible ">
        <Swiper
          className="md:!overflow-visible"
          spaceBetween={60}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{
            el: ".certification-pagination",
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2.3,
              pagination: false,
            },
          }}
        >
          {items.map((item, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                variants={moveUp(idx * 0.25)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`flex flex-col ${
                  idx !== items.length - 1
                    ? "xl:border-r xl:border-r-lite-gray"
                    : ""
                }`}
              >
                <div className="flex lg:items-center gap-3 md:gap-[30px] items-center">
                  <div className="w-[67px] h-[67px] md:w-[99px] md:h-[101px] flex flex-shrink-0">
                    <Image
                      src={item.logo}
                      alt={item.title}
                      width={99}
                      height={101}
                    />
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-black text-19 2xl:text-33 leading-[1.2]">
                      {(() => {
                        const parts = item.title.split(" ");
                        const line1 = parts.slice(0, 2).join(" ");
                        const line2 = parts.slice(2).join(" ");

                        return (
                          <>
                            {line1}
                            <br />
                            {line2}
                          </>
                        );
                      })()}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
          <div className="flex justify-center mt-12 md:hidden">
            <div className="swiper-pagination certification-pagination"></div>
          </div>
        </Swiper>
      </div>

      <div className="container border-b border-[#BEBEBE] pb-5 lg:pb-31 mb-150"></div>
    </section>
  );
};

export default Certification;

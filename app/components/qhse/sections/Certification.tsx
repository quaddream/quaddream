"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

type Item = {
  icon: string;
  CertificationID: string;
  CertificationName: string;
};

type CertificationProps = {
  certificationData: {
    heading: string;
    items: Item[];
  };
};

const Certification: React.FC<CertificationProps> = ({ certificationData }) => {
  const { heading, items } = certificationData;

  return (
    <section className=" pt-150 overflow-hidden ">
      <div className="container ">
        <h2 className="text-[25px] md:text-80 leading-[1.12] mb-5 md:mb-8 lg:mb-12 text-black">
          {heading}
        </h2>
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
              <div className="flex flex-col xl:border-r-1 xl:border-r-lite-gray">
                <div className="flex lg:items-center gap-3 md:gap-[30px] items-center">
                  <div className="w-[67px] h-[67px] md:w-[101px] md:h-[101px] flex flex-shrink-0">
                    <Image
                      src={item.icon}
                      alt={item.CertificationName}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-black text-19 2xl:text-33 leading-[1.2]">
                      {item.CertificationID}
                    </p>
                    <p className="text-black text-19 2xl:text-33 leading-[1.2]">
                      {item.CertificationName}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="flex justify-center mt-12 md:hidden">
            <div className="swiper-pagination certification-pagination"></div>
          </div>
        </Swiper>
      </div>
      
      <div className="container border-b border-[#BEBEBE] pb-5 lg:pb-31 mb-150">

      </div>
    </section>
  );
};

export default Certification;

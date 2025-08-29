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
    <section className="py-124 xl:py-150 overflow-hidden">
      <div className="container">
        <h2 className="text-80 xl:leading-[90px] leading-[60px] mb-[18px] xl:mb-[50px] text-black">
          {heading}
        </h2>
      </div>

      <div className="container md:!overflow-visible">
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
              slidesPerView: 2.2,
              pagination: false,
            },
          }}
        >
          {items.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col xl:border-r-1 xl:border-r-lite-gray">
                <div className="flex lg:items-center gap-[30px]">
                  <div className="w-[67px] h-[67px] flex flex-shrink-0">
                    <Image
                      src={item.icon}
                      alt={item.CertificationName}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-black text-25 2xl:text-33 leading-[36px] xl:leading-[40px]">
                      {item.CertificationID}
                    </p>
                    <p className="text-black text-25 2xl:text-33 leading-[36px] xl:leading-[40px]">
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
    </section>
  );
};

export default Certification;

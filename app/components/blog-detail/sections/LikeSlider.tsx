"use client";

import React from "react";
import { blogList } from "@/app/components/blog-detail/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import SliderViewAllBtn from "@/app/components/common/SliderViewAllBtn";
import Image from "next/image";
import { motion } from "framer-motion";
import { moveRight, moveLeft } from "../../motionVarients";

const LikeSlider = () => {
  return (
    <section className="mt-[30px] md:mt-[50px] xl:mt-[124px]">
      {/* Heading + Mobile Arrows + Desktop Button */}
      <div className="flex justify-between items-center mb-[10px] lg:mb-[45px]">
        <motion.h2
          variants={moveRight()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-80 xl:leading-[90px] leading-[60px] text-black"
        >
          You may also like
        </motion.h2>

        {/* Mobile navigation arrows */}
        <motion.div
          variants={moveLeft()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex md:hidden gap-3"
        >
          <button className="like-prev group cursor-pointer transition-transform duration-300 hover:scale-[1.4] hover:translate-x-1 group">
            <Image
              src="/assets/images/icons/arrow-left.svg"
              alt=""
              width={24}
              height={24}
              className="min-w-[24px] min-h-[24px] brightness-0 invert-0 group-hover:brightness-100   transition-all duration-300 "
            />
          </button>
          <button className="like-next group cursor-pointer transition-transform duration-300 hover:scale-[1.4] hover:translate-x-1 group">
            <Image
              src="/assets/images/icons/arrow-right.svg"
              alt=""
              width={24}
              height={24}
              className="min-w-[24px] min-h-[24px] brightness-0 invert-0 group-hover:brightness-100   transition-all duration-300 "
            />
          </button>
        </motion.div>

        {/* Desktop button */}
        <motion.div
          variants={moveLeft()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <SliderViewAllBtn text="View all Blogs" />
        </motion.div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".like-prev",
          nextEl: ".like-next",
        }}
        slidesPerView={1}
        spaceBetween={30}
        freeMode
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          950: {
            slidesPerView: 2.6,
            spaceBetween: 30,
          },
        }}
        className="w-full"
      >
        {blogList.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div className="flex flex-col cursor-pointer transform transition-all duration-300 hover:-translate-y-[5px] py-[5px]">
              {/* Image wrapper for zoom effect */}
              <div className="overflow-hidden rounded-[16px]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={586}
                  height={348}
                  className="w-full max-w-[586px] h-[300px] md:h-[348px] object-cover rounded-[16px] transform transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>

              {/* Category & Date */}
              <div className="flex justify-between mt-[12px] lg:mt-[15px] text-gray-para text-19 leading-[22px] lg:leading-[32px]">
                <span className="text-primary">{blog.category}</span>
                <span>{blog.date}</span>
              </div>

              {/* Title */}
              <h3 className="mt-[12px] lg:mt-[15px] text-black text-25 leading-[32px] xl:leading-[42px]">
                {blog.title}
              </h3>
            </div>

            {/* Mobile-only button (appears after each content) */}
            <motion.div
              variants={moveRight()}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="md:hidden flex mt-[18px]"
            >
              <SliderViewAllBtn text="View all Blogs" />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LikeSlider;

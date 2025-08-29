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
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

const LikeSlider = () => {
  return (
    <section className="mt-[30px] md:mt-[50px] xl:mt-[124px]">
      {/* Heading + Mobile Arrows + Desktop Button */}
      <div className="flex justify-between items-center mb-[10px] lg:mb-[50px]">
        <h2 className="text-80 xl:leading-[90px] leading-[60px] text-black">
          You may also like
        </h2>

        {/* Mobile navigation arrows */}
        <div className="flex md:hidden">
          <button className="like-prev">
            <IoIosArrowRoundBack size={30} />
          </button>
          <button className="like-next">
            <IoIosArrowRoundForward size={30} />
          </button>
        </div>

        {/* Desktop button */}
        <div className="hidden md:block">
          <SliderViewAllBtn text="View all Blogs" />
        </div>
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
            <div className="flex flex-col">
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full max-w-[586px] h-[300px] md:h-[348px] object-cover rounded-[16px]"
              />

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
            <div className="md:hidden flex mt-[18px]">
              <SliderViewAllBtn text="View all Blogs" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LikeSlider;

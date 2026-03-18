"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import { motion } from "framer-motion";
import Image from "next/image";
import Counter from "./Counter";
import { containerStagger, moveUp } from "../../motionVarients";

type ItemsProps = {
  items: {
    logo: string;
    logoAlt: string;
    number: string | number;
    value: string;
  }[];
};

const ItemsSwiper = ({ items }: ItemsProps) => {
  return (
    <motion.div
      variants={containerStagger}
      initial="hidden"
      whileInView="show"
      transition={{ duration: 0.6 }}
      viewport={{ amount: 0.1, once: true }}
    >

      <Swiper
        modules={[Autoplay, Grid]}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        slidesPerGroup={2}
        slidesPerView={2}
        spaceBetween={30}
        grid={{ rows: 2, fill: "row" }}
        breakpoints={{
          1024: { slidesPerView: 3, slidesPerGroup: 1, grid: { rows: 1 }, spaceBetween: 60 },
          1536: { slidesPerView: 3, slidesPerGroup: 1, grid: { rows: 1 }, spaceBetween: 80 },
        }}
        className="gap-y-8 gap-x-8"
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-between items-center"
          >
            <motion.div
              className="flex  flex-col gap-2 xl:min-w-[300px] items-center  "
              variants={moveUp(0.2)}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
            >
              <Image
                src={item?.logo}
                alt={item?.logoAlt}
                className="md:w-16 md:h-16 w-10 h-10"
                width={50}
                height={50}
              />
              <p className="text-30 md:text-40 lg:text-65 xl:min-w-max font-semibold">
                <Counter from={0} to={Number(item.number)} duration={2} />
                {item.number == 2012 ? "" : <span className="text-primary"> +</span>}

              </p>
              <p className="text-19 lg:text-25">{item.value}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default ItemsSwiper;

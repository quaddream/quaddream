'use client' 
import Image from "next/image";
import { motion } from "motion/react";
import { moveUp } from "../../motionVarients";
import { useState } from "react";
import { Home } from "../type";
const IndustriesList = ({data}: {data: Home['industriesSection']}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <section className="py-150 bg-white">
      <div className="container">
        <motion.h2 className="text-80 leading-[1.125] mb-6 md:mb-8 lg:mb-12" variants={moveUp(0.2)} initial="hidden" whileInView="show" transition={{duration: 0.6}} viewport={{amount: 0.1, once: true}}>Industries We Serve</motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5  xl:gap-[1px] relative">
      <div className="absolute top-[50%] left-0 translate-y-[-50%] h-[0.5px] w-full bg-black z-40 hidden 2xl:block"></div>

      {data.items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <motion.div
            key={index}
            className={`bg-theme-pink overflow-hidden rounded-2xl relative group flex flex-col justify-between cursor-pointer min-h-[210px] xl:min-h-auto`}
            variants={moveUp(index * 0.2)}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.1, once: true }}
            onClick={() => setActiveIndex(isActive ? null : index)}
          >
            {/* Background image */}
            <div
              className={`absolute top-0 left-0 w-full h-full bg-white z-0 transition-all duration-300 ${
                isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Gradient overlay */}
            <div
              className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/40 z-10 transition-all duration-300 ${
                isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            ></div>

            {/* Animated line */}
            <div
              className={`absolute top-[50%] translate-y-[-50%] left-0 h-[3px] bg-white z-40 transition-all duration-300 ${
                isActive ? "opacity-100 w-full" : "opacity-0 w-0 group-hover:opacity-100 group-hover:w-full"
              }`}
            ></div>

            {/* Arrow circle */}
            <div
              className={`absolute top-[50%] translate-y-[-50%] left-0 w-[51px] h-[51px] bg-white rounded-full z-40 flex items-center justify-center transition-all duration-500 ${
                isActive
                  ? "opacity-100 left-[75%]"
                  : "opacity-0 left-0 group-hover:opacity-100 group-hover:left-[75%]"
              }`}
            >
              <Image
                src="/assets/images/bold-arrow.svg"
                alt="Arrow"
                width={30}
                height={30}
                className="w-[24px] h-[24px]"
              />
            </div>

            {/* Icon */}
            <div className="pb-5 2xl:pb-[57.7px] px-30px pt-30px relative z-10">
              <Image
                src={item.logo}
                alt={item.logoAlt}
                width={50}
                height={50}
                className={`transition-all duration-300 ${
                  isActive ? "invert brightness-0" : "group-hover:invert brightness-0"
                }`}
              />
            </div>

            {/* Title */}
            <div className="px-30px 2xl:pt-[33.3px] pb-4 2xl:pb-[28px] relative z-10">
              <h3
                className={`text-25 leading-[1.6] font-light transition-all duration-300 max-w-[15ch] ${
                  isActive ? "text-white" : "group-hover:text-white"
                }`}
              >
                {item.title}
              </h3>
            </div>
          </motion.div>
        );
      })}
    </div>
      </div>
    </section>
  );
}

export default IndustriesList;
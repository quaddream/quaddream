'use client'
import Image from "next/image";
import { motion } from "motion/react";
import { moveUp } from "../motionVarients";
import { useState } from "react";
// Import the correct data type
import { ScaffoldingRentalsDubaiData } from "./types";

// Update Props to use the nested industriesSection type
type Props = {
  data: ScaffoldingRentalsDubaiData['industriesSection'];
};

const IndustriesList = ({ data }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="pt-[150px] bg-white">
      <div className="container">
        <motion.h2
          className="text-4xl lg:text-[80px] leading-[1.125] mb-6 md:mb-8 lg:mb-12"
          variants={moveUp(0.2)}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.1, once: true }}
        >
          {data.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 xl:gap-[1px] relative">
          {/* Decorative horizontal line for large screens */}
          <div className="absolute top-[50%] left-0 translate-y-[-50%] h-[0.5px] w-full bg-black/10 z-0 hidden 2xl:block" />

          {data.items.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                className="bg-[#F5E7E7] overflow-hidden rounded-2xl relative group flex flex-col justify-between cursor-pointer min-h-[210px] xl:min-h-auto border border-gray-100 xl:border-none"
                variants={moveUp(index * 0.1)}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.1, once: true }}
                onClick={() => setActiveIndex(isActive ? null : index)}
              >
                {/* Background image — Visible on hover/active */}
                <div
                  className={`absolute inset-0 z-0 transition-opacity duration-500 ${isActive ? "opacity-100 scale-105" : "opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-105"
                    } transition-transform duration-700`}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                  />
                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
                </div>

                {/* Animated progress line */}
                <div
                  className={`absolute top-[50%] left-0 h-[2px] bg-white z-40 transition-all duration-500 ease-in-out ${isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                />

                {/* Arrow circle */}
                <div
                  className={`absolute top-[50%] -translate-y-1/2 w-[51px] h-[51px] bg-white rounded-full z-40 flex items-center justify-center transition-all duration-500 ease-out ${isActive
                    ? "opacity-100 left-[75%] shadow-xl"
                    : "opacity-0 left-0 group-hover:opacity-100 group-hover:left-[75%]"
                    }`}
                >
                  <Image
                    src="/assets/images/bold-arrow.svg"
                    alt="Arrow"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>

                {/* Logo/Icon */}
                <div className="pb-5 2xl:pb-[57.7px] px-[30px] pt-[30px] relative z-10">
                  <div className={`relative w-[50px] h-[50px] transition-all duration-300 ${isActive || "group-hover:scale-110"}`}>
                    <Image
                      src={item.logo}
                      alt={item.logoAlt}
                      fill
                      className={`object-contain transition-all duration-300 ${isActive
                        ? "invert brightness-0"
                        : "group-hover:invert group-hover:brightness-0"
                        }`}
                    />
                  </div>
                </div>

                {/* Industry Title */}
                <div className="px-[30px] 2xl:pt-[33.3px] pb-6 2xl:pb-[28px] relative z-10">
                  <h3
                    className={`text-2xl leading-[1.3] font-medium transition-colors duration-300 max-w-[15ch] ${isActive ? "text-white" : "text-gray-900 group-hover:text-white"
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
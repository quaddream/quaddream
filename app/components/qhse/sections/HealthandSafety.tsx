"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { moveUp } from "../../motionVarients";

type SafetyItem = {
  icon: string;
  title: string;
  highlight?: boolean;
};

type HealthSafetyProps = {
  safetyData: {
    heading: string;
    subheading: string;
    description: string;
    items: SafetyItem[];
  };
};

const HealthSafety = ({ safetyData }: HealthSafetyProps) => {
  return (
    <section className="bg-black py-124 xl:py-150">
      <div className="container">
        {/* Heading */}
        <motion.div className="flex flex-col">
          <motion.h2
            variants={moveUp(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-80 leading-[1.13] mb-5 md:mb-8 lg:mb-12 text-white"
          >
            {safetyData.heading}
          </motion.h2>

          <motion.p
            variants={moveUp(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-33 leading-[1.21] mb-[15px] xl:mb-[30px] text-white"
          >
            {safetyData.subheading}
          </motion.p>

          <motion.p
            variants={moveUp(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-19 leading-[1.7] text-lite-gray mb-[15px] xl:mb-[30px]"
          >
            {safetyData.description}
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-[15px] xl:gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
          {safetyData.items.map((item, index) => (
            <motion.div
              variants={moveUp(index * 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={index}
              className={`relative group flex flex-col xl:p-[40px] p-[25px] rounded-[16px] bg-[#111111] overflow-hidden`}
            >
              <div className="absolute z-0 inset-0 bg-[linear-gradient(138deg,rgba(17,17,17,1)_22%,rgba(108,0,4,1)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[16px] pointer-events-none"></div>
              <div className="z-10 w-[67px] h-[67px] bg-[#1B1B1B] rounded-[8px] flex items-center justify-center mb-[15px] xl:mb-[30px] group-hover:bg-primary transition-colors duration-200">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={67}
                  height={67}
                  className="group-hover:invert group-hover:brightness-0 transition-all duration-500 w-[67px] h-[67px]"
                />
              </div>
              <p className="z-10 text-19 md:text-25 leading-[1.6] text-white">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthSafety;

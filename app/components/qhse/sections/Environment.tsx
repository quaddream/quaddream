"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { moveUp } from "../../motionVarients";
import { QhseData } from "../type";

type EnvironmentalResponsibilityProps = {
  environmentalData: QhseData["fourthSection"];
};

const EnvironmentalResponsibility: React.FC<
  EnvironmentalResponsibilityProps
> = ({ environmentalData }) => {
  const { mainTitle, subTitle, items, description } = environmentalData;

  return (
    <section className="py-124 xl:py-150 bg-[#F9F9F9]">
      <div className="container">
        <motion.h1
          variants={moveUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-80   leading-[1.14] mb-5 md:mb-8 lg:mb-12 text-black"
        >
          {mainTitle}
        </motion.h1>
        <motion.h2
          variants={moveUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-25 md:text-30 leading-[1.34] mb-[15px] xl:mb-[30px] text-black"
        >
          {subTitle}
        </motion.h2>
        <motion.p
          variants={moveUp(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-19 leading-[1.7] text-gray-para"
        >
          {description}
        </motion.p>

        <motion.div className="mt-3 md:mt-4 lg:mt-0">
          {items?.map((item, index) => (
            <motion.div
              key={index}
              variants={moveUp(index * 0.2)}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center group py-[15px] xl:py-[50px] gap-2 lg:gap-[30px] border-b border-lite-gray hover:border-primary transition-colors duration-500"
            >
              <div className="flex-shrink-0  md:mt-0 w-[42px] h-[42px] flex items-center justify-center">
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={42}
                  height={42}
                  className="w-[25px] h-[25px]  md:w-[42px] md:h-[42px] brightness-0 group-hover:invert-0 group-hover:brightness-100 transition-all duration-300"
                />
              </div>

              <p className="text-19 md:text-25 leading-[1.6] text-black">
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EnvironmentalResponsibility;

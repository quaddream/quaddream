"use client";
import React from "react";
import { motion } from "motion/react";
import { moveUp } from "../motionVarients";
import { ScaffoldingRentalsDubaiData } from "./types";
import Image from "next/image";

type BottomStat = {
  image: string;       // image src
  label: string;
  value: string;   // red text below
};

type ComprehensiveProps = {
  secondSection: ScaffoldingRentalsDubaiData["secondSection"];
  secondTitleMaxWidth?: string | false;
  /** Optional paragraph below the image card */
  bottomDescription: string;
  /** Optional stats/icons bar */
  bottomStats?: BottomStat[];
};

const Comprehensive: React.FC<ComprehensiveProps> = ({
  secondSection,
  secondTitleMaxWidth = "17ch",
  bottomDescription,
  bottomStats,
}) => {
  // const hasSecondSection = !!(secondSection?.title?.trim() || secondSection?.description?.trim() || secondSection?.image?.trim());
  const hasBottomDescription = !!bottomDescription?.trim();
  const hasBottomStats = !!(bottomStats && bottomStats.length > 0);

  // If nothing to render, return null entirely
  // if (!hasSecondSection && !hasBottomDescription && !hasBottomStats) {
  //   return null;
  // }

  return (
    <section className="py-150 rounded-t-[20px] xl:rounded-tl-[40px] xl:rounded-tr-[40px] 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative z-10 bg-white mt-[-4.5%]">
      <h1 className="hidden">Reliable Scaffolding Rentals, Sales & Equipment Support for UAE Projects</h1>
      <div className="container flex flex-col gap-5 lg:gap-12">


        {/* Second section — image card */}
        {
          <motion.div
            variants={moveUp()}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.1, once: true }}
            style={{ backgroundImage: `url(${secondSection.image})` }}
            className="bg-top-center bg-center p-6 pt-32 md:p-8 md:pt-35 lg:p-17 lg:pt-[237px] relative rounded-xl z-10"
          >
            <div className="relative z-10">
              {secondSection?.title?.trim() && (
                <motion.h2
                  variants={moveUp(0.1)}
                  initial="hidden"
                  whileInView="show"
                  transition={{ duration: 0.6 }}
                  viewport={{ amount: 0.1, once: true }}
                  className={`text-white text-80 leading-[1.07] pb-6 md:pb-12 ${secondTitleMaxWidth ? `max-w-[${secondTitleMaxWidth}]` : ""
                    }`}
                >
                  {secondSection.title}
                </motion.h2>
              )}
              {/* {secondSection?.description?.trim() && (
                <motion.p
                  variants={moveUp(0.2)}
                  initial="hidden"
                  whileInView="show"
                  transition={{ duration: 0.6 }}
                  viewport={{ amount: 0.1, once: true }}
                  className="text-lite-gray text-19 leading-[1.684210526315789] mb-0"
                >
                  {secondSection.description}
                </motion.p>
              )} */}
            </div>
            <div className="rounded-xl overflow-hidden">
              <div className="overlayimage rounded-xl"></div>
            </div>
          </motion.div>
        }

        {/* Optional paragraph below the image card */}
        {hasBottomDescription && (
          <motion.p
            variants={moveUp(0.1)}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.1, once: true }}
            className="text-19 text-[#696969] leading-[1.684210526315789] "
            dangerouslySetInnerHTML={{ __html: bottomDescription }}
          >
            {/* {bottomDescription} */}
          </motion.p>
        )}

        {/* Optional stats/icons bar */}
        {hasBottomStats && (
          <motion.div
            variants={moveUp(0.2)}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.1, once: true }}
            className="
      grid 
     
     grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      xl:grid-cols-5
      gap-x-[80px]
      gap-y-8
    "
          >
            {bottomStats.map((stat, index) => (
              <div key={index} className="relative flex flex-col gap-3 py-4 items-start">

                {/* Divider Line */}
                {index !== bottomStats.length - 1 && (
                  <span
                    className="
              hidden xl:block
              absolute right-[-30px] top-1/2 -translate-y-1/2
              w-[1px] h-[60%] bg-[#bcbcbc8c]
            "
                  />
                )}

                <Image
                  src={stat.image}
                  alt={stat.label}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-[42px] object-contain"
                />

                <span className="text-33 text-black">
                  {stat.label}
                </span>

                <span className="text-19 text-[#EC1C24]">
                  {stat.value}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Comprehensive;
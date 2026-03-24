"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { ScaffoldingRentalsDubaiData } from "./types"; // Changed

type Props = {
  data: ScaffoldingRentalsDubaiData["howToRent"]; // Changed
};

const HowToRent: React.FC<Props> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-[150px] bg-[#F9F9F9] relative overflow-hidden ">
      {/* Decorative Image */}
      <div className="absolute bottom-0 left-0 pointer-events-none select-none z-0">
        <Image
          src="/assets/images/scaffoldingSolutions/leftsrdubai.png"
          alt="Quad Dream Decoration"
          width={600}
          height={600}
          className="object-contain opacity-30 lg:opacity-100"
          priority
        />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">

          {/* Left Column */}
          <div className="w-full lg:w-5/12 pt-6">
            <h2 className="text-80 leading-[1.153846153846154] mb-6 text-gray-900 max-w-[14ch]">
              {data.title}
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex-1 relative w-full ">
            {/* Vertical Line */}
            <div className="absolute left-[18px] top-10 bottom-10 w-px bg-gray-200 z-0" />

            <div className="flex flex-col gap-[50px]">
              {data.steps.map((step, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={index}
                    className="relative flex items-start gap-6 cursor-pointer group"
                    onClick={() => setActiveIndex(index)}
                  >
                    {/* Number Indicator */}
                    <div className="relative z-10 shrink-0 ">
                      <motion.span
                        animate={{ backgroundColor: isActive ? "#EC1C24" : "#000" }}
                        className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white transition-colors duration-300"
                      >
                        {index + 1}
                      </motion.span>
                    </div>

                    {/* Accordion Content Wrapper */}
                    <div className="flex-1 ">
                      <motion.div
                        layout
                        initial={false}
                        animate={{
                          backgroundColor: isActive ? "#EC1C24" : "transparent",
                          padding: isActive ? "40px" : "0rem",
                        }}
                        className={`rounded-[16px] transition-all duration-300 border-none outline-none ${!isActive ? "border-b border-gray-100 pb-6" : "shadow-xl"
                          }`}
                      >
                        {/* Title - Always visible, color transitions */}
                        <motion.h3
                          layout="position"
                          className={`font-medium transition-colors duration-300 ${isActive
                              ? "text-white text-33 leading-[1.2]"
                              : "text-25 leading-[1.6] group-hover:text-[#EC1C24]"
                            }`}
                        >
                          {step.title}
                        </motion.h3>

                        {/* Description - Slides out smoothly */}
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              key="content"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                              className="overflow-hidden"
                            >
                              <div className="w-full h-px bg-white/20 my-4" />
                              <p className="text-white text-19 leading-lh-text19">
                                {step.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowToRent;
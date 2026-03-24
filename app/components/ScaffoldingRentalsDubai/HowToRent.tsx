"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ScaffoldingRentalsDubaiData } from "./types";

type Props = {
  data: ScaffoldingRentalsDubaiData["howToRent"];
};

const HowToRent: React.FC<Props> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-[50px] md:py-[100px] lg:py-[150px] bg-[#F9F9F9] relative overflow-hidden">
      {/* Decorative Image */}
      <div className="absolute bottom-0 left-0 pointer-events-none select-none z-0">
        <Image
          src="/assets/images/scaffoldingSolutions/leftsrdubai.png"
          alt="decoration"
          width={600}
          height={600}
          className="object-contain opacity-20 lg:opacity-40"
        />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-start">
          <div className="w-full lg:w-5/12">
            <h2 className="text-80 leading-[1.1] mb-6 text-gray-900 max-w-[14ch]">
              {data.title}
            </h2>
          </div>

          <div className="flex-1 relative w-full">
            {/* Vertical Line */}
            <div className="absolute left-[18px] top-4 bottom-10 w-px bg-gray-200 z-0" />

            {/* 1. This container needs 'layout' to make siblings slide smoothly */}
            <motion.div layout className="flex flex-col gap-[30px]">
              {data.steps.map((step, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={index}
                    layout // 2. Critical: allows the whole row to animate its position
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative flex items-start gap-6 cursor-pointer group"
                    onClick={() => setActiveIndex(index)}
                  >
                    {/* Number Circle */}
                    <div className="relative z-10 shrink-0 mt-2">
                      <motion.div
                        animate={{ backgroundColor: isActive ? "#EC1C24" : "#000" }}
                        className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                      >
                        {index + 1}
                      </motion.div>
                    </div>

                    <div className="flex-1">
                      {/* 3. The Red Box */}
                      <motion.div
                        layout // 4. Handles the padding & size change automatically
                        className={`rounded-[16px] transition-colors duration-500 ${
                          isActive ? "bg-[#EC1C24] p-5 shadow-2xl" : "bg-transparent py-2"
                        }`}
                      >
                        <motion.h3
                          layout="position" // 5. Prevents text warping during expansion
                          className={`font-medium transition-colors duration-200 ${
                            isActive ? "text-white text-33" : "text-25 text-gray-900 group-hover:text-[#EC1C24]"
                          }`}
                        >
                          {step.title}
                        </motion.h3>

                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.7 }}
                            >
                              <div className="w-full h-[1px] bg-white/30 my-5" />
                              <p className="text-white text-19 leading-relaxed max-w-[90%]">
                                {step.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToRent;
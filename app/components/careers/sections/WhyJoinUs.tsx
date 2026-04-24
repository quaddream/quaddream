"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { moveUp } from "@/app/components/motionVarients";
import Image from "next/image";
import { careerType } from "../type";


const WhyJoinUs = ({ data }: {data:careerType['secondSection']}) => {
  const [activeIndex, setActiveIndex] = useState(0);  

  // Build grid: 3 columns, items fill row by row
  const gridItems = [...data.items];
  // Pad to fill last row if needed (for visual consistency)
   

   

  return (
    <section className="bg-black py-124 xl:py-150">
      <div className="container">
        {/* Header */}
      <div className="flex items-center justify-between mb-5 md:mb-8 lg:mb-12">
        
         <motion.h2
                  variants={moveUp()}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="text-80  leading-[1.12] text-white max-w-[20ch]"
                >
                  {data.title}
                </motion.h2>
        
      </div>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="border border-gray-700"
      > 
          <div  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {gridItems.map((item, colIdx) => {
              const globalIdx = colIdx ;
              const isActive = activeIndex === globalIdx;
              const isEmpty = !item.title;

              return (
                <div
                  key={colIdx}
                  onClick={() => !isEmpty && setActiveIndex(globalIdx)}
                  className={`
                    relative p-6 lg:p-8 xl:p-10 border-r border-b border-gray-700 
                    flex flex-col justify-between min-h-[160px] md:min-h-[180px] gap-10 lg:gap-[96px]
                    transition-colors duration-300 cursor-pointer
                    ${isActive ? "bg-primary" : isEmpty ? "bg-transparent" : "bg-transparent hover:bg-gray-900"}
                  `}
                >
                  {!isEmpty && (
                    <>
                      {/* <span className={`${isActive ? "text-white" : "text-red-500"} mb-6 block`}>
                        {item.icon}
                      </span> */}
                      <Image src={item.logo} alt={item.logoAlt} width={42} height={42} className={`${isActive ? "brightness-0 invert" : ""} `} />
                      <h3 className={`text-33   leading-tight whitespace-pre-line  ${isActive ? "text-white" : "text-gray-300"}`}>
                        {item.title}
                      </h3>
                    </>
                  )}
                </div>
              );
            })}
          </div>
       
      </motion.div>
      </div>
    </section>
  );
};

export default WhyJoinUs;

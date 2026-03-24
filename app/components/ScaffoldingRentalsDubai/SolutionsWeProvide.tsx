"use client";
import React, { useState } from "react";
import { containerStagger, paragraphItem, moveUp } from "../motionVarients";
import { motion, AnimatePresence } from "motion/react"; // Added AnimatePresence
import Image from "next/image";
import { ScaffoldingRentalsDubaiData } from "./types";

type Props = {
  // Accessing the correct nested section for this specific component
  data: ScaffoldingRentalsDubaiData["scaffoldingSystems"];
};

const ScaffoldingSystems: React.FC<Props> = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="pb-[150px] bg-white">
      <div className="container">
         <motion.h2
                       variants={paragraphItem}
                       initial="hidden"
                       whileInView="show"
                       transition={{ duration: 0.6 }}
                       viewport={{ amount: 0.1, once: true }} className="text-80 font-400 leading-[1.125] mb-10 text-black">
          {data.title}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.items.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden cursor-pointer h-[350px] lg:h-[500px] group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background Image — zoom on hover */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className={`object-cover transition-transform duration-700 ease-out ${isHovered ? "scale-110" : "scale-100"
                      }`}
                  />
                </div>

                {/* Red overlay — fades in on hover */}
                <motion.div
                  className="absolute inset-0 bg-[#D0021B]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 0.95 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />

                {/* Dark gradient — fades out on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isHovered ? 0 : 1 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />

                {/* Content container */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                  <motion.div
                    layout
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    {/* Title */}
                    <p className="text-2xl lg:text-[33px] font-medium leading-[1.2] text-white">
                      {item.title}
                    </p>

                    {/* Expandable content on hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, delay: 0.05 }}
                        >
                          <div className="w-full h-px bg-white/30 my-4" />

                          {/* Optional description paragraph */}
                          {item.description && (
                            <p className="text-white/90 text-[17px] lg:text-[19px] leading-relaxed mb-4">
                              {item.description}
                            </p>
                          )}

                          {item.points && item.points.length > 0 && (
                            <ul className="flex flex-col gap-3">
                              {item.points.map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                                  <span className="text-white/90 text-[17px] lg:text-[19px] leading-tight">
                                    {point}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}
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
    </section>
  );
};

export default ScaffoldingSystems;
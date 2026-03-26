"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { paragraphItem } from "../motionVarients";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ScaffoldingRentalsDubaiData } from "./types";

type Props = {
  data: ScaffoldingRentalsDubaiData["scaffoldingSystems"];
};

const ScaffoldingSystems: React.FC<Props> = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sanitizeHtml = (html: string) => html.replace(/&nbsp;/g, " ");
const pathname = usePathname();

const aluminumPath =
  "/products-and-services/aluminum-mobile-scaffolding-tower-rental";

const cuplockPath =
  "/products-and-services/cuplock-scaffolding-rental-dubai";

const aluminumContent = `Each aluminum mobile tower rental includes the essential components required for safe assembly and stable working platforms on site. These components support secure tower positioning, safe platform access, and structural stability during construction, installation, and maintenance work.`;

const cuplockContent = `Quad Dream maintains a complete inventory of cuplock scaffolding components used to assemble temporary access and support structures, supporting contractors looking for a cuplock scaffolding supplier in the UAE. Components are available as complete system packages or as individual parts to supplement existing scaffold installations on project sites.`;
  return (
    <section className="pb-150 bg-white">
      <div className="container">
        <motion.h2
          variants={paragraphItem}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.1, once: true }}
          className="text-80 font-400 leading-[1.125] mb-[30px] xl:mb-[50px] text-black"
        >
          {data.title}
        </motion.h2>
{(pathname === aluminumPath || pathname === cuplockPath) && (
  <p className="text-19 text-[#696969] mb-[30px] xl:mb-[50px]">
    {pathname === aluminumPath ? aluminumContent : cuplockContent}
  </p>
)}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.items.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden cursor-pointer h-[350px] lg:h-[500px]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background image — zoom on hover */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    style={{
                      objectFit: "cover",
                      transform: isHovered ? "scale(1.08)" : "scale(1)",
                      transition: "transform 0.7s cubic-bezier(0.23,1,0.32,1)",
                      willChange: "transform",
                    }}
                  />
                </div>

                {/* Dark gradient — fades out on hover */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
                    opacity: isHovered ? 0 : 1,
                    transition: "opacity 0.4s ease",
                  }}
                />

                {/* Red overlay — fades in on hover */}
                <div
                  className="absolute inset-0 bg-[#D0021B]"
                  style={{
                    opacity: isHovered ? 0.95 : 0,
                    transition: "opacity 0.4s ease",
                  }}
                />

                {/* Content — NO layout, NO AnimatePresence */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                  <h3 className="text-2xl lg:text-[33px] font-medium leading-[1.2] text-white m-0">
                    {item.title}
                  </h3>

                  {/* Divider draws in via scaleX */}
                  <div
                    style={{
                      height: "1px",
                      background: "rgba(255,255,255,0.3)",
                      margin: "14px 0",
                      transformOrigin: "left",
                      transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                      opacity: isHovered ? 1 : 0,
                      transition: "transform 0.35s ease 0.05s, opacity 0.3s ease 0.05s",
                    }}
                  />

                  {/* Description */}
                  {item.description && (
                    <div className=" indi-service-second-section">
                      <div
                        className="text-white/90 text-[17px] lg:text-[19px] leading-relaxed m-0"
                        style={{
                          opacity: isHovered ? 1 : 0,
                          transform: isHovered
                            ? "translateY(0px)"
                            : "translateY(20px)",
                          maxHeight: isHovered ? "500px" : "0px",
                          transition:
                            "transform 0.4s cubic-bezier(0.23,1,0.32,1), opacity 0.3s ease, max-height 0.4s ease",
                          overflow: "hidden",
                        }}

                        dangerouslySetInnerHTML={{ __html: sanitizeHtml(item.description) }}
                      >
                        {/* {item.description} */}
                      </div>
                    </div>
                  )}

                  {/* Points list */}
                  {/* {item.points && item.points.length > 0 && (
                    <ul
                      className="flex flex-col gap-3 list-none m-0 p-0"
                      style={{
                        maxHeight: isHovered ? "300px" : "0px",
                        opacity: isHovered ? 1 : 0,
                        overflow: "hidden",
                        marginTop: isHovered ? "12px" : "0",
                        transition: "max-height 0.4s cubic-bezier(0.23,1,0.32,1) 0.1s, opacity 0.35s ease 0.1s, margin-top 0.3s ease",
                      }}
                    >
                      {item.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                          <span className="text-white/90 text-[17px] lg:text-[19px] leading-tight">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )} */}
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
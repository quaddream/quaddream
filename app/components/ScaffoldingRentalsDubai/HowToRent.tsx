"use client";
import React, { useState } from "react";
import Image from "next/image";
import { NewDesignType } from "./types";

type Props = {
  data: NewDesignType['thirdSection'];
};

const HowToRent: React.FC<Props> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

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

          {/* Left Side */}
          <div className="w-full lg:w-5/12">
            <h2 className="text-80 leading-[1.1] mb-6 text-gray-900 max-w-[14ch]">
              {data.title}
            </h2>
          </div>

          {/* Right Side */}
          <div className="flex-1 relative w-full">

            {/* Vertical Line */}
            <div className="absolute left-[18px] top-0 h-full w-px bg-gray-200 z-0" />

            <div className="flex flex-col  relative">
              {data.items.map((step, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={index}
                    type="button"
                    className={`relative flex gap-6 cursor-pointer group w-full text-left pb-[30px] ${isActive ? "items-start" : "items-center"
                      }`}
                    onClick={() => setActiveIndex(index)}
                  >

                    {/* Number Circle */}
                    <div className="relative z-10 shrink-0 ">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white transition-colors duration-300 ${isActive ? "bg-[#EC1C24]" : "bg-black"
                          }`}
                      >
                        {index + 1}
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className={`flex-1 rounded-[16px]   transition-all duration-300 ${isActive ? "bg-[#EC1C24] p-[20px]" : "bg-transparent py-[10px]"
                        }`}
                    >

                      {/* Title */}
                      <h3
                        className={`font-medium transition-all duration-200 ${isActive
                          ? "text-white text-33"
                          : "text-25 text-gray-900 group-hover:text-[#EC1C24]"
                          }`}
                      >
                        {step.title}
                      </h3>

                      {/* Description — rendered inside the card when active */}
                      {isActive && (
                        <>
                          <div className="w-full h-[1px] bg-white/30 my-5" />
                          <p className="text-white text-19 leading-relaxed">
                            {step.description}
                          </p>
                        </>
                      )}

                    </div>

                  </button>
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
"use client"
import Image from "next/image";
import { homeData } from "../data";
import { useState } from "react";
const WhyChoose = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="py-150 overflow-hidden">
      <div className="container">
        <h2 className="text-80 leading-[1.125] mb-10 2xl:mb-50px text-white">Why Choose Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 2xl:gap-22">

          <div className="flex flex-col gap-5">
            {homeData.whyChoose.items.map((item, index) => {
               const isActive = activeIndex === index;
               return(
              <div key={index} >
                   <button onClick={() => setActiveIndex(index)} className={`flex items-center gap-3 cursor-pointer overflow-hidden rounded-xl w-full pt-[15px] pb-[14px] px-[16.75px] text-left transition-all duration-500 ${isActive
                     ? "bg-gradient-to-r from-[#111111] from-0% to-[#6C0004] to-100%"
                       : "bg-[#111111]"
                     }`}>
                  <div className="bg-[#1b1b1b] rounded-md w-[96px] h-[96px] flex items-center justify-center">
                    <Image src={item.icon} alt={item.title} width={50} height={50} className=" group-hover:invert group-hover:brightness-0 transition-all duration-300" />
                  </div>
                  <div>
                    <h3 className="text-25 leading-[1.6] text-white font-light group-hover:text-white transition-all duration-300">{item.title}</h3>
                    <p className="text-19 leading-[1.684210526315789] text-[#D5D5D5]">{item.description}</p>
                  </div>
                </button>
              </div>
            )})}
          </div>

          <div
            key={activeIndex}
            className="rounded-2xl overflow-hidden flex flex-col h-full relative transition-all duration-700"
          >
            <Image
              src={homeData.whyChoose.items[activeIndex].image}
              alt={homeData.whyChoose.title}
              width={1500}
              height={1500}
              className="h-full w-full object-cover absolute top-0 left-0 transition-opacity duration-700 opacity-100"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
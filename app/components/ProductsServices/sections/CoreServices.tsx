"use client";
import React from "react"; 
import { useState } from "react";
type items = {
  title: string;
  image: string;
};
type datapop = {
  heading: string;
  items: items[];
};
type MissionProps = {
  Data: datapop[];
};

const CoreServices: React.FC<MissionProps> = ({ Data }) => {
    
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <section className="pb-150 rounded-t-2xl 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative  ">
      <div className="container ">
        <div>
          <h2 className="text-80 leading-[1.125] mb-12  ">{Data[0].heading}</h2>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 ">

{Data[0].items.map((item, index) => (
  <div
    key={index}
    className={`group ${activeIndex === index ? "active" : ""}`} 
    onMouseEnter={() => setActiveIndex(activeIndex === index ? null : index)}
    onMouseLeave={() => setActiveIndex(null)} 
  >
    <div
      className="h-[300px] xl:h-[408px] relative rounded-2xl bg-no-repeat bg-cover p-5 lg:p-10"
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <div className="flex flex-col justify-between gap-5 h-full relative z-20">
        <div className={`transition-all duration-500 group-hover:translate-y-0 w-[66px] h-[66px] group-hover:opacity-100 rounded-2xl bg-white flex items-center justify-center ml-auto
          ${activeIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
          >
            <path
              d="M21.5 1.5L1 22"
              stroke="#EC1C24"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 18.6057V1H4.39428"
              stroke="#EC1C24"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h3 className={`text-25 md:text-33 leading-[1.2] group-hover:translate-x-1 font-light text-white transition-all duration-500 transform
          ${activeIndex === index ? "translate-x-1" : ""}`}>
          {item.title}
        </h3>
      </div>
      <div className="absolute transition-all duration-300 top-0 left-0 w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000000_100%)] rounded-2xl z-10"></div>
      <div className={`absolute transition-all duration-500 top-0 left-0 w-full h-full bg-primary rounded-2xl z-10 group-hover:opacity-100
        ${activeIndex === index ? "opacity-100" : "opacity-0"}`}></div>
    </div>
  </div>
))}

 

        </div>
      </div>
    </section>
  );
};

export default CoreServices;

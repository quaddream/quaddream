"use client";
import React, { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "motion/react";
import { containerStagger, paragraphItem } from "../../motionVarients";
import { gsap } from "gsap";
type ServicesItem = {
  title: string;
  description: string;
  items: {
    location: string;
    contact: string[];
  }[];
};

type BannerProps = {
  Data: ServicesItem[];
  titlewidth?: number;
};
const GetInTouch: React.FC<BannerProps> = ({ Data }) => {
  const textRef = useRef<HTMLHeadingElement | null>(null);

  // Animate heading words from grey to black
  useEffect(() => {
    if (!textRef.current) return;

    const originalText = textRef.current.textContent || "";

    // Split into words and wrap each in a span
    textRef.current.innerHTML = originalText
      .split(" ")
      .map(
        (word) =>
          `<span class="inline-block" style="color:#BEBEBE">${word}&nbsp;</span>`
      )
      .join("");

    const words = textRef.current.querySelectorAll<HTMLSpanElement>("span");

    gsap.fromTo(
      words,
      { color: "#BEBEBE" },
      {
        color: "#000000",
        stagger: 0.2,
        ease: "none", // smoother for scrub
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "top 30%",
          scrub: true, // progress ties to scroll
          markers: false,
        },
      }
    );
  }, []);
  return (
    <section className="py-150 rounded-t-2xl 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative z-10  bg-white mt-[-4.5%] ">
      <div className="container flex flex-col gap-12">
        <div className=" w-full gap-y-4">
          <motion.div
            className="flex flex-col"
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.1, once: true }}
          >
            <motion.h2
              ref={textRef}
              variants={paragraphItem}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
              className="text-80 leading-[1.153846153846154] mb-50px"
            >
              {Data[0].title}
            </motion.h2>
            <motion.p
              variants={paragraphItem}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
              className="text-19 text-[#7f7f7f] leading-[1.684210526315789] mb-0 max-w-[107ch]"
            >
              {Data[0].description}
            </motion.p>
          </motion.div>
        </div>
        <div>
          <div className="flex gap-8 border-b border-[#BEBEBE]">
          {Data[0].items.map((item, index) => (
            <div key={index} className="group flex items-center gap-10 sm:gap-20 border-b-3 border-transparent  group hover:border-primary relative top-[1.5px] transition-all duration-300">  
                  <h3 className="relative text-20 md:text-25 leading-[1.6] pb-5 font-light  text-[#696969] hover:text-black transition-all duration-300 max-w-[15ch]">
                    {item.location}
                  </h3>   
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

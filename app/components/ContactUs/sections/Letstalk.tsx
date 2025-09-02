"use client";
import React, { useEffect, useRef, useState ,Fragment} from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; 
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Listbox, Transition } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";
import { containerStagger, paragraphItem } from "../../motionVarients";
import { gsap } from "gsap"; 
type ServicesItem = {
  title: string;
  description: string; 
   
};

type BannerProps = {
  Data: ServicesItem[];
  titlewidth?: number;
};
const sector = [
  { id: 1, name: "Service Looking For " },
  { id: 2, name: "Project Type1" },
  { id: 3, name: "Project Type2" },
];
const Letstalk: React.FC<BannerProps> = ({ Data }) => {
  
    const [sectorselected, setsectorSelected] = useState(sector[0]);
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
    <section className="pb-150 rounded-t-2xl 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative z-10   ">
      <div className="container flex flex-col gap-12">
       
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5  border-b border-[#BEBEBE] pb-12 lg:pb-31" > 
          <div>
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
              className="text-80 leading-[1.153846153846154] mb-5 mb:mb-10 text-black"
            >
              {Data[0].title}
            </motion.h2>
            <motion.p
              variants={paragraphItem}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
              className="text-19 text-gray-para leading-[1.684210526315789] mb-0 max-w-[107ch]"
            >
              {Data[0].description}
            </motion.p>
          </motion.div>
        </div>
          </div>
          <div>
          <div className="mb-7 md:mb-7" >
            <div className="flex w-full items-center justify-between rounded-full  mb-5 lg:mb-7  bg-[#F9F9F9]  p-5 md:p-7 text-left  border-0  "> 
              <input type="text" placeholder="Enter Your Name *" className="w-full focus:outline-none" /> 
            </div>
            <div className="flex w-full items-center justify-between rounded-full  mb-5 lg:mb-7  bg-[#F9F9F9]  p-5 md:p-7 text-left  border-0  "> 
              <input type="text" placeholder="Enter Your Email *" className="w-full focus:outline-none" /> 
            </div>
            <div className="flex w-full items-center justify-between rounded-full  mb-5 lg:mb-7  bg-[#F9F9F9]  p-5 md:p-7 text-left  border-0  "> 
              <input type="text" placeholder="Enter Your Phone Number *" className="w-full focus:outline-none" /> 
            </div>

                   <div className="mb-5 lg:mb-7">
                   <Listbox value={sectorselected} onChange={setsectorSelected}>
                    <div className="relative">
                        <Listbox.Button className="flex w-full items-center justify-between rounded-full text-gray-para   bg-[#F9F9F9]  p-5 md:p-7 text-left  border-0  ">
                        <span>{sectorselected.name}</span>
                        <ChevronDown size={18} />
                        </Listbox.Button>

                        <Transition
                        as={Fragment}
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        >
                        <Listbox.Options
                            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-xl border border-gray-200  z-10 bg-white  "
                        >
                            {sector.map((option) => (
                            <Listbox.Option
                                key={option.id}
                                value={option}
                                className={({ active }) =>
                                `cursor-pointer px-4 py-2 ${
                                    active ? " text-white" : "text-gray-700"
                                }`
                                }
                            >
                                {({ selected }) => (
                                <div className="flex items-center justify-between">
                                    <span>{option.name}</span>
                                    {selected && <Check size={16} />}
                                </div>
                                )}
                            </Listbox.Option>
                            ))}
                        </Listbox.Options>
                        </Transition>
                    </div>
                    </Listbox>
                   </div>
            <div className="flex w-full items-center justify-between rounded-3xl    bg-[#F9F9F9]  p-5 md:p-7 text-left shadow-sm border-0  "> 
              <textarea placeholder="Message..." className="w-full focus:outline-none h-40"></textarea>
            </div>
                </div>
                <motion.div
                                            variants={paragraphItem}
                                            initial="hidden"
                                            whileInView="show"
                                            transition={{ duration: 0.6 }}
                                            viewport={{ amount: 0.1, once: true }}
                                        >
                                            <Link href="" className='flex items-center gap-2 cursor-pointer text-16 font-normal border-1 border-black py-2 px-4 md:px-5 rounded-[60px] w-fit z-10 group'>
                                                <span>Submit </span>
                                                <span className='bg-primary w-[35px] h-[35px] lg:w-[51.7px] lg:h-[51.7px] flex items-center justify-center rounded-full  group-hover:translate-x-[10px] transition-all duration-300'>
                                                    <Image src="/assets/images/home/arrow-right.svg" alt="Arrow" width={30} height={30} className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]" />
                                                </span>
                                            </Link>
                                        </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Letstalk;

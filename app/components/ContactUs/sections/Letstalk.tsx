"use client";
import React, { useState, Fragment } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { moveUp } from "../../motionVarients";
import { Listbox, Transition } from "@headlessui/react";
import { containerStagger, paragraphItem } from "../../motionVarients";

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
  return (
    <section className="pb-150 rounded-t-2xl 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative z-10   ">
      <div className="container flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5  border-b border-[#BEBEBE] pb-12 lg:pb-31">
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
            <div className="mb-7 md:mb-7">
              <motion.div
                variants={moveUp(0.1)}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.1, once: true }}
                className="flex w-full items-center justify-between rounded-full  mb-5 lg:mb-7  bg-[#F9F9F9]  p-5 md:p-7 text-left  border-0  "
              >
                <input
                  type="text"
                  placeholder="Enter Your Name *"
                  className="w-full focus:outline-none"
                />
              </motion.div>
              <motion.div
                variants={moveUp(0.2)}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.1, once: true }}
                className="flex w-full items-center justify-between rounded-full  mb-5 lg:mb-7  bg-[#F9F9F9]  p-5 md:p-7 text-left  border-0  "
              >
                <input
                  type="text"
                  placeholder="Enter Your Email *"
                  className="w-full focus:outline-none"
                />
              </motion.div>
              <motion.div
                variants={moveUp(0.3)}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.1, once: true }}
                className="flex w-full items-center justify-between rounded-full  mb-5 lg:mb-7  bg-[#F9F9F9]  p-5 md:p-7 text-left  border-0  "
              >
                <input
                  type="text"
                  placeholder="Enter Your Phone Number *"
                  className="w-full focus:outline-none"
                />
              </motion.div>

              <motion.div
                variants={moveUp(0.4)}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.1, once: true }}
                className="mb-5 lg:mb-7"
              >
                <Listbox value={sectorselected} onChange={setsectorSelected}>
                  <div className="relative">
                    <Listbox.Button className="focus:outline-none flex w-full items-center justify-between rounded-full text-gray-para   bg-[#F9F9F9]  p-5 md:p-7 text-left  border-0  ">
                      <span>{sectorselected.name}</span>
                      <Image
                        src="/assets/images/arrow-down.svg"
                        alt="arrow-down"
                        width={24}
                        height={11}
                        className="w-[18px] h-[9px] md:w-[24px] md:h-[11px]"
                      />
                    </Listbox.Button>

                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="focus:outline-none absolute mt-1 max-h-60 w-full overflow-auto rounded-xl border border-gray-200  z-10 bg-white  ">
                        {sector.map((option) => (
                          <Listbox.Option
                            key={option.id}
                            value={option}
                            className={({ active }) =>
                              `cursor-pointer px-4 py-2 ${
                                active
                                  ? "bg-primary text-white"
                                  : "text-gray-700"
                              }`
                            }
                          >
                            <div className="flex items-center justify-between">
                              <span>{option.name}</span>
                            </div>
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </motion.div>
              <motion.div
                variants={moveUp(0.5)}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.1, once: true }}
                className="flex w-full items-center justify-between rounded-3xl    bg-[#F9F9F9]  p-5 md:p-7 text-left shadow-sm border-0  "
              >
                <textarea
                  placeholder="Message..."
                  className="w-full focus:outline-none h-40"
                ></textarea>
              </motion.div>
            </div>
            <motion.div
              variants={paragraphItem}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
            >
              <Link
                href=""
                className="flex items-center gap-2 hover:bg-primary hover:border-primary cursor-pointer text-16 font-normal border-1 border-black py-2 px-4 md:px-5 rounded-[60px] w-fit z-10 group transition-all duration-300"
              >
                <span className="group-hover:text-white transition-all duration-300">
                  Submit{" "}
                </span>
                <span className="bg-primary group-hover:bg-white w-[35px] h-[35px] lg:w-[51.7px] lg:h-[51.7px] flex items-center justify-center rounded-full  group-hover:translate-x-[10px] transition-all duration-300">
                  <Image
                    src="/assets/images/icons/arrow-right.svg"
                    alt="Arrow"
                    width={30}
                    height={30}
                    className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px] brightness-0 invert-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                  />
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

"use client";
import React, { useState } from "react";

import Image from "next/image";
import { motion } from "motion/react";
import {
  containerStagger,
  moveRight,
  moveUp,
  paragraphItem,
} from "../../motionVarients";
import { ContactUs } from "../type";

type BannerProps = {
  Data: ContactUs["firstSection"];
};

const GetInTouch: React.FC<BannerProps> = ({ Data }) => {
  console.log(Data, "data phn");
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-150 rounded-t-[20px] xl:rounded-tl-[40px] xl:rounded-tr-[40px] 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative z-10  bg-white mt-[-4.5%] ">
      <div className="container flex flex-col gap-5 md:gap-8 lg:gap-12">
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
              className="text-80 leading-[1.12] mb-5 md:mb-8 lg:mb-12"
            >
              {Data.title}
            </motion.h2>
            <motion.p
              variants={paragraphItem}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
              className="text-19 text-[#7f7f7f] leading-[1.684210526315789] mb-0 max-w-[107ch]"
            >
              {Data.description}
            </motion.p>
          </motion.div>
        </div>

        <div>
          <motion.div
            className="flex gap-[14px] sm:gap-8 border-b border-[#BEBEBE]"
            variants={moveRight(0.2)}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.1, once: true }}
          >
            {Data.items.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`group flex items-center gap-10 sm:gap-20 border-b-3 
              ${
                activeIndex === index
                  ? "border-primary text-black"
                  : "border-transparent text-gray-para"
              } 
              hover:text-black relative top-[1.5px] transition-colors duration-300 cursor-pointer`}
                variants={moveRight(index * 0.2)}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="relative text-19 md:text-25 leading-[1.6] pb-2 md:pb-5 transition-all duration-300 max-w-[15ch]">
                  {item.title}
                </h3>
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            variants={moveUp()}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.1, once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5 md:mt-8 lg:mt-12"
          >
            <div>
              <motion.div
                key={Data.items[activeIndex].title}
                variants={moveUp(0.1)}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.1, once: true }}
                className="border rounded-2xl mb-5 lg:mb-7 p-7 border-lite-gray hover:border-primary transition-colors duration-300"
              >
                <div className="flex items-center gap-5 border-b border-lite-gray mb-5 pb-5">
                  <div className="w-[45px] lg:w-[86px] h-[45px] lg:h-[86px] flex items-center justify-center bg-white rounded-full border border-[#BEBEBE]">
                    <Image
                      src="/assets/images/contactus/call-calling.svg"
                      alt="call"
                      width={42}
                      height={42}
                      className="w-[25px] h-[25px] lg:w-[42px] lg:h-[42px]"
                    />
                  </div>
                  <div>
                    <p className="text-30 text-black">Call Us</p>
                    <p className="text-19 text-gray-para">
                      Need Help? Give Us a Ring.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 lg:gap-7  flex-wrap">
                  {Data.items[activeIndex].contact.map((item, index) => (
                    <a href={`tel:${item}`} key={index}>
                      <div className="flex items-center gap-3">
                        <Image
                          src="/assets/images/contactus/call.svg"
                          alt="call"
                          width={24}
                          height={24}
                          className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]"
                        />
                        <p className="text-19 text-black">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                key={activeIndex}
                variants={moveUp(0.2)}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.1, once: true }}
                className="border rounded-2xl p-7 border-lite-gray hover:border-primary transition-colors duration-300"
              >
                <div className="flex items-center gap-5 border-b border-lite-gray mb-5 pb-5">
                  <div className="w-[45px] lg:w-[86px] h-[45px] lg:h-[86px] flex items-center justify-center bg-white rounded-full border border-[#BEBEBE]">
                    <Image
                      src="/assets/images/contactus/msg.svg"
                      alt="msg"
                      width={42}
                      height={42}
                      className="w-[25px] h-[25px] lg:w-[42px] lg:h-[42px]"
                    />
                  </div>
                  <div>
                    <p className="text-30 text-black">Email Us</p>
                    <p className="text-19 text-gray-para">
                      We usually reply in 24 hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 lg:gap-7 flex-wrap">
                  {Data.items[activeIndex].mail?.map((email, index) => (
                    <a
                      href={`mailto:${email.value}`}
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <Image
                        src="/assets/images/contactus/msg.svg"
                        alt="email"
                        width={24}
                        height={24}
                        className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]"
                      />
                      <p className="text-19 text-black">{email.value}</p>
                    </a>
                  ))}
                </div>
              </motion.div>

              {Data.items[activeIndex].map.trim() && (
                <a
                  href={Data.items[activeIndex].map}
                  className="flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    variants={moveUp(0.3)}
                    initial="hidden"
                    whileInView="show"
                    transition={{ duration: 0.6 }}
                    viewport={{ amount: 0.1, once: true }}
                    className="flex mt-7 md:mt-7 gap-2 cursor-pointer group w-fit ml-auto lg:ml-0"
                  >
                    <p className="text-19 lg:text-30 mb-0 text-primary border-b border-primary transition-all duration-300 group-hover:pb-1 group-hover:border-b-2">
                      GET DIRECTION
                    </p>
                    <Image
                      src="/assets/images/arrred.svg"
                      alt="direction"
                      width={19}
                      height={19}
                      className="border-b border-primary transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </motion.div>
                </a>
              )}
            </div>

            <div>
              <motion.div
                key={activeIndex}
                variants={moveUp(0.25)}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.1, once: true }}
                className="mb-3 md:mb-7"
              >
                <Image
                  src={Data.items[activeIndex].image}
                  alt={Data.items[activeIndex].imageAlt}
                  className="rounded-2xl"
                  width={721}
                  height={466}
                />
              </motion.div>
              <motion.p
                key={Data.items[activeIndex].address}
                variants={moveUp(0.3)}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.1, once: true }}
                className="text-19 text-gray-para"
              >
                {Data.items[activeIndex].address.trim() &&
                  Data.items[activeIndex].address}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { moveUp, containerStagger } from "../../motionVarients";
import { Home } from "../type";
const Services = ({ data }: { data: Home["servicesSection"] }) => {
  console.log(data)
  const [hover1, setHover1] = useState(false)
const [hover2, setHover2] = useState(false)
const [hover3, setHover3] = useState(false)
const [hover4, setHover4] = useState(false)
const [isTouch, setIsTouch] = useState(false)

useEffect(() => {
  setIsTouch(
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0
  )
}, [])
  return (
    <section className="py-150 overflow-hidden bg-black">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-[auto_706.89px] 2xl:grid-cols-[auto_866.89px] lg:gap-x-5 2xl:gap-[97.23px] text-white gap-y-8 lg:gap-y-5">
          <motion.div
            className="flex flex-col"
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.1, once: true }}
          >
            <motion.h2
              className="text-80 leading-[1.125] mb-5 lg:mb-8 2xl:mb-12 xl:pt-[29px]"
              variants={moveUp(0.2)}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
            >
              {data.mainTitle}
            </motion.h2>
            {/* <motion.h3
              className="text-25 md:text-30 leading-[1.333333333333333] mb-4 xl:mb-[29.7px]"
              variants={moveUp(0.6)}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
            >
              {data.subTitle}
            </motion.h3> */}
            <motion.p
              className="text-19 leading-[1.684210526315789] text-lite-gray"
              variants={moveUp(0.8)}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
            >
              {data.description}
            </motion.p>
            <motion.div variants={moveUp(0.8)}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}>
            <Link
                href="/products-and-services"
                className="flex items-center gap-2 cursor-pointer text-16 font-normal border-1 border-white py-2 px-4 md:px-[23px] rounded-[60px] w-fit z-10 group mt-4 xl:mt-[30px]"
              >
                <span>Our Services</span>
                <span className="bg-primary w-[35px] h-[35px] lg:w-[51.7px] lg:h-[51.7px] flex items-center justify-center rounded-full  group-hover:translate-x-[10px] transition-all duration-300">
                  <Image
                    src="/assets/images/home/arrow-right.svg"
                    alt="Arrow"
                    width={30}
                    height={30}
                    className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]"
                  />
                </span>
              </Link>
              </motion.div>
          </motion.div>
          <div className="flex flex-col w-full gap-3 h-fit">
            <motion.div
              className="grid md:grid-cols-2 xl:grid-cols-5 2xl:grid-rows-[336px_339px] gap-3"
              variants={containerStagger}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
            >

              <motion.div

  onMouseEnter={() => !isTouch && setHover1(true)}
  onMouseLeave={() => !isTouch && setHover1(false)}
  onClick={() => isTouch && setHover1(!hover1)}
                className="relative min-h-[195px] xl:min-h-[280px] 2xl:min-h-auto xl:col-span-2 overflow-hidden rounded-2xl p-4 lg:p-5 2xl:p-8 flex flex-col group "
                variants={moveUp(0.2)}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.1, once: true }}
              >
                <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
                  <Image
                    src={data.items[0].image}
                    alt={data.items[0].imageAlt}
                    width={500}
                    height={300}
                    className="object-cover h-full w-full group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="absolute bottom-0 left-0 h-full  w-full bg-gradient-to-b from-transparent to-black/80 to-100% group-hover:opacity-0 transition-all duration-300 z-20"></div>
                <div className="absolute bottom-0 left-0 h-0 w-full bg-gradient-to-b from-transparent to-black/50 to-100% group-hover:to-primary/75 group-hover:h-full transition-all duration-300 z-20"></div>
                <div className="relative z-20 w-[53px] h-[53px] flex items-center justify-center bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ml-auto">
                  <Image
                    src="/assets/images/arrow-top-right.svg"
                    alt="Arrow"
                    width={30}
                    height={30}
                    className="w-[24px] h-[24px] -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:-translate-y-0 transition-all duration-300"
                  />
                </div>
                <div className="relative z-30 mt-auto"> <Link
                  href="/products-and-services/scaffolding-contracting"
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <h3 className="text-25  2xl:text-33 leading-[1.212121212121212] mb-3 2xl:mb-5">
                    {data.items[0].title}
                  </h3>
                  </Link>
                  <p className={`overflow-hidden transition-all duration-500 ${
    hover1 ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
  }`}>Complete construction scaffolding solutions including design, erection, supervision, and dismantling. </p>
                   
                </div>
              </motion.div>
              <motion.div

  onMouseEnter={() => !isTouch && setHover2(true)}
  onMouseLeave={() => !isTouch && setHover2(false)}
  onClick={() => isTouch && setHover2(!hover1)}
                className="relative min-h-[195px] xl:min-h-[280px] 2xl:min-h-auto xl:col-span-3 overflow-hidden rounded-2xl p-4 lg:p-5 2xl:p-8 flex flex-col group "
                variants={moveUp(0.4)}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.1, once: true }}
              >
                <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
                  <Image
                    src={data.items[1].image}
                    alt={data.items[1].imageAlt}
                    width={500}
                    height={500}
                    className="object-cover h-full w-full group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="absolute bottom-0 left-0 h-full  w-full bg-gradient-to-b from-transparent to-black/80 to-100% group-hover:opacity-0 transition-all duration-300 z-20"></div>
                <div className="absolute bottom-0 left-0 h-0 w-full bg-gradient-to-b from-transparent to-black/50 to-100% group-hover:to-primary/75 group-hover:h-full transition-all duration-300 z-20"></div>
                <div className="relative z-20 w-[53px] h-[53px] flex items-center justify-center bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ml-auto">
                  <Image
                    src="/assets/images/arrow-top-right.svg"
                    alt="Arrow"
                    width={30}
                    height={30}
                    className="w-[24px] h-[24px] -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:-translate-y-0 transition-all duration-300"
                  />
                </div>
                <div className="relative z-30 mt-auto"> <Link
                  href="/products-and-services/cuplock-scaffolding-aluminum-mobile-tower-rental-sales"
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <h3 className="text-25  2xl:text-33 leading-[1.212121212121212] mb-3 2xl:mb-5">
                    {data.items[1].title}
                  </h3>
                </Link>
                
                  <p className={`overflow-hidden transition-all duration-500 ${
    hover2 ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
  }`}>High-performance cuplock systems and lightweight aluminum towers available for rental and purchase. </p>
                  {/* <Link
                    href="/products-and-services/cuplock-scaffolding-aluminum-mobile-tower-rental-sales"
                    className="flex items-center gap-2 group cursor-pointer"
                  >
                    <span>Explore</span>
                    <Image
                      src="/assets/images/bold-arrow-white.svg"
                      alt="Arrow"
                      width={30}
                      height={30}
                      className="w-[24px] h-[24px] group-hover:translate-x-2 transition-all duration-300"
                    />
                  </Link> */}
                </div>
              </motion.div>

              <motion.div

  onMouseEnter={() => !isTouch && setHover3(true)}
  onMouseLeave={() => !isTouch && setHover3(false)}
  onClick={() => isTouch && setHover3(!hover1)}
                className="xl:col-span-3 min-h-[195px] xl:min-h-[280px] 2xl:min-h-auto relative overflow-hidden rounded-2xl p-4 lg:p-5 2xl:p-8 flex flex-col   group  "
                variants={moveUp(0.6)}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.1, once: true }}
              >
                <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
                  <Image
                    src={data.items[2].image}
                    alt={data.items[2].imageAlt}
                    width={500}
                    height={500}
                    className="object-cover h-full w-full group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="absolute bottom-0 left-0 h-full  w-full bg-gradient-to-b from-transparent to-black/80 to-100% group-hover:opacity-0 transition-all duration-300 z-20"></div>
                <div className="absolute bottom-0 left-0 h-0 w-full bg-gradient-to-b from-transparent to-black/50 to-100% group-hover:to-primary/75 group-hover:h-full transition-all duration-300 z-20"></div>
                <div className="relative z-20 w-[53px] h-[53px] flex items-center justify-center bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ml-auto">
                  <Image
                    src="/assets/images/arrow-top-right.svg"
                    alt="Arrow"
                    width={30}
                    height={30}
                    className="w-[24px] h-[24px] -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:-translate-y-0 transition-all duration-300"
                  />
                </div>
                <div className="relative z-30 mt-auto"> <Link
                  href="/products-and-services/scaffolding-formwork-rental"
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <h3 className="text-25  2xl:text-33 leading-[1.212121212121212] mb-3 2xl:mb-5 max-w-[10ch]">
                    {data.items[2].title}
                  </h3>
                </Link>
                  <p className={`overflow-hidden transition-all duration-500 ${
    hover3 ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
  }`}>Quality formwork systems for slabs, beams, and columns. </p>
                  {/* <Link
                    href="/products-and-services/scaffolding-formwork-rental"
                    className="flex items-center gap-2 group cursor-pointer"
                  >
                    <span>Explore</span>
                    <Image
                      src="/assets/images/bold-arrow-white.svg"
                      alt="Arrow"
                      width={30}
                      height={30}
                      className="w-[24px] h-[24px] group-hover:translate-x-2 transition-all duration-300"
                    />
                  </Link> */}
                </div>
              </motion.div>
              <motion.div

  onMouseEnter={() => !isTouch && setHover4(true)}
  onMouseLeave={() => !isTouch && setHover4(false)}
  onClick={() => isTouch && setHover4(!hover1)}
                className="xl:col-span-2 min-h-[195px] xl:min-h-[280px] 2xl:min-h-auto relative overflow-hidden rounded-2xl p-4 lg:p-5 2xl:p-8 flex flex-col group  "
                variants={moveUp(0.8)}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.1, once: true }}
              >
                <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
                  <Image
                    src={data.items[3].image}
                    alt={data.items[3].imageAlt}
                    width={500}
                    height={500}
                    className="object-cover h-full w-full group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="absolute bottom-0 left-0 h-full  w-full bg-gradient-to-b from-transparent to-black/80 to-100% group-hover:opacity-0 transition-all duration-300 z-20"></div>
                <div className="absolute bottom-0 left-0 h-0 w-full bg-gradient-to-b from-transparent to-black/50 to-100% group-hover:to-primary/75 group-hover:h-full transition-all duration-300 z-20"></div>
                <div className="relative z-20 w-[53px] h-[53px] flex items-center justify-center bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ml-auto">
                  <Image
                    src="/assets/images/arrow-top-right.svg"
                    alt="Arrow"
                    width={30}
                    height={30}
                    className="w-[24px] h-[24px] -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:-translate-y-0 transition-all duration-300"
                  />
                </div>
                <div className="relative z-30 mt-auto">
                  <Link
                    href="/products-and-services/equipment-rentals"
                    className="flex items-center gap-2 group cursor-pointer"
                  >
                    <h3 className="text-25  2xl:text-33 leading-[1.212121212121212] mb-3 2xl:mb-5">
                      {data.items[3].title}
                    </h3></Link>
                    <p className={`overflow-hidden transition-all duration-500 ${
    hover4 ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
  }`}>A wide range of heavy construction equipment offered through flexible rental plans to suit both short-term and long-term demands.</p>
                  {/* <Link
                    href="/products-and-services/equipment-rentals"
                    className="flex items-center gap-2 group cursor-pointer"
                  >
                    <span>Explore</span>
                    <Image
                      src="/assets/images/bold-arrow-white.svg"
                      alt="Arrow"
                      width={30}
                      height={30}
                      className="w-[24px] h-[24px] group-hover:translate-x-2 transition-all duration-300"
                    />
                  </Link> */}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

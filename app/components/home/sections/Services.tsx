"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { moveUp, containerStagger } from "../../motionVarients";
import { Home } from "../type";
const Services = ({ data }: { data: Home["servicesSection"] }) => {
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
              className="text-80 leading-[1.125] mb-5 lg:mb-8 2xl:mb-12"
              variants={moveUp(0.2)}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
            >
              {data.mainTitle}
            </motion.h2>
            <motion.h4
              className="text-25 md:text-30 leading-[1.333333333333333] mb-4 xl:mb-[29.7px]"
              variants={moveUp(0.6)}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
            >
              {data.subTitle}
            </motion.h4>
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
                className="relative min-h-[195px] xl:min-h-[280px] 2xl:min-h-auto xl:col-span-2 overflow-hidden rounded-2xl p-4 lg:p-5 2xl:p-8 flex flex-col group cursor-pointer"
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
                <div className="relative z-20 w-[53px] h-[53px] flex items-center justify-center bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Image
                    src="/assets/images/arrow-top-right.svg"
                    alt="Arrow"
                    width={30}
                    height={30}
                    className="w-[24px] h-[24px] -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:-translate-y-0 transition-all duration-300"
                  />
                </div>
                <div className="relative z-30 mt-auto">
                  <h3 className="text-25  2xl:text-33 leading-[1.212121212121212] mb-3 2xl:mb-6">
                    {data.items[0].title}
                  </h3>
                  <Link
                    href="/"
                    className="flex items-center gap-2 group cursor-pointer"
                  >
                    <span>Explore</span>{" "}
                    <Image
                      src="/assets/images/bold-arrow-white.svg"
                      alt="Arrow"
                      width={30}
                      height={30}
                      className="w-[24px] h-[24px] group-hover:translate-x-2 transition-all duration-300"
                    />
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="relative min-h-[195px] xl:min-h-[280px] 2xl:min-h-auto xl:col-span-3 overflow-hidden rounded-2xl p-4 lg:p-5 2xl:p-8 flex flex-col group cursor-pointer"
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
                <div className="relative z-20 w-[53px] h-[53px] flex items-center justify-center bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Image
                    src="/assets/images/arrow-top-right.svg"
                    alt="Arrow"
                    width={30}
                    height={30}
                    className="w-[24px] h-[24px] -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:-translate-y-0 transition-all duration-300"
                  />
                </div>
                <div className="relative z-30 mt-auto">
                  <h3 className="text-25  2xl:text-33 leading-[1.212121212121212] mb-3 2xl:mb-6">
                    {data.items[1].title}
                  </h3>
                  <Link
                    href="/"
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
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="xl:col-span-3 min-h-[195px] xl:min-h-[280px] 2xl:min-h-auto relative overflow-hidden rounded-2xl p-4 lg:p-5 2xl:p-8 flex flex-col   group cursor-pointer"
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
                <div className="relative z-20 w-[53px] h-[53px] flex items-center justify-center bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Image
                    src="/assets/images/arrow-top-right.svg"
                    alt="Arrow"
                    width={30}
                    height={30}
                    className="w-[24px] h-[24px] -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:-translate-y-0 transition-all duration-300"
                  />
                </div>
                <div className="relative z-30 mt-auto">
                  <h3 className="text-25  2xl:text-33 leading-[1.212121212121212] mb-3 2xl:mb-6 max-w-[10ch]">
                    {data.items[2].title}
                  </h3>
                  <Link
                    href="/"
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
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="xl:col-span-2 min-h-[195px] xl:min-h-[280px] 2xl:min-h-auto relative overflow-hidden rounded-2xl p-4 lg:p-5 2xl:p-8 flex flex-col group cursor-pointer"
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
                <div className="relative z-20 w-[53px] h-[53px] flex items-center justify-center bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Image
                    src="/assets/images/arrow-top-right.svg"
                    alt="Arrow"
                    width={30}
                    height={30}
                    className="w-[24px] h-[24px] -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:-translate-y-0 transition-all duration-300"
                  />
                </div>
                <div className="relative z-30 mt-auto">
                  <h3 className="text-25  2xl:text-33 leading-[1.212121212121212] mb-3 2xl:mb-6">
                    {data.items[3].title}
                  </h3>
                  <Link
                    href="/"
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
                  </Link>
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

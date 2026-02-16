"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { moveUp } from "../../motionVarients";
import { Projectsdetails } from "../type";

const Highlights = ({data}: {data: Projectsdetails['fourthSection']}) => {
  return (
    <section className="py-150   relative bg-black  ">
      <div className="container ">
        <div>
          <motion.h2
            variants={moveUp()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-80 leading-[1.125] mb-5 md:mb-8  lg:mb-10 text-white  "
          >
            {data.title}
          </motion.h2>
          <motion.p
            variants={moveUp(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-lite-gray text-19 leading-[1.684210526315789]   max-w-[75ch] mb-8 lg:mb-7"
          >
            {data.description}
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:flex gap-10 lg:gap-5 2xl:gap-12">
          {data.items.map((item, index) => (
            <motion.div
              variants={moveUp(index * 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={index}
              className="group flex items-center gap-10 sm:gap-12"
            >
              <div className="transition-all duration-300">
                <div className="flex  gap-3 sm:gap-7 items-center">
                  <div className="w-[40px] h-[40px] md:min-w-[67px] md:min-h-[67px] md:rounded-2xl rounded-sm bg-primary flex items-center justify-center">
                    <Image
                      src={item.logo}
                      alt={item.logoAlt}
                      width={32}
                      height={32}
                      className="w-[22px] h-[24px] md:w-[32px] md:h-[32px]"
                    />
                  </div>
                  <h3 className="self-end text-19 xl:text-33 leading-[1.3] font-light text-white transition-all duration-300 max-w-[17ch]">
                    {item.title}
                  </h3>
                </div>
              </div>

              {index < data.items.length - 1 && (
                <div className="hidden xl:block border-r border-[#BEBEBE] h-full w-[1px] mr-[20px] lg:mr-[30px] 2xl:mr-[70px]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;

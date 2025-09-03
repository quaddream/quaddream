"use client";
import React from "react";
import { motion } from "motion/react";
import { containerStagger, paragraphItem, moveUp } from "../../motionVarients";

type ServicesItem = {
  title: string;
  bgImg: string;
  description: string;
};

type BannerProps = {
  Data: ServicesItem[];
  titlewidth?: number;
};
const Comprehensive: React.FC<BannerProps> = ({ Data, titlewidth }) => {
  return (
    <section className="py-150 rounded-t-[20px] xl:rounded-tl-[40px] xl:rounded-tr-[40px] 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative z-10  bg-white mt-[-4.5%] ">
      <div className="container flex flex-col gap-5 lg:gap-12">
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
              className="text-80 leading-[1.153846153846154] mb-5 lg:mb-12"
            >
              Comprehensive Scaffolding Solutions Under One Roof
            </motion.h2>
            <motion.p
              variants={paragraphItem}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
              className="text-19 text-[#7f7f7f] leading-[1.684210526315789] mb-0 max-w-[107ch]"
            >
              From contracting and rentals to mobile towers and equipment — Quad
              Dream delivers safe, certified scaffolding services tailored to
              your project.
            </motion.p>
          </motion.div>
        </div>
        <motion.div
          variants={moveUp()}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.1, once: true }}
          style={{ backgroundImage: `url(${Data[0].bgImg})` }}
          className="bg-top-center bg-center p-6 pt-32 md:p-8 md:pt-35 lg:p-17  lg:pt-[237px] relative rounded-xl z-10"
        >
          <div className="relative z-10  ">
            <motion.h2
              variants={moveUp(0.1)}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
              className={`text-white text-80 leading-[1.07] pb-6 md:pb-12 `}
              style={{ maxWidth: titlewidth ? `${titlewidth}ch` : "none" }}
            >
              {Data[0].title}
            </motion.h2>
            <motion.p
              variants={moveUp(0.2)}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
              className="text-lite-gray text-19 leading-[1.684210526315789] mb-0"
            >
              {Data[0].description}
            </motion.p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <div className="overlayimage rounded-xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comprehensive;

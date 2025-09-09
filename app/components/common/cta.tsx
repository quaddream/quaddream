'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { moveUp } from "../motionVarients";
import { Home } from "../home/type";

 
 
  
  export default function CTA( data: Home['seventhSection'] ) {
  return (
    <section
      className="relative  flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${data.image})`, // replace with your actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(0deg, rgb(0 0 0 / 77%) 0%, rgb(0 0 0 / 72%) 100%)",

        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 px-4 py-150">
        <motion.h2 className={`text-80 font-400 leading-[1.125] ${data.maxwidth? `max-w-[${data.maxwidth}ch] m-auto` : ''}`}  variants={moveUp(0.2)} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ amount: 0.1, once: true }}>
          {data.mainTitle}
        </motion.h2>
        <motion.p className="my-5 md:my-[39px] text-19 text-lite-gray leading-[1.7]" variants={moveUp(0.4)} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ amount: 0.1, once: true }}>
          {data.subTitle}
        </motion.p>

        {/* Button */}
        <motion.div className="md:mt-8 flex justify-center" variants={moveUp(0.6)} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ amount: 0.1, once: true }}>
          <Link href='#' className='flex items-center gap-2 cursor-pointer text-16 font-normal border-2 border-white py-[5px] md:py-[8px] px-2 md:px-5 rounded-[60px] w-fit z-10 group hover:border-primary hover:bg-primary hover:text-white transition-all duration-300'>
            <span>{data.buttonText}</span>
            <span className='bg-primary w-8 h-8  md:w-[51.7px] md:h-[51.7px] flex items-center justify-center rounded-full group-hover:translate-x-[10px] group-hover:bg-white group-hover:text-primary transition-all duration-300 '>
              <Image src="/assets/images/icons/arrow-right.svg" alt="Arrow" width={30} height={30} className='w-4 h-4 md:w-[24px] md:h-[24px] brightness-0 invert-100 group-hover:brightness-100 group-hover:invert-0' />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { moveUp } from "../motionVarients";

type CTAProps = {
  maxwidth?:number;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  bgImg?: string;
};

export default function CTA({ title, description, buttonLink, buttonText, bgImg ,maxwidth}: CTAProps) {
  return (
    <section
      className="relative  flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${bgImg})`, // replace with your actual image path
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
        <motion.h2 className={`text-80 font-400 leading-[1.125] ${maxwidth? `max-w-[${maxwidth}ch] m-auto` : ''}`}  variants={moveUp(0.2)} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ amount: 0.1, once: true }}>
          {title}
        </motion.h2>
        <motion.p className="my-[39px] text-19 text-lite-gray leading-[1.7]" variants={moveUp(0.4)} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ amount: 0.1, once: true }}>
          {description}
        </motion.p>

        {/* Button */}
        <motion.div className="mt-8 flex justify-center" variants={moveUp(0.6)} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ amount: 0.1, once: true }}>
          <Link href={buttonLink} className='flex items-center gap-2 cursor-pointer text-16 font-normal border-2 border-white py-[5px] md:py-[10px] px-[20px] rounded-[60px] w-fit z-10 group'>
            <span>{buttonText}</span>
            <span className='bg-primary w-[51.7px] h-[51.7px] flex items-center justify-center rounded-full group-hover:translate-x-[10px] transition-all duration-300'>
              <Image src="/assets/images/home/arrow-right.svg" alt="Arrow" width={30} height={30} className='w-[24px] h-[24px]' />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

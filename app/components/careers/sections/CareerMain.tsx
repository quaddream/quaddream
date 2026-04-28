"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { 
  paragraphItem, 
} from "../../motionVarients";
import Link from "next/link";
import { moveUp } from "@/app/components/motionVarients";
import { motion } from "framer-motion";
import { careerType } from "../type";

interface QHSECommitmentProps {
  data: careerType['firstSection'];
}

// Custom hook to copy margin-right from one element to another
const useCopyMarginRight = () => {
  const sourceRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sourceRef.current && targetRef.current) {
      const computedStyle = window.getComputedStyle(sourceRef.current);
      const marginRightValue = computedStyle.marginRight;
      targetRef.current.style.marginRight = marginRightValue;
    }
  }, []);

  return { sourceRef, targetRef };
};
const QHSECommitment: React.FC<QHSECommitmentProps> = ({ data }) => {
    const { sourceRef, targetRef } = useCopyMarginRight();
  return (
    <section className="relative z-10 bg-background py-124 xl:py-150 rounded-t-[20px] xl:rounded-tl-[40px] xl:rounded-tr-[40px] 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] mt-[-4.5%] overflow-hidden">
      <div className="container" ref={sourceRef}>
        {/* Heading */}
        <motion.h2
          variants={moveUp()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-80  leading-[1.12] mb-5 md:mb-8 lg:mb-12 text-black max-w-[20ch]"
        >
          {data.title}
        </motion.h2>
{data.description
          .split("\n")
          .filter(Boolean)
          .map((para, idx) => (
            <motion.p
              variants={moveUp(idx * 0.25)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={idx}
              className="text-gray-para text-19 leading-[1.68] mb-5 md:mb-8 lg:mb-12 qhse-firstSection-para max-w-[75ch]"
            >
              <span dangerouslySetInnerHTML={{ __html: para }}></span>
            </motion.p>
          ))}
        <motion.div
              variants={paragraphItem}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
            >
              <Link
                href="/careers/careers-details"
                className="flex items-center gap-2 cursor-pointer text-16 font-normal border-1 border-black py-2 px-4 md:px-5 rounded-[60px] w-fit z-10 group"
              >
                <span>{data.buttonText}</span>
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
      </div>
      <div className="absolute w-fit -right-8 bottom-0 z-0" ref={targetRef} >
        <Image src="/assets/images/careers/careebgimg.png" alt="Banner" width={738} height={647} className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default QHSECommitment;

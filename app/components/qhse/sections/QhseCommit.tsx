"use client";

import Image from "next/image";
import React from "react";
import QualityAssurance from "./QualityAssurance";
import { qa } from "../data";
import { moveUp } from "@/app/components/motionVarients";
import { motion } from "framer-motion";

type QHSEData = {
  heading: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
};

interface QHSECommitmentProps {
  qhseData: QHSEData;
}

const QHSECommitment: React.FC<QHSECommitmentProps> = ({ qhseData }) => {
  return (
    <section className="relative z-10 bg-background py-124 xl:py-150 rounded-t-2xl 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] mt-[-4.5%] overflow-hidden">
      <div className="container">
        {/* Heading */}
        <motion.h1
          variants={moveUp()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-80  leading-[1.12] mb-5 md:mb-8 lg:mb-12 text-black"
        >
          {qhseData.heading}
        </motion.h1>

        {/* Paragraphs */}
        {qhseData.paragraphs.map((para, idx) => (
          <motion.p
            variants={moveUp(idx * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            key={idx}
            className="text-gray-para text-19 leading-[1.68] mb-4 xl:mb-10"
          >
            {para}
          </motion.p>
        ))}

        {/* Image */}
        <motion.div
          variants={moveUp()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative w-full rounded-[16px] overflow-hidden"
        >
          <Image
            src={qhseData.imageSrc}
            alt={qhseData.imageAlt}
            width={1245}
            height={601}
            className="max-h-[601px] w-full object-cover"
          />
        </motion.div>
      </div>

      <QualityAssurance qaData={qa} />  
    </section>
  );
};

export default QHSECommitment;

"use client";

import Image from "next/image";
import React from "react";
import QualityAssurance from "./QualityAssurance";
import { moveUp } from "@/app/components/motionVarients";
import { motion } from "framer-motion";
import { QhseData } from "../type";

interface QHSECommitmentProps {
  qhseData: QhseData;
}

const QHSECommitment: React.FC<QHSECommitmentProps> = ({ qhseData }) => {
  return (
    <section className="relative z-10 bg-background py-124 xl:py-150 rounded-t-[20px] xl:rounded-tl-[40px] xl:rounded-tr-[40px] 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] mt-[-4.5%] overflow-hidden">
      <div className="container">
        {/* Heading */}
        <motion.h2
          variants={moveUp()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-80  leading-[1.12] mb-5 md:mb-8 lg:mb-12 text-black"
        >
          {qhseData.firstSection.title}
        </motion.h2>

        {/* Paragraphs */}
        {qhseData.firstSection.description
          .split("\n")
          .filter(Boolean)
          .map((para, idx) => (
            <motion.p
              variants={moveUp(idx * 0.25)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={idx}
              className="text-gray-para text-19 leading-[1.68] mb-4 xl:mb-10 qhse-firstSection-para"
            >
              <span dangerouslySetInnerHTML={{ __html: para }}></span>
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
            src={qhseData.firstSection.image}
            alt={qhseData.firstSection.imageAlt}
            width={1245}
            height={601}
            className="max-h-[601px] w-full object-cover"
          />
        </motion.div>
      </div>

      <QualityAssurance qaData={qhseData.secondSection} />
    </section>
  );
};

export default QHSECommitment;

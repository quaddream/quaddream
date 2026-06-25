"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { moveUp } from "../../motionVarients";
import { FaqData } from "../data";

interface FaqListProps {
  faqData: FaqData;
  bg?: string;
  pt?: string;
  pb?: string;
  className?: string;
}

const FaqList = ({
  faqData,
  bg = "bg-background",
  pt = "",
  pb = "pb-150",
  className = "",
}: FaqListProps) => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const handleToggle = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <section
      className={`relative z-10 overflow-hidden ${bg} ${pt} ${pb} ${className}`}
    >
      <div className="container">
        <motion.h2
          variants={moveUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-80 leading-[1.12] mb-6 md:mb-8 lg:mb-12 text-black"
        >
          {faqData.heading}
        </motion.h2>

        <motion.div
          variants={moveUp()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4 lg:space-y-[50px]"
        >
          {faqData.items?.map((item, index) => (
            <motion.div
              key={index}
              variants={moveUp(index * 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="border-b border-lite-gray pb-3 lg:pb-12 cursor-pointer"
              onClick={() => {
                if (item.answer) handleToggle(item.question);
              }}
            >
              <div className="flex justify-between lg:items-center gap-[15px] items-center">
                <h3 className="lg:text-30 text-19 leading-[1.35] text-black">
                  {item.question}
                </h3>
                {item.answer && (
                  <span className="flex items-start lg:items-center flex-shrink-0">
                    {openQuestion === item.question ? (
                      <Image
                        src="/assets/images/faqUp.svg"
                        alt="faqUp"
                        width={20}
                        height={8}
                        className="md:w-[24px] md:h-[11px]"
                      />
                    ) : (
                      <Image
                        src="/assets/images/faqDown.svg"
                        alt="faqDown"
                        width={20}
                        height={8}
                        className="md:w-[24px] md:h-[11px]"
                      />
                    )}
                  </span>
                )}
              </div>

              {openQuestion === item.question && (
                <p
                  className="text-19 leading-[1.7] text-gray-para pt-[10px] xl:pt-[20px] pr-[20px] lg:pr-[100px] [&_a]:!text-primary [&_a]:underline"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FaqList;
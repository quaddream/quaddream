"use client";

import React, { useState } from "react"; 
import Image from "next/image"; 
import { motion } from "framer-motion";
import { moveUp } from "../../motionVarients";
import { FaqData } from "../type";

const FaqList = ({ faqData }: { faqData: FaqData }) => {
  const heading = faqData.heading; 
  const categories = faqData.categories.map((f) => ({
  category: f.category,  // string
  items: f.items,
}));
const allItems = categories.flatMap((cat) => cat.items); 
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
 
 
 

  const handleToggle = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <section className="relative z-10 bg-background py-150 overflow-hidden">
      <div className="container">
        {/* Heading */}
        <motion.h2
          variants={moveUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-80  leading-[1.12] mb-6 md:mb-8 lg:mb-12 text-black"
        >
          {heading}
        </motion.h2>
         
        {/* Tabs */}
         
 

        {/* FAQ Items */}
        <motion.div
          variants={moveUp()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4 lg:space-y-[50px] "
        >
          {allItems?.map((item, index) => (
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
              {/* Question Text */}
              <div className="flex justify-between lg:items-center gap-[15px] items-center">
                <h3 className="lg:text-30 text-19  leading-[1.35] text-black">
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

              {/* Answer */}
              {openQuestion === item.question && (
                <p className="text-19 leading-[1.7] text-gray-para pt-[10px] xl:pt-[20px] pr-[20px] lg:pr-[100px]">
                  {item.answer}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

       
      </div>
    </section>
  );
};

export default FaqList;

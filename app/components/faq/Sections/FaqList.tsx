"use client";

import React, { useState } from "react";
import Pagination from "@/app/components/common/Pagination";
import Image from "next/image";
import Select from "react-select";
import { motion } from "framer-motion";
import { moveUp, moveRight } from "../../motionVarients";
import { FaqData } from "../type";

const FaqList = ({ faqData }: { faqData: FaqData }) => {
  const heading = faqData.firstSection.title;
  const description = faqData.firstSection.description;
  const categories = faqData.faq.map((f) => ({
    category: f.title,
    items: f.items,
  }));

  const [activeTab, setActiveTab] = useState(categories[0].category);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const currentCategory = categories.find((cat) => cat.category === activeTab);

  const totalPages = currentCategory
    ? Math.ceil(currentCategory.items.length / itemsPerPage)
    : 1;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = currentCategory?.items.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleToggle = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <section className="relative z-10 bg-background py-124 xl:py-150 rounded-t-[20px] xl:rounded-tl-[40px] xl:rounded-tr-[40px] 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] mt-[-4.5%] overflow-hidden">
      <div className="container">
        {/* Heading */}
        <motion.h1
          variants={moveUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-80  leading-[1.12] mb-6 md:mb-8 lg:mb-12 text-black"
        >
          {heading}
        </motion.h1>
        <motion.p
          variants={moveUp(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-para text-19 leading-[1.7] mb-6 md:mb-8 lg:mb-12 max-w-[107ch]"
        >
          {description}
        </motion.p>
        {/* Tabs */}
        <motion.div
          variants={moveRight()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hidden md:flex gap-[35px] xl:gap-[55px] border-b border-lite-gray mb-6 lg:mb-[50px]"
        >
          {categories.map((cat, index) => (
            <motion.button
              variants={moveRight(index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={cat.category}
              onClick={() => {
                setActiveTab(cat.category);
                setOpenQuestion(null);
                setCurrentPage(1);
              }}
              className={`pb-[20px] text-25 leading-[40px] ${
                activeTab === cat.category
                  ? "border-b-3 border-primary text-black"
                  : "text-foreground"
              }`}
            >
              {cat.category}
            </motion.button>
          ))}
        </motion.div>

        {/* Mobile Dropdown */}
        <motion.div
          variants={moveUp()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="block md:hidden mb-7"
        >
          <Select
            instanceId="category-select"
            options={categories.map((cat) => ({
              value: cat.category,
              label: cat.category,
            }))}
            value={{ value: activeTab, label: activeTab }}
            onChange={(option) => {
              if (option) {
                setActiveTab(option.value);
                setOpenQuestion(null);
                setCurrentPage(1);
              }
            }}
            className="text-19 font-light"
            classNamePrefix="react-select"
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: "8px",
                padding: "2px",
                borderColor: "#BCBCBC",
                boxShadow: "none",
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isSelected ? "#EC1C24" : "white",
                color: state.isSelected ? "white" : "black",
                cursor: "pointer",
              }),
            }}
          />
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={moveUp()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4 lg:space-y-[50px] "
        >
          {paginatedItems?.map((item, index) => (
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default FaqList;

"use client";

import React, { useState } from "react";
import Pagination from "@/app/components/common/Pagination";
import Image from "next/image";
import Select from "react-select";

interface FaqItem {
    question: string;
    answer: string;
  }

  interface FaqCategory {
    category: string;
    items: FaqItem[];
  }

  interface FaqContent {
    heading: string;
    description: string;
    categories: FaqCategory[];
  }

const FaqList = ({ faqData }: { faqData: FaqContent }) => {
  const data: FaqContent = faqData;

  const [activeTab, setActiveTab] = useState(data.categories[0].category);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const currentCategory = data.categories.find(
    (cat) => cat.category === activeTab
  );

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
    <section className="relative z-10 bg-background py-124 xl:py-150 rounded-t-2xl 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] mt-[-4.5%] overflow-hidden">
      <div className="container">
        {/* Heading */}
        <h1 className="text-80 lg:leading-[90px] leading-[50px] mb-[15px] xl:mb-[50px] text-black">
          {data.heading}
        </h1>
        <p className="text-gray-para text-19 leading-[32px] mb-[15px] xl:mb-[50px]">
          {data.description}
        </p>
        {/* Tabs */}
        <div className="hidden md:flex gap-[35px] xl:gap-[55px] border-b border-lite-gray mb-[50px]">
          {data.categories.map((cat) => (
            <button
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
            </button>
          ))}
        </div>

        {/* Mobile Dropdown */}
        <div className="block md:hidden mb-[20px]">
          <Select
            instanceId="category-select"
            options={data.categories.map((cat) => ({
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
        </div>

        {/* FAQ Items */}
        <div className="space-y-[25px] lg:space-y-[50px] ">
          {paginatedItems?.map((item) => (
            <div
              key={item.question}
              className="border-b border-lite-gray pb-[25px] lg:pb-[50px] cursor-pointer"
              onClick={() => handleToggle(item.question)}
            >
              {/* Question Text */}
              <div className="flex justify-between lg:items-center gap-[15px]">
                <h3 className="lg:text-30 text-25 lg:leading-[40px] leading-[36px] text-black">
                  {item.question}
                </h3>
                <span className="flex items-start lg:items-center mt-3 lg:mt-0 flex-shrink-0">
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
              </div>

              {/* Answer */}
              {openQuestion === item.question && (
                <p className="text-19 leading-[32px] text-gray-para pt-[10px] xl:pt-[20px] pr-[20px] lg:pr-[100px]">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>

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

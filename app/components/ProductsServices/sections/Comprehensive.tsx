"use client";
import React from "react";
import { motion } from "motion/react";
import { containerStagger, paragraphItem, moveUp } from "../../motionVarients";
import { ProductsServicesData } from "../type";
import Image from "next/image";

type BottomStat = {
  icon: string;       // image src
  label: string;
  sublabel: string;   // red text below
};

type ComprehensiveProps = {
  firstSection: ProductsServicesData["firstSection"];
  secondSection: ProductsServicesData["secondSection"];
  secondTitleMaxWidth?: string | false;
  /** Optional paragraph below the image card */
  bottomDescription?: string;
  /** Optional stats/icons bar */
  bottomStats?: BottomStat[];
};

const Comprehensive: React.FC<ComprehensiveProps> = ({
  firstSection,
  secondSection,
  secondTitleMaxWidth = "17ch",
  bottomDescription,
  bottomStats,
}) => {
  const hasFirstSection = !!(firstSection?.title?.trim() || firstSection?.description?.trim());
  const hasSecondSection = !!(secondSection?.title?.trim() || secondSection?.description?.trim() || secondSection?.image?.trim());
  const hasBottomDescription = !!bottomDescription?.trim();
  const hasBottomStats = !!(bottomStats && bottomStats.length > 0);

  // If nothing to render, return null entirely
  if (!hasFirstSection && !hasSecondSection && !hasBottomDescription && !hasBottomStats) {
    return null;
  }

  return (
    <section className="py-150 rounded-t-[20px] xl:rounded-tl-[40px] xl:rounded-tr-[40px] 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] relative z-10 bg-white mt-[-4.5%]">
      <h1 className="hidden">Reliable Scaffolding Rentals, Sales & Equipment Support for UAE Projects</h1>
      <div className="container flex flex-col gap-5 lg:gap-12">

        {/* First section — title + description */}
        {hasFirstSection && (
        <div className="w-full gap-y-4">
          <motion.div
            className="flex flex-col"
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.1, once: true }}
          >
             {firstSection?.title?.trim() && (
            <motion.h2
              variants={paragraphItem}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
              className="text-80 leading-[1.153846153846154] mb-5 lg:mb-12"
            >
              {firstSection.title}
            </motion.h2>
              )}
             {firstSection?.description?.trim() && (
            <motion.p
              variants={paragraphItem}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
              className="text-19 text-[#7f7f7f] leading-[1.684210526315789] mb-0 max-w-[107ch]"
            >
              {firstSection.description}
            </motion.p>
              )}
          </motion.div>
        </div>
  )}
        {/* Second section — image card */}
        {hasSecondSection && (
        <motion.div
          variants={moveUp()}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.1, once: true }}
          style={{ backgroundImage: `url(${secondSection.image})` }}
          className="bg-top-center bg-center p-6 pt-32 md:p-8 md:pt-35 lg:p-17 lg:pt-[237px] relative rounded-xl z-10"
        >
          <div className="relative z-10">
           {secondSection?.title?.trim() && (
            <motion.h2
              variants={moveUp(0.1)}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
              className={`text-white text-80 leading-[1.07] pb-6 md:pb-12 ${secondTitleMaxWidth ? `max-w-[${secondTitleMaxWidth}]` : ""
                }`}
            >
              {secondSection.title}
            </motion.h2>
             )}
              {secondSection?.description?.trim() && (
            <motion.p
              variants={moveUp(0.2)}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1, once: true }}
              className="text-lite-gray text-19 leading-[1.684210526315789] mb-0"
            >
              {secondSection.description}
            </motion.p>
              )}
          </div>
          <div className="rounded-xl overflow-hidden">
            <div className="overlayimage rounded-xl"></div>
          </div>
        </motion.div>
         )}

        {/* Optional paragraph below the image card */}
        {hasBottomDescription && (
          <motion.p
            variants={moveUp(0.1)}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.1, once: true }}
            className="text-19 text-[#696969] leading-[1.684210526315789] "
          >
            {bottomDescription}
          </motion.p>
        )}

        {/* Optional stats/icons bar */}
        {hasBottomStats && (
          <motion.div
            variants={moveUp(0.2)}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.1, once: true }}
            className="flex flex-wrap justify-between"
          >
            {bottomStats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col gap-3 py-4 pr-8 items-start">
                  <Image
                    src={stat.icon}
                    alt={stat.label}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto h-[42px] object-contain"
                  />
                  <span className="text-33 text-black ">
                    {stat.label}
                  </span>
                  <span className="text-19 text-[#EC1C24]">
                    {stat.sublabel}
                  </span>
                </div>
                {/* Divider — skip after last item */}
                {index < bottomStats.length - 1 && (
                  <div className="w-[1px] bg-[#bcbcbc8c] self-stretch mx-4 my-4" />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Comprehensive;
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion"; 
import CareerApplyModal from "./CareerApplyModal";
import Image from "next/image";
import { moveUp } from "@/app/components/motionVarients";
import { careerType } from "../../careers/type";

// ── Types ─────────────────────────────────────────────────────────────────────
export interface JobDetailsData {
  jobTitle: string;
  experience: string;
  department: string;
  location: string;
  jobDescription: string[];
  keyRequirements: string[];
  applyTitle: string;
  applyDescription: string;
  applyLink: string;
}

interface JobDetailsProps {
  firstSection: careerType['careers'][number]['firstSection'];
  secondSection: careerType['careers'][number]['secondSection'];
  thirdSection: careerType['careers'][number]['thirdSection'];
  fourthSection: careerType['careers'][number]['fourthSection'];
}

// ── Sample JSON data ──────────────────────────────────────────────────────────

  

// ── Meta Item ─────────────────────────────────────────────────────────────────
interface MetaItemProps {
  icon: string;
  label: string;
  value: string;
  delay: number;
}

const MetaItem = ({ icon, label, value }: MetaItemProps) => (
  < div  className="flex flex-col gap-[10px]">
    <div className="flex items-center gap-[10px]"> 
            <Image src={icon} alt={label} width={32} height={32}  className="w-[28px] h-[28px] md:w-[32px] md:h-[32px]"/>
         
      <span className="text-[16px] md:text-25 leading-[1.7] ">{label}</span>
    </div>
    <div className="h-px bg-[#BEBEBE] w-full" />
    <p className="text-foreground text-19 leading-[1.7]">{value}</p>
  </ div>
);

// ── Bullet List Section ───────────────────────────────────────────────────────
interface BulletListProps {
  title: string;
  items: {
    title:string;
  }[];
  delay?: number;
}

const BulletList = ({ title, items, delay = 0 }: BulletListProps) => (
  <div className="py-10 md:py-6 xl:py-[50px] border-b border-[#BEBEBE]">
    <motion.h2
                      variants={moveUp()}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
      className="text-33 leading-[1.22] mb-5"
    >
      {title}
    </motion.h2>
    <ul className="space-y-[10px]">
      {items.map((item, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: delay + 0.1 + i * 0.07 }}
          className="flex items-start gap-[10px] text-foreground text-19 leading-[1.7]"
        >
          <span className="mt-3 w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0" />
          {item.title}
        </motion.li>
      ))}
    </ul>
  </div>
);

// ── Main Component ────────────────────────────────────────────────────────────
const JobDetails = ({ firstSection,secondSection,thirdSection,fourthSection }: JobDetailsProps) => {
  const metaItems = [
    { icon:"/assets/images/careers/jobspec1.svg", label: "Job Title",   value: firstSection.title },
    { icon: "/assets/images/careers/jobspec2.svg",      label: "Experience",  value: firstSection.experience },
    { icon: "/assets/images/careers/jobspec3.svg",    label: "Department",  value: firstSection.department.name },
    { icon: "/assets/images/careers/jobspec4.svg",  label: "Location",    value: firstSection.location },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="pb-124 xl:pb-150  ">
<div className="container">
 <div className="pb-6 sm:pb-10 xl:pb-12">
             <motion.h2
                      variants={moveUp()}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="text-80  leading-[1.12] mb-5 md:mb-8 lg:mb-12 text-black  "
                    >
                      {firstSection.title}
                    </motion.h2>
                    <motion.button
               variants={moveUp()}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
        onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 xl:gap-[18px] cursor-pointer text-16 font-normal border-1 border-black py-2 xl:py-[9px] px-4 md:px-5   rounded-[60px] w-fit z-10 group"
              >
                <span>Apply Now</span>
                <span className="bg-primary w-[35px] h-[35px] lg:w-[51.7px] lg:h-[51.7px] flex items-center justify-center rounded-full  group-hover:translate-x-[10px] transition-all duration-300">
                  <Image
                    src="/assets/images/home/arrow-right.svg"
                    alt="Arrow"
                    width={30}
                    height={30}
                    className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]"
                  />
                </span>
              </motion.button>
               <CareerApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={firstSection.title}
      />
          </div>
      {/* ── Job Specifications ─────────────────────────────────── */}
      <motion.div className="border-b border-t border-[#BEBEBE] pb-10 md:pb-12 xl:pb-[53px] pt-10 md:pt-12"
       variants={moveUp()}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}>
        <motion.h1  variants={moveUp()}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="text-33 leading-[1.2]  mb-8 xl:mb-[44px]">
          Job Specifications
        </motion.h1>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {metaItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <MetaItem
                icon={item.icon}
                label={item.label}
                value={item.value}
                delay={i * 0.08}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Job Description ────────────────────────────────────── */}
      <BulletList
        title={secondSection.title}
        items={secondSection.items}
        delay={0.05}
      />

      {/* ── Key Requirements ───────────────────────────────────── */}
      <BulletList
        title={thirdSection.title}
        items={thirdSection.items}
        delay={0.05}
      />

      {/* ── Apply Now ──────────────────────────────────────────── */}
      <div   className="pt-10 md:pt-14">
       <motion.h2
                      variants={moveUp()}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                       className="text-[33px]   mb-5 leading-[1.2]">
          {fourthSection.title}
        </motion.h2>
        <motion.p
                      variants={moveUp()}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }} className="text-19 text-foreground    mb-5">
          {fourthSection.description}
        </motion.p>

        {/* Apply Button */} 
        <motion.button
                      variants={moveUp()}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
        onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 xl:gap-[18px] cursor-pointer text-16 font-normal border-1 border-black py-2 xl:py-[9px] px-4 md:px-5   rounded-[60px] w-fit z-10 group"
              >
                <span>Apply Now</span>
                <span className="bg-primary w-[35px] h-[35px] lg:w-[51.7px] lg:h-[51.7px] flex items-center justify-center rounded-full  group-hover:translate-x-[10px] transition-all duration-300">
                  <Image
                    src="/assets/images/home/arrow-right.svg"
                    alt="Arrow"
                    width={30}
                    height={30}
                    className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]"
                  />
                </span>
              </motion.button>
              <CareerApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={firstSection.title}
      />
      </div>
</div>

    </section>
  );
};

export default JobDetails;

 

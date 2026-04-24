"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { moveUp } from "@/app/components/motionVarients";
import { Listbox } from "@headlessui/react";
import { 
  paragraphItem, 
} from "../../motionVarients";
import { careerType } from "../type";

export interface Job {
  id: string | number;
  category: string;
  title: string;
  location: string;
  experience: string;
  department: string;
  jobType: string;
  slug: string;
}


const ChevronDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.92 8.94995L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.07996 8.94995" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg> 
);

 

 

const JobListings = ({ title,items }: {title:string;items:careerType['careers']}) => {
  
  const departments = ["All", ...Array.from(new Set(items.map((j) => j.firstSection.department.name)))];
  const jobTypes = ["All", ...Array.from(new Set(items.map((j) => j.firstSection.jobType.name)))];

  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedType, setSelectedType] = useState("All"); 

  const filtered = items.filter((job) => {
    const deptMatch = selectedDept === "All" || job.firstSection.department.name === selectedDept;
    const typeMatch = selectedType === "All" || job.firstSection.jobType.name === selectedType;
    return deptMatch && typeMatch;
  });

  return (
    <section className="  py-124 xl:py-150">
     <div className="container">
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-between  ">
        <motion.h2
                        variants={moveUp()}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-80  leading-[1.12] text-black  "
                      >
                        {title}
                      </motion.h2>
       {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex flex-col sm:flex-row justify-end gap-3 w-full "
      >
           <Listbox value={selectedDept} onChange={(val) => { setSelectedDept(val); }}>
          <div className="relative">
            <Listbox.Button className="flex items-center gap-2 bg-[#F9F9F9] py-3 px-8 md:p-5 lg:p-7 rounded-full min-w-full md:min-w-[260px] text-black text-19 hover:border-gray-400 transition-colors min-w-[150px] justify-between">
              <span>{selectedDept === "All" ? "Department" : selectedDept}</span>
              <ChevronDown />
            </Listbox.Button>

            <Listbox.Options className="absolute right-0 top-full mt-2 bg-gray-900 border border-gray-700 rounded-xl overflow-hidden z-20 min-w-full md:min-w-[260px]">
              {departments.map((d) => (
                <Listbox.Option
                  key={d}
                  value={d}
                  className={({ active, selected }) =>
                    `w-full text-left px-4 py-2.5 text-19 cursor-pointer transition-colors ${
                      selected ? "bg-red-600 text-white" : active ? "bg-gray-800 text-gray-300" : "text-gray-300"
                    }`
                  }
                >
                  {d}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
         <Listbox value={selectedType} onChange={(val) => { setSelectedType(val); }}>
          <div className="relative">
            <Listbox.Button className="flex items-center gap-2 bg-[#F9F9F9] py-3 px-8 md:p-5 lg:p-7 rounded-full min-w-full md:min-w-[260px] text-black text-19 hover:border-gray-400 transition-colors min-w-[150px] justify-between">
               <span>{selectedType === "All" ? "Job Type" : selectedType}</span>
              <ChevronDown />
            </Listbox.Button>

            <Listbox.Options className="absolute right-0 top-full mt-2 bg-gray-900 border border-gray-700 rounded-xl overflow-hidden z-20 min-w-full md:min-w-[260px]">
              {jobTypes.map((d) => (
                <Listbox.Option
                  key={d}
                  value={d}
                  className={({ active, selected }) =>
                    `w-full text-left px-4 py-2.5 text-19 cursor-pointer transition-colors ${
                      selected ? "bg-red-600 text-white" : active ? "bg-gray-800 text-gray-300" : "text-gray-300"
                    }`
                  }
                >
                  {d}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox> 
      </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#BEBEBE] my-5 md:my-8 lg:my-12" />

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-[#F9F9F9] rounded-2xl p-6 lg:p-7 flex flex-col gap-4 lg:gap-[30px] border border-[#BEBEBE]"
          >
            {/* Category Badge */}
            <span className="self-start bg-black text-white text-19   px-5 py-[8px] rounded-full leading-[1.7] mb-3 lg:mb-5">
              {job.firstSection.department.name}
            </span>

            {/* Title */}
            <p className="text-black text-33 leading-[1.213]">
              {job.firstSection.title}
            </p>

            {/* Meta */}
            <div className="flex sm:flex-col lg:flex-row  lg:items-center gap-4 lg:gap-[30px] text-gray-para text-19">
              <span className="flex items-center gap-1.5 md:gap-[10px] ">
                <Image src="/assets/images/careers/locationicon.svg" alt="location" width="24" height="24" />
                {job.firstSection.location}
              </span>
              <span className="flex items-center gap-1.5 md:gap-[10px]">
                <Image src="/assets/images/careers/jobicon.svg" alt="job" width="24" height="24" />
                {job.firstSection.experience}
              </span>
            </div>

            {/* CTA */}
             <motion.div
                          variants={paragraphItem}
                          initial="hidden"
                          whileInView="show"
                          transition={{ duration: 0.6 }}
                          viewport={{ amount: 0.1, once: true }}
                        >
                          <Link
                            href={`careers/${job.slug}`}
                            className="flex items-center gap-2 cursor-pointer text-16 font-normal border-1 border-black py-[6px] lg:py-[9px] px-4 md:px-5 rounded-[60px] w-fit z-10 group"
                          >
                            <span>View Details</span>
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
             
          </motion.div>
        ))}
      </div>
     </div>
    </section>
  );
};

export default JobListings;

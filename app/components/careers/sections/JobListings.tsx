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

interface JobListingsProps {
  jobs?: Job[];
}

const defaultJobs: Job[] = [
  {
    id: 1,
    category: "Engineering",
    title: "Scaffolding Design Engineer",
    location: "Dubai, UAE",
    experience: "3+ Years Exp.",
    department: "Engineering",
    jobType: "Full Time",
    slug: "scaffolding-design-engineer",
  },
  {
    id: 2,
    category: "Operations",
    title: "Scaffolding Supervisor",
    location: "Dubai, UAE",
    experience: "3+ Years Exp.",
    department: "Operations",
    jobType: "Full Time",
    slug: "scaffolding-supervisor",
  },
  {
    id: 3,
    category: "Health & Safety",
    title: "HSE Officer",
    location: "Dubai, UAE",
    experience: "3+ Years Exp.",
    department: "Health & Safety",
    jobType: "Full Time",
    slug: "hse-officer",
  },
];

const ChevronDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.92 8.94995L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.07996 8.94995" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
);

const LocationIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 17.9067C16.5463 17.9067 17.0872 17.7991 17.592 17.59C18.0967 17.3809 18.5553 17.0745 18.9416 16.6882C19.3279 16.3019 19.6343 15.8433 19.8433 15.3386C20.0524 14.8339 20.16 14.293 20.16 13.7467C20.16 13.2004 20.0524 12.6594 19.8433 12.1547C19.6343 11.65 19.3279 11.1914 18.9416 10.8051C18.5553 10.4188 18.0967 10.1124 17.592 9.90333C17.0872 9.69427 16.5463 9.58667 16 9.58667C14.8967 9.58667 13.8386 10.025 13.0584 10.8051C12.2783 11.5853 11.84 12.6434 11.84 13.7467C11.84 14.85 12.2783 15.9081 13.0584 16.6882C13.8386 17.4684 14.8967 17.9067 16 17.9067Z" stroke="#EC1C24" stroke-width="2"/>
<path d="M4.82667 11.3201C7.45333 -0.226582 24.56 -0.213249 27.1733 11.3334C28.7067 18.1068 24.4933 23.8401 20.8 27.3868C19.5094 28.6315 17.7863 29.327 15.9933 29.327C14.2003 29.327 12.4772 28.6315 11.1867 27.3868C7.50667 23.8401 3.29333 18.0934 4.82667 11.3201Z" stroke="#EC1C24" stroke-width="2"/>
</svg> 
);

const BriefcaseIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 29.3333H21.3333C26.6933 29.3333 27.6533 27.1867 27.9333 24.5733L28.9333 13.9067C29.2933 10.6533 28.36 8 22.6667 8H9.33334C3.64 8 2.70667 10.6533 3.06667 13.9067L4.06667 24.5733C4.34667 27.1867 5.30667 29.3333 10.6667 29.3333Z" stroke="#EC1C24" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6667 8.00008V6.93341C10.6667 4.57341 10.6667 2.66675 14.9333 2.66675H17.0667C21.3333 2.66675 21.3333 4.57341 21.3333 6.93341V8.00008" stroke="#EC1C24" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.6667 17.3333V18.6667C18.6667 18.68 18.6667 18.68 18.6667 18.6933C18.6667 20.1467 18.6533 21.3333 16 21.3333C13.36 21.3333 13.3333 20.16 13.3333 18.7067V17.3333C13.3333 16 13.3333 16 14.6667 16H17.3333C18.6667 16 18.6667 16 18.6667 17.3333Z" stroke="#EC1C24" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.8667 14.6667C25.7867 16.9067 22.2667 18.2401 18.6667 18.6934" stroke="#EC1C24" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.49335 15.0266C6.49335 17.0799 9.88001 18.3199 13.3333 18.7066" stroke="#EC1C24" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

const JobListings = ({ jobs = defaultJobs }: JobListingsProps) => {
  const departments = ["All", ...Array.from(new Set(jobs.map((j) => j.department)))];
  const jobTypes = ["All", ...Array.from(new Set(jobs.map((j) => j.jobType)))];

  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedType, setSelectedType] = useState("All"); 

  const filtered = jobs.filter((job) => {
    const deptMatch = selectedDept === "All" || job.department === selectedDept;
    const typeMatch = selectedType === "All" || job.jobType === selectedType;
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
                        className="text-80  leading-[1.12] text-black max-w-[20ch]"
                      >
                        Current Openings
                      </motion.h2>
       {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex justify-end gap-3 "
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-[#F9F9F9] rounded-2xl p-6 lg:p-7 flex flex-col gap-4 lg:gap-[30px] border border-[#BEBEBE]"
          >
            {/* Category Badge */}
            <span className="self-start bg-black text-white text-19   px-5 py-[8px] rounded-full leading-[1.7] mb-3 lg:mb-5">
              {job.category}
            </span>

            {/* Title */}
            <p className="text-black text-33 leading-[1.213]">
              {job.title}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-4 lg:gap-[30px] text-gray-para text-19">
              <span className="flex items-center gap-1.5 md:gap-[10px] ">
                <LocationIcon />
                {job.location}
              </span>
              <span className="flex items-center gap-1.5 md:gap-[10px]">
                <BriefcaseIcon />
                {job.experience}
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
                            href="/about-us"
                            className="flex items-center gap-2 cursor-pointer text-16 font-normal border-1 border-black py-[9px] px-4 md:px-5 rounded-[60px] w-fit z-10 group"
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

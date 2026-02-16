"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { moveUp } from "../../motionVarients";
import Link from "next/link";
import { Projects } from "../../projects/type";

import { statusData } from "@/app/components/AdminProject/statusData";
 
  
  
  const ExploreMore = ({data}: {data: Projects}) => {
  return (
    <section className="pb-150 relative z-10  ">
      <div className="container ">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 md:mb-8lg:mb-12 gap-5 sm:gap-0">
          <motion.h2
            variants={moveUp(0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-80 leading-[1.125]   text-black"
          >
            More to Explore
          </motion.h2>
          {/* Button */}
          <motion.div
            className="flex justify-center"
            variants={moveUp(0.6)}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.1, once: true }}
          >
            <Link
              href="/projects"
              className="flex items-center gap-2 cursor-pointer text-16 font-normal border-1 border-black py-[5px] md:py-[10px] px-[20px] rounded-[60px] w-fit z-10 group hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <span>View All Projects</span>
              <span className="bg-primary w-8 h-8 md:w-[51.7px] md:h-[51.7px] flex items-center justify-center rounded-full group-hover:translate-x-[10px] group-hover:bg-white group-hover:text-primary transition-all duration-300 ">
                <Image
                  src="/assets/images/icons/arrow-right.svg"
                  alt="Arrow"
                  width={30}
                  height={30}
                  className="w-4 h-4 md:w-[24px] md:h-[24px] brightness-0 invert-100 group-hover:brightness-100 group-hover:invert-0"
                />
              </span>
            </Link>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-3 gap-5 ">
          {data.projects.slice(-3).map((item, index) => (
            <motion.div
              variants={moveUp(index * 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={index}
              className="h-[300px] lg:h-[408px] xl:h-[502px] overflow-hidden rounded-xl bg-cover bg-center relative group bgrd"
              style={{ backgroundImage: `url(${item.thumbnail})` }}
            >
              <Link href={`/projects/${item.slug}`}>
              <div className="absolute bottom-0 w-full p-5 lg:p-10 z-10 ">
                <div className=" flex items-center justify-between lg:mb-7 lg:pb-7 mb-3 pb-3 border-b-3  border-white group-hover:border-primary transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <Image
                      src={'/assets/images/projects/location.svg'}
                      alt={item.firstSection.location.name}
                      width={20}
                      height={20}
                    />
                    <p className="transition-all duration-300 text-white">
                      {item.firstSection.location.name}
                    </p>
                  </div>
                  <div>
                    <p className="transition-all duration-300 text-white"> 
                      
           {statusData.find((status) => status.value.toString() === item.firstSection.status)?.name}
                    </p>
                  </div>
                </div>
                <div>
                  <p className=" text-33 uppercase text-white">{item.firstSection.title}</p>
                </div>
              </div>
              <div className="absolute top-0 w-full h-full bg-black opacity-60  rounded-xl  transition-all duration-300"></div>
              <div className="absolute bottom-0 w-full h-0 group-hover:h-full rounded-xl   hrbg transition-all duration-300"></div>
           
           </Link>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;

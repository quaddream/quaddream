"use client";
import React from "react";
import Image from "next/image"; 
import { motion } from "motion/react";
import { moveUp } from"../../motionVarients";
import Link from "next/link";
type items = {
  title: string;
  image: string;
  city: string;
  status: string;
  icon: string;
};
type datapop = {
  heading: string;
  items: items[];
};
type PjtProps = {
  Data: datapop[];
}; 
const ExploreMore: React.FC<PjtProps> = ({ Data }) => { 

  return (
    <section className='pb-150 relative z-10  '>
      <div className="container ">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 md:mb-8lg:mb-12 gap-5 sm:gap-0">
          <h2 className="text-80 leading-[1.125]   text-black">{Data[0].heading}</h2>
           {/* Button */}
        <motion.div className=" flex justify-center" variants={moveUp(0.6)} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ amount: 0.1, once: true }}>
          <Link href='/projects' className='flex items-center gap-2 cursor-pointer text-16 font-normal border-1 border-black py-[5px] md:py-[10px] px-[20px] rounded-[60px] w-fit z-10 group hover:border-primary hover:bg-primary hover:text-white transition-all duration-300'>
            <span>View All Projects</span>
            <span className='bg-primary w-[51.7px] h-[51.7px] flex items-center justify-center rounded-full group-hover:translate-x-[10px] group-hover:bg-white group-hover:text-primary transition-all duration-300 '>
              <Image src="/assets/images/icons/arrow-right.svg" alt="Arrow" width={30} height={30} className='w-[24px] h-[24px] brightness-0 invert-100 group-hover:brightness-100 group-hover:invert-0' />
            </span>
          </Link>
        </motion.div>
           
        </div> 
        <div className="grid md:grid-cols-3 gap-5 ">
            {Data[0].items.map((item,index)=>(
            <div className="h-[300px] lg:h-[408px] xl:h-[502px] overflow-hidden rounded-xl bg-cover bg-center relative group bgrd" style={{backgroundImage: `url(${item.image})`,}} key={index}>
                    <div className="absolute bottom-0 w-full p-5 lg:p-10 z-10 ">
                    <div className=" flex items-center justify-between lg:mb-7 lg:pb-7 mb-3 pb-3 border-b-3  border-white group-hover:border-primary transition-all duration-300">
                        <div className="flex items-center gap-2">
                        <Image src={item.icon} alt={item.title} width={20} height={20}  /> 
                            <p className="transition-all duration-300 text-white">{item.city}</p> 
                        </div>
                        <div>
                            <p className="transition-all duration-300 text-white">{item.status}</p>
                        </div>
                    </div>
                    <div>
                        <p className=" text-33 uppercase text-white">{item.title}</p>
                    </div>
                    </div>
                    <div className="absolute top-0 w-full h-full bg-black opacity-50  rounded-xl  transition-all duration-300"></div>
                    <div className="absolute bottom-0 w-full h-0 group-hover:h-full rounded-xl   hrbg transition-all duration-300"></div>
            </div>
            ))}
        </div>
        
      </div>
    </section>
  );
};

export default ExploreMore;

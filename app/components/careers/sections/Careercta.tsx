'use client';

import Link from "next/link";
import { motion } from "motion/react";
import {moveUp} from "../../motionVarients"; 


// Careercta.tsx
import { careerType } from "../type";

type CareerctaProps = {
  data: careerType["lastSection"];
};

export default function Careercta({ data }: CareerctaProps) {
   
  return (
    <section
      className="relative  flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${data.image})`, // replace with your actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(0deg, rgb(0 0 0 / 77%) 0%, rgb(0 0 0 / 72%) 100%)",

        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 px-4 py-150 2xl:py-[182px]">
        <motion.h2 className={`text-80 font-400 leading-[1.125]max-w-[14ch] m-auto`}  variants={moveUp(0.2)} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ amount: 0.1, once: true }}>
          {data.mainTitle}
        </motion.h2>

        <div className="flex flex-col sm:flex-row items-center gap-5 mt-10 justify-center">
      {/* Email Button */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Link
          href={`mailto:${data.email}`}
          className="min-w-[237px] flex items-center gap-3  border border-white text-white px-5 py-[10px] rounded-full hover:border-red-500 transition-colors duration-300 group"
        >
          {/* Email Icon */}
          <span>
           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M22.6665 27.3334H9.33317C5.33317 27.3334 2.6665 25.3334 2.6665 20.6667V11.3334C2.6665 6.66675 5.33317 4.66675 9.33317 4.66675H22.6665C26.6665 4.66675 29.3332 6.66675 29.3332 11.3334V20.6667C29.3332 25.3334 26.6665 27.3334 22.6665 27.3334Z" stroke="#EC1C24" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22.6668 12L18.4935 15.3333C17.1202 16.4267 14.8668 16.4267 13.4935 15.3333L9.3335 12" stroke="#EC1C24" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="text-16">{data.email}</span>
        </Link>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Link
          href={`https://wa.me/${data.phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="min-w-[237px] flex items-center gap-3 justify-center  border border-white text-white px-5 py-[10px] rounded-full hover:border-green-500 transition-colors duration-300 group"
        >
          {/* WhatsApp Icon */}
          <span >
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <g clipPath="url(#clip0_1530_3601)">
              <path d="M15.2729 1.01735C7.34995 1.3946 1.09762 7.99289 1.12165 15.9248C1.12897 18.3407 1.7122 20.621 2.74106 22.6358L1.1614 30.3036C1.07595 30.7184 1.45004 31.0816 1.86208 30.984L9.37566 29.2039C11.306 30.1654 13.4742 30.7208 15.7689 30.7558C23.8669 30.8795 30.6193 24.4495 30.8717 16.3544C31.1422 7.67714 23.9806 0.602651 15.2729 1.01735Z" stroke="#25D366" strokeWidth="2"/>
              <path d="M23.221 19.1056L20.339 18.2781C19.9601 18.1693 19.5521 18.2768 19.276 18.5581L18.5712 19.2762C18.2741 19.5789 17.8231 19.6762 17.4298 19.5171C16.0665 18.9654 13.1986 16.4155 12.4662 15.14C12.2549 14.7721 12.2898 14.3121 12.5493 13.9764L13.1646 13.1804C13.4057 12.8685 13.4565 12.4496 13.2971 12.0891L12.0846 9.34672C11.7941 8.68988 10.9548 8.49867 10.4064 8.96244C9.60205 9.64275 8.64767 10.6766 8.53166 11.8219C8.32711 13.8411 9.19309 16.3866 12.4678 19.443C16.2511 22.974 19.2807 23.4405 21.2532 22.9627C22.372 22.6917 23.2662 21.6053 23.8304 20.7158C24.2152 20.1093 23.9114 19.3039 23.221 19.1056Z" fill="#25D366"/>
              </g>
              <defs>
              <clipPath id="clip0_1530_3601">
              <rect width="32" height="32" fill="white"/>
              </clipPath>
              </defs>
              </svg>
          </span>
          <span className="text-16">{data.phone}</span>
        </Link>
      </motion.div>
    </div>

        <motion.p className="mt-5  text-19 text-white leading-[1.7]" variants={moveUp(0.4)} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ amount: 0.1, once: true }}>
          {data.subTitle}
        </motion.p>

        {/* Button */}
       
      </div>
    </section>
  );
}

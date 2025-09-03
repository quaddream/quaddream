"use client";

import { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import Image from "next/image";
import {
  brochureDocuments,
  certificateDocuments,
} from "@/app/components/downloads/data";
import { motion } from "framer-motion";
import { moveUp, containerStagger } from "@/app/components/motionVarients";

export default function DocumentList() {
  const [activeTab, setActiveTab] = useState<"brochure" | "certificates">(
    "brochure"
  );

  const documents =
    activeTab === "brochure" ? brochureDocuments : certificateDocuments;

  return (
    <section className="relative z-10 bg-background py-150 rounded-t-2xl 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] mt-[-4.5%]">
      {/* Tabs */}
      <div className="container">
        <motion.div
          variants={moveUp()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex items-center justify-between border-b border-lite-gray"
        >
          <div className="flex justify-start text-right w-full text-19 md:text-25 space-x-[50px] ">
            <button
              onClick={() => setActiveTab("brochure")}
              className={`pb-[16px] md:pb-[20px] text-black font-normal cursor-pointer relative top-[2px] border-b-3  transition-all duration-300 ${
                activeTab === "brochure"
                  ? " border-primary"
                  : "opacity-50 border-transparent"
              }`}
            >
              Company Brochure
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`pb-[16px] md:pb-[20px] text-black font-normal cursor-pointer relative top-[2px] border-b-3  transition-all duration-300 ${
                activeTab === "certificates"
                  ? " border-primary"
                  : "opacity-50 border-transparent"
              }`}
            >
              Certificates
            </button>
          </div>
        </motion.div>
        {/* Document List */}
        <motion.div
          className="mt-[30px] md:mt-[50px] space-y-[18px] sm:space-y-[50px]"
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              variants={moveUp(index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={index}
              className="border-b border-lite-gray pb-3 md:pb-5"
            >
              <div className="flex flex-col sm:flex-row gap-[1px] sm:gap-0">
                {/* Document Name */}
                <div className="w-full sm:w-1/4 pr-0 sm:pr-4 pb-2 sm:pb-0">
                  <span className="lg:text-30 text-black font-normal">
                    {doc.name}
                  </span>
                </div>

                {/* Other items grouped */}
                <div className="flex w-full sm:w-3/4 sm:flex-row flex-row justify-between items-center">
                  {/* PDF Icon */}
                  <div className="w-auto sm:w-1/4 flex justify-start sm:justify-end px-0 sm:px-4">
                    <FaFilePdf className="w-[24px] h-[30px]" color="#696969" />
                  </div>

                  {/* Size */}
                  <div className="w-auto sm:w-1/4 flex justify-center sm:justify-end px-0 sm:px-4">
                    <span className="text-19 text-gray-para font-normal bg-[#F9F9F9] w-[77px] h-[42px] md:h-[52px] p-0 md:p-[10px] rounded-[60px] flex items-center justify-center">
                      {doc.size}
                    </span>
                  </div>

                  {/* Download Icon */}
                  <div className="w-auto sm:w-1/4 flex justify-end pl-0 sm:pl-4">
                    <button className="cursor-pointer">
                      <Image
                        src="/assets/images/downloads/download.svg"
                        alt="Download"
                        width={28}
                        height={26}
                        className="w-6 h-6 md:w-[28px] md:h-[26px]"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

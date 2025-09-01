"use client";

import { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import Image from "next/image";
import {
  brochureDocuments,
  certificateDocuments,
} from "@/app/components/downloads/data";

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
        <div className="flex items-center justify-between border-b border-lite-gray">
          <div className="flex justify-start text-right w-full text-19 md:text-25 space-x-[50px] overflow-hidden">
            <button
              onClick={() => setActiveTab("brochure")}
              className={`pb-[16px] md:pb-[20px] text-black font-normal ${
                activeTab === "brochure"
                  ? "border-b-3 border-primary"
                  : "opacity-50"
              }`}
            >
              Company Brochure
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`pb-[16px] md:pb-[20px] text-black font-normal ${
                activeTab === "certificates"
                  ? "border-b-3 border-primary"
                  : "opacity-50"
              }`}
            >
              Certificates
            </button>
          </div>
        </div>
        {/* Document List */}
        <div className="mt-[30px] md:mt-[50px] space-y-[18px] sm:space-y-[50px]">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="border-b border-lite-gray pb-[18px] md:pb-[25px]"
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
                    <span className="text-19 text-[#696969] font-normal bg-[#F9F9F9] w-[77px] h-[52px] p-[10px] rounded-[60px] flex items-center justify-center">
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
                        className="w-[28px] h-[26px]"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

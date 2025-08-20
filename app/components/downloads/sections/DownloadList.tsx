"use client";

import { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import Image from "next/image";
import { brochureDocuments, certificateDocuments } from "@/app/components/downloads/data";

export default function DocumentList() {
  const [activeTab, setActiveTab] = useState<"brochure" | "certificates">(
    "brochure"
  );

  const documents =
    activeTab === "brochure" ? brochureDocuments : certificateDocuments;

  return (
    <section className="container bg-background py-150 rounded-t-2xl 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] mt-[-4.5%]">
      {/* Tabs */}
      <div className="flex items-center justify-between border-b border-lite-gray">
        <div className="flex space-x-[50px]">
          <button
            onClick={() => setActiveTab("brochure")}
            className={`pb-[20px] text-25 text-black font-normal ${
              activeTab === "brochure"
                ? "border-b-3 border-primary"
                : "opacity-50"
            }`}
          >
            Company Brochure
          </button>
          <button
            onClick={() => setActiveTab("certificates")}
            className={`pb-[20px] text-25 text-black font-normal ${
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
      <div className="mt-[50px] space-y-[50px]">
        {documents.map((doc, index) => (
          <div key={index} className="border-b border-lite-gray pb-[25px]">
            <div className="flex items-center w-full">
              {/* Document Name */}
              <div className="w-1/4 pr-4">
                <span className="lg:text-30 text-black font-normal">
                  {doc.name}
                </span>
              </div>

              {/* PDF Icon */}
              <div className="w-1/4 flex justify-end px-4">
                <FaFilePdf className="w-[24px] h-[30px]" color="#696969" />
              </div>

              {/* Size */}
              <div className="w-1/4 flex justify-end px-4">
                <span className="text-19 text-[#696969] font-normal bg-[#F9F9F9] w-[77px] h-[52px] p-[10px] rounded-[60px] flex items-center justify-center">
                  {doc.size}
                </span>
              </div>

              {/* Download Icon */}
              <div className="w-1/4 flex justify-end pl-4">
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
        ))}
      </div>
    </section>
  );
}

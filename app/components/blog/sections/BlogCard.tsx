"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BlogType } from "../data";

const BlogCard = ({ blogData }: { blogData: BlogType[] }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5 md:gap-9 lg:gap-12 xl:gap-[88px]  mb-8 lg:mb-[110px]">
      {/* Left Image */}
      <div className="w-full md:w-[45%] flex-shrink-0">
        <Image
          src={blogData[9].image}
          alt={blogData[9].title}
          width={671}
          height={482}
          className="w-full max-h-[482px] object-cover rounded-[16px]"
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col justify-between w-full md:w-[55%]">
        {/* Top row */}
        <div className="flex justify-between items-center text-19 leading-[1.7] mb-[12px] lg:mb-[30px]">
          <span className="text-primary">{blogData[9].category}</span>
          <span className="text-gray-para">{blogData[9].date}</span>
        </div>

        {/* Title */}
        <h2 className="text-30 leading-[1.35] text-black mb-[8px] lg:mb-[20px]">
          {blogData[9].title}
        </h2>

        {/* Description */}
        <p className="text-gray-para text-19 leading-[1.7] mb-[8px] lg:mb-[20px]">
          {blogData[9].description}
        </p>

        {/* Continue Reading */}
        <Link
          href={blogData[9].link || "#"}
          className="text-primary leading-[32px] text-19 underline decoration-0"
        >
          Continue Reading
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

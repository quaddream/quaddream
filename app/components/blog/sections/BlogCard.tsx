"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BlogType } from "../type";
import { motion } from "framer-motion";
import { moveUp } from "../../motionVarients";

const BlogCard = ({ blogData }: { blogData: BlogType["blogs"] }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5 md:gap-9 lg:gap-12 xl:gap-[88px]  mb-8 lg:mb-[110px]">
      {/* Left Image */}
      <motion.div
        variants={moveUp(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full md:w-[45%] flex-shrink-0"
      >
        <Image
          src={blogData[0].thumbnail}
          alt={blogData[0].thumbnailAlt}
          width={671}
          height={482}
          className="w-full max-h-[482px] object-cover rounded-[16px]"
        />
      </motion.div>

      {/* Right Content */}
      <div className="flex flex-col justify-between w-full md:w-[55%]">
        {/* Top row */}
        <motion.div
          variants={moveUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-between items-center text-19 leading-[1.7] mb-[12px] lg:mb-[30px]"
        >
          <span className="text-primary">{blogData[0].category.name}</span>
          <span className="text-gray-para">
            {blogData[0].date.split("T")[0]}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={moveUp(0.25)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-30 leading-[1.35] text-black mb-[8px] lg:mb-[20px]"
        >
          {blogData[0].title}
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={moveUp(0.35)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-para text-19 leading-[1.7] mb-[8px] lg:mb-[20px] line-clamp-3"
        >
          {blogData[0].description}
        </motion.p>

        {/* Continue Reading */}
        <motion.div
          variants={moveUp(0.55)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Link
            href={`blog/${blogData[0].slug}`}
            className="text-primary leading-[32px] text-19 underline decoration-0"
          >
            Continue Reading
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogCard;

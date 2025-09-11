"use client";

import React from "react";
import { GoShareAndroid } from "react-icons/go";
import LikeSlider from "./LikeSlider";
import { motion } from "framer-motion";
import { moveRight, moveUp } from "../../motionVarients";
import { BlogType } from "../../blog/type";
import BlogContentParser from "./utils/BlogContentParser";

interface BlogDetailProps {
  blogDetail: BlogType["blogs"][number];
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blogDetail }) => {
  return (
    <section className="relative z-10 bg-background pt-150 xl:pb-150 pb-7 rounded-t-[20px] xl:rounded-tl-[40px] xl:rounded-tr-[40px] 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] mt-[-4.5%]">
      <div className="container">
        <div className="2xl:px-[100px] md:px-4 mx-auto">
          <div className="md:px-4 mx-auto mb-[30px] md:mb-[50px] xl:mb-[124px]">
            {/* Title */}
            <motion.h1
              variants={moveRight()}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-normal text-80 text-black mb-[25px] lg:mb-[50px] leading-[1.12]"
            >
              {blogDetail.title}
            </motion.h1>
            <motion.div
              variants={moveUp()}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {/* Category & Date, Main Image */}
              <div className="text-19 font-normal flex mb-[0px] justify-between items-center">
                <div className="flex gap-[50px] items-center">
                  <span className="text-primary">
                    {blogDetail.category.name}
                  </span>
                  <span className="text-gray-para">
                    {new Date(blogDetail.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <GoShareAndroid size={22} />
              </div>
            </motion.div>
            {/* Content Rendering */}
            <BlogContentParser html={blogDetail.content} />
          </div>
        </div>
        <hr />
        <div className="2xl:px-[100px] md:px-4">
          <div className="md:px-4 mx-auto">
            <LikeSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;

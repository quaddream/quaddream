"use client";

import React from "react";
import Image from "next/image";
import { GoShareAndroid } from "react-icons/go";
import LikeSlider from "./LikeSlider";
import { motion } from "framer-motion";
import { moveRight, moveUp } from "../../motionVarients";

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  author?: string;
  content: BlogSection[];
  mainImage: string;
}

interface BlogSection {
  type: "paragraph" | "heading" | "list" | "image" | string;
  content: string | string[];
}

interface BlogDetailProps {
  blogDetail: BlogPost;
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
              <div className="text-19 font-normal flex mb-[20px] justify-between items-center">
                <div className="flex gap-[50px] items-center">
                  <span className="text-primary">{blogDetail.category}</span>
                  <span className="text-gray-para">{blogDetail.date}</span>
                </div>
                <GoShareAndroid size={22} />
              </div>
              {/* Main Image */}
              <div className="w-full lg:mb-[10px]">
                <Image
                  src={blogDetail.mainImage}
                  alt="Scaffolding"
                  width={1317}
                  height={673}
                  className="w-full max-h-[350px] lg:max-h-[673px] rounded-[16px] object-cover"
                />
              </div>
            </motion.div>
            {/* Content Rendering */}
            <article>
              {blogDetail.content.map((block, idx) => (
                <motion.div
                  key={idx}
                  variants={moveUp(idx * 0.07)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {(() => {
                    switch (block.type) {
                      case "heading":
                        return (
                          <h2 className="text-25 md:text-30 leading-[1.35] pt-[20px] lg:pt-[30px] text-black">
                            {block.content}
                          </h2>
                        );
                      case "paragraph":
                        return (
                          <p className="pt-[13px] text-19 leading-[1.7] lg:pt-[20px] text-gray-para">
                            {block.content}
                          </p>
                        );
                      case "list":
                        return Array.isArray(block.content) ? (
                          <ul className="list-disc text-19 text-gray-para pt-[20px] pl-5 space-y-1">
                            {block.content.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        ) : null;
                      case "image":
                        return (
                          <div className="pt-[20px]">
                            {typeof block.content === "string" && (
                              <Image
                                src={block.content}
                                alt="blog image"
                                width={1317}
                                height={477}
                                className="rounded-[16px] max-h-[350px] lg:max-h-[477px] object-cover"
                              />
                            )}
                          </div>
                        );
                      default:
                        return null;
                    }
                  })()}
                </motion.div>
              ))}
            </article>
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

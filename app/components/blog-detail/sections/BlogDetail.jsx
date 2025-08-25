import React from "react";
import Image from "next/image";
import { blogDetail } from "@/app/components/blog-detail/data";
import { GoShareAndroid } from "react-icons/go";
const BlogDetail = () => {
  return (
    <section className="bg-background py-150">
      <div className="container">
        <div className="container">
          {/* Title */}
          <h1 className="font-normal text-80 text-black mb-[50px] leading-[90px]">
            {blogDetail.title}
          </h1>

          {/* Category & Date */}
          <div className="text-19 font-normal flex mb-[20px] justify-between items-center">
            <div className="flex gap-[50px] items-center">
              <span className="text-primary">{blogDetail.category}</span>
              <span className="text-[#696969]">{blogDetail.date}</span>
            </div>
            <GoShareAndroid size={22} />
          </div>

          {/* Main Image */}
          <div className="w-full mb-6">
            <Image
              src={blogDetail.mainImage}
              alt="Scaffolding"
              width={1317}
              height={673}
              className="w-full max-h-[673px] rounded-[16px]"
            />
          </div>

          {/* Content Rendering */}
          <article className="space-y-6 text-[#222] text-[17px] leading-[30px]">
            {blogDetail.content.map((block, idx) => {
              if (block.type === "paragraph") {
                return <p key={idx}>{block.content}</p>;
              } else if (block.type === "heading") {
                return (
                  <h2 key={idx} className="text-xl font-semibold pt-4">
                    {block.content}
                  </h2>
                );
              } else if (
                block.type === "list" &&
                Array.isArray(block.content)
              ) {
                return (
                  <ul key={idx} className="list-disc pl-5 space-y-1">
                    {block.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </article>

          {/* Second Image */}
          {blogDetail.secondImage && (
            <div className="w-full my-8">
              <Image
                src={blogDetail.secondImage}
                alt="Scaffolding Rental"
                width={1024}
                height={600}
                className="w-full h-auto rounded-md"
              />
            </div>
          )}
        </div>
        <hr />
      </div>
    </section>
  );
};

export default BlogDetail;

"use client";

import React, { useEffect, useState } from "react";
import { BlogType } from "../data";
import Image from "next/image";
import Pagination from "@/app/components/common/Pagination";
import Select from "react-select";
import Link from "next/link";

const LatestBlog = ({ blogData }: { blogData: BlogType[] }) => {
  const categories = [
    "All",
    "Scaffolding",
    "Equipment",
    "Sustainability",
    "Industry News",
    "Safety",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage, setBlogsPerPage] = useState(9);

  useEffect(() => {
    const updateBlogsPerPage = () => {
      if (window.innerWidth < 1024) {
        setBlogsPerPage(5);
      } else {
        setBlogsPerPage(9);
      }
    };

    updateBlogsPerPage();
    window.addEventListener("resize", updateBlogsPerPage);
    return () => window.removeEventListener("resize", updateBlogsPerPage);
  }, []);

  const filteredBlogs =
    selectedCategory === "All"
      ? blogData
      : blogData.filter((blog) => blog.category === selectedCategory);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  return (
    <div className="pt-4 pb-12 lg:py-12 xl:py-[124px] lg::pb-0">
      {/* Header */}
      <h1 className="text-80 lg:leading-[1.12] mt-[8px] xl:mt-0 mb-2 text-black">
        Latest Blogs
      </h1>
      {/* Category Tabs */}
      <div className="hidden lg:block relative">
        <div className="flex justify-end space-x-[50px] text-25 leading-[40px] text-gray-para border-b border-lite-gray">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              className={`relative pb-[21px] ${
                selectedCategory === cat ? "text-black" : ""
              }`}
            >
              {cat}
              {selectedCategory === cat && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="block lg:hidden">
        <Select
          instanceId="category-select"
          options={categories.map((cat) => ({ value: cat, label: cat }))}
          value={{ value: selectedCategory, label: selectedCategory }}
          onChange={(option) => {
            if (option) {
              setSelectedCategory(option.value);
              setCurrentPage(1);
            }
          }}
          className="text-19 font-light"
          classNamePrefix="react-select"
          styles={{
            control: (base) => ({
              ...base,
              borderRadius: "8px",
              padding: "2px",
              borderColor: "#BCBCBC",
              boxShadow: "none",
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isSelected ? "#EC1C24" : "white",
              color: state.isSelected ? "white" : "black",
              cursor: "pointer",
            }),
          }}
        />
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-7 xl:gap-y-[50px] mt-[25px] xl:mt-[50px]">
        {currentBlogs.map((blog, index) => (
          <div key={index} className="rounded-md overflow-hidden" >
          <Link href={`/blog/${blog.link}`}>
          <div className="relative group">
              <Image
                src={blog.image}
                alt={blog.title}
                width={487}
                height={348}
                className="h-[300px] xl:h-[348px] w-full object-cover rounded-[16px]"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-[16px]" />
              <div className="absolute flex items-center justify-center top-[40px] right-[40px] bg-white w-[66px] h-[66px] rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/assets/images/blog/group.svg"
                  alt="Arrow"
                  width={21}
                  height={21}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-19 leading-[1.7] mt-3 mb-1 xl:my-[15px]">
                <span className="text-primary">{blog.category}</span>
                <span className="text-gray-para">{blog.date}</span>
              </div>
              <h3 className="text-22 md:text-25 xl:leading-[1.7]  text-black">
                {blog.title}
              </h3>
            </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default LatestBlog;

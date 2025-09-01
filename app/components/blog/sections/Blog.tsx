import React from "react";
import BlogCard from "./BlogCard";
import { BlogType } from "../data";
import LatestBlog from "./LatestBlogs";

const Blog = ({ blogData }: { blogData: BlogType[] }) => {
  return (
    <section className="relative z-10 bg-background pt-150 xl:pb-150 pb-7 rounded-t-2xl 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] mt-[-4.5%]">
      <div className="container">
        <BlogCard blogData={blogData} />
        <hr className="border-0 border-b border-lite-gray" />
        <LatestBlog blogData={blogData} />
        <hr className="border-0 border-b border-lite-gray" />
      </div>
    </section>
  );
};

export default Blog;

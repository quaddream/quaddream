import React from "react";
import BannerInner from "../common/BannerInner";
import { BlogType } from "../blog/type";
import BlogDetail from "./sections/BlogDetail";

const Index = ({
  blogDetail,
  allBlogs,
}: {
  blogDetail: BlogType["blogs"][number];
  allBlogs: BlogType["blogs"];
}) => {
  return (
    <>
      <BannerInner
        bannerData={{
          image: blogDetail.bannerSection.image,
          imageAlt: blogDetail.bannerSection.imageAlt,
          title: blogDetail.title,
        }}
      />
      <BlogDetail blogDetail={blogDetail} allBlogs={allBlogs} />
    </>
  );
};

export default Index;

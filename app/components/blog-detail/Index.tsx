import React from "react";
import BannerInner from "../common/BannerInner";
import { BlogType } from "../blog/type";
import BlogDetail from "./sections/BlogDetail";

const Index = ({ blogDetail }: { blogDetail: BlogType["blogs"][number] }) => {
  console.log(blogDetail, "njn");
  return (
    <>
      <BannerInner
        bannerData={{
          image: blogDetail.bannerSection.image,
          imageAlt: blogDetail.bannerSection.imageAlt,
          title: blogDetail.title,
        }}
      />
      <BlogDetail blogDetail={blogDetail} />
    </>
  );
};

export default Index;

import React from "react";
import BannerInner from "../common/BannerInner";
import { bannersection, blogData } from "./data";
import Blog from "./sections/Blog";

const Index = () => {
  return (
    <>
      <BannerInner bannerData={bannersection.data} />
      <Blog blogData={blogData} />
    </> 
  );
};

export default Index;

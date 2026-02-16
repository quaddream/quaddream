import React from "react";
import BannerInner from "../common/BannerInner";
import Blog from "./sections/Blog";
import { BlogType } from "./type";

const Index = ({data}: {data: BlogType}) => {
  console.log(data)
  return (
    <>
      <BannerInner bannerData={data.bannerSection} />
      <Blog blogData={data} />
    </> 
  );
};

export default Index;

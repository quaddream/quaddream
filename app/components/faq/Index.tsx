import React from "react";
import {bannersection} from "./data";
import BannerInner from "../common/BannerInner";
import FaqList from "./Sections/FaqList";

const Index = () => {
  return (
    <>
      <BannerInner bannerData={bannersection.data} />
      <FaqList />  
    </>
  );
};

export default Index;

import React from "react";
import {bannersection} from "./data";
import BannerInner from "../common/BannerInner";
import FaqList from "./Sections/FaqList";
import { faqContent } from "./data";

const Index = () => {
  return (
    <>
      <BannerInner bannerData={bannersection.data} />
      <FaqList faqData={faqContent} />  
    </>
  );
};

export default Index;

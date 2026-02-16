import React from "react";
import BannerInner from "../common/BannerInner";
import FaqList from "./Sections/FaqList";
import { FaqData } from "./type";

const Index = ({ data }: { data: FaqData }) => {
  return (
    <>
      <BannerInner bannerData={data.bannerSection} />
      <FaqList faqData={data} />
    </>
  );
};

export default Index;

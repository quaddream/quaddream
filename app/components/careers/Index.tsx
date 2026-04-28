import React from "react";
import BannerInner from "../common/BannerInner";
import CareerMain from "./sections/CareerMain"; 
import WhyJoinUs from "./sections/WhyJoinUs";
import JobListings from "./sections/JobListings";
import Careercta from "./sections/Careercta";
// import { bannersection, careerContent, ctaSection } from "./data"; 
import { careerType } from "./type";
const Index = ({data}:{data:careerType}) => {
  return (
    <>
      <BannerInner bannerData={data.bannerSection} />
      <CareerMain data={data.firstSection} /> 
      <WhyJoinUs data={data.secondSection}/>
      <JobListings title={data.thirdSection.title} items={data.careers}/>
      <Careercta data={data.lastSection}/>
    </>
  );
};

export default Index;

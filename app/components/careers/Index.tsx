import React from "react";
import BannerInner from "../common/BannerInner";
import CareerMain from "./sections/CareerMain"; 
import WhyJoinUs from "./sections/WhyJoinUs";
import JobListings from "./sections/JobListings";
import Careercta from "./sections/careercta";
import { bannersection, careerContent, ctaSection } from "./data"; 
const Index = () => {
  return (
    <>
      <BannerInner bannerData={bannersection.data[0]} />
      <CareerMain careerData={careerContent} /> 
      <WhyJoinUs />
      <JobListings />
      <Careercta data={ctaSection}/>
    </>
  );
};

export default Index;

import React from "react";
import BannerInner from "../common/BannerInner";
import Comprehensive from "./sections/Comprehensive";
import CoreServices from "./sections/CoreServices";
import { ProductsServicesData } from "./type";

const Index = ({ data }: { data: ProductsServicesData }) => {
  return (
    <>
      <BannerInner bannerData={data.bannerSection} />
      <Comprehensive
        firstSection={data.firstSection}
        secondSection={data.secondSection}
      />
      <CoreServices Data={data.thirdSection} />
    </>
  );
};

export default Index;

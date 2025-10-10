import React from "react";
import BannerInner from "../common/BannerInner";
import GetInTouch from "./sections/GetInTouch";
import Letstalk from "./sections/Letstalk";
import { ContactUs } from "./type";

const Index = ({ data, serviceData }: { data: ContactUs, serviceData: string[] }) => {
  console.log("serviceData", serviceData)
  return (
    <>
      <BannerInner bannerData={data.bannerSection} />
      <GetInTouch Data={data.firstSection} />
      <Letstalk Data={data.secondSection} serviceData={serviceData}/>
    </>
  );
};

export default Index;

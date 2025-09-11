import React from "react";
import BannerInner from "../common/BannerInner";
import GetInTouch from "./sections/GetInTouch";
import Letstalk from "./sections/Letstalk";
import { ContactUs } from "./type";

const Index = ({ data }: { data: ContactUs }) => {
  return (
    <>
      <BannerInner bannerData={data.bannerSection} />
      <GetInTouch Data={data.firstSection} />
      <Letstalk Data={data.secondSection} />
    </>
  );
};

export default Index;

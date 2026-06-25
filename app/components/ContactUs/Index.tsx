import React from "react";
import BannerInner from "./sections/ContactBanner";
import GetInTouch from "./sections/GetInTouch";
import Letstalk from "./sections/Letstalk";
import { ContactUs } from "./type";
import FaqList from "./sections/ContactFaq";
import { faqContent } from "./data";

const Index = ({
  data,
  serviceData,
}: {
  data: ContactUs;
  serviceData: string[];
}) => {
  return (
    <>
      <BannerInner bannerData={data.bannerSection} />
      <GetInTouch Data={data.firstSection} />
      <Letstalk Data={data.secondSection} serviceData={serviceData} id="letstalk" />
      <FaqList faqData={faqContent} />
    </>
  );
};

export default Index;

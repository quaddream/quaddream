import React from "react";
import Banner from "./sections/Banner";
import Services from "./sections/Services";
import HomeTicker from "./sections/HomeTicker";
import CTA from "../common/cta";
import IndustriesList from "./sections/IndustriesList";
import WhyChoose from "./sections/WhyChoose";
import OurPartners from "./sections/OurPartners";
import PortfolioHorizontalScroll from "./sections/PortfolioHorizontalScroll";
import { Home,FaqData } from "./type";
import { Projects } from "../projects/type";
import Scrollgsap from "./sections/Scrollgsap";
import FaqList from "./sections/FaqList";

const Index = async ({ data, pjtdata ,faqContent}: { data: Home; pjtdata: Projects ;faqContent: FaqData}) => {
  return (
    <div>
      <div className="frtsn">
        <div className="lg:sticky top-0 lg:h-screen z-10">
          <Banner data={data.bannerSection} />
        </div>

        <Scrollgsap data={data.firstSection} />
      </div>

      <HomeTicker />
      <Services data={data.servicesSection} />
      <IndustriesList data={data.industriesSection} />
      <WhyChoose data={data.fourthSection} />
      <PortfolioHorizontalScroll projectsdata={pjtdata} />
      <OurPartners {...data.partnersSection} />
      <FaqList faqData={faqContent} />
      <CTA maxwidth={19} {...data.seventhSection} />
    </div>
  );
};

export default Index;

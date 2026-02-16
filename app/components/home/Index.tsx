import React from "react";
import Banner from "./sections/Banner";
import Services from "./sections/Services";
import HomeTicker from "./sections/HomeTicker";
import CTA from "../common/cta";
import IndustriesList from "./sections/IndustriesList";
import WhyChoose from "./sections/WhyChoose";
import OurPartners from "./sections/OurPartners";
import PortfolioHorizontalScroll from "./sections/PortfolioHorizontalScroll";
import { Home } from "./type";
import { Projects } from "../projects/type";
import Scrollgsap from "./sections/Scrollgsap";

const Index = async ({ data, pjtdata }: { data: Home; pjtdata: Projects }) => {
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
      <CTA maxwidth={19} {...data.seventhSection} />
    </div>
  );
};

export default Index;

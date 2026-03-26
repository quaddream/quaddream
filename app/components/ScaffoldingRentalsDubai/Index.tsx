import React from "react";
import BannerInner from "../common/BannerInner";
import Comprehensive from "./Comprehensive";
import ScaffoldingSystems from "./SolutionsWeProvide";
import IndustriesList from "./IndustriesList";
import HowToRent from "./HowToRent";
import PortfolioHorizontalScroll from "../../components/home-old/sections/PortfolioHorizontalScroll";
import Map from "../../components/ScaffoldingRentalsDubai/Map"
import FaqList from "./FaqList";
import CTA from "./cta";
import { NewDesignType } from "./types";
import { Projects } from "../../components/projects/type";


const Index = ({ data, projectsdata }: {
  data: NewDesignType;
  projectsdata: Projects;
}) => {
  return (
    <>
      <BannerInner bannerData={data.bannerSection} />
      <Comprehensive
        secondSection={data.firstSection}
        secondTitleMaxWidth={false}
        bottomDescription={data.firstSection.description}
        bottomStats={data.firstSection.items}
      />
      <ScaffoldingSystems data={data.secondSection} />
      <HowToRent data={data.thirdSection} />
      <IndustriesList data={data.fourthSection} />
      <PortfolioHorizontalScroll projectsdata={projectsdata} title="Projects" scrollMode={false} />
      <Map />
      <FaqList faqData={data.fifthSection} bg="bg-gray-100" />
      <CTA

        mainTitle={data.sixthSection.title}
        subTitle={data.sixthSection.description}
        buttonText={data.sixthSection.buttonText}
        image={data.sixthSection.image}
        imageAlt={data.sixthSection.imageAlt} // Or add this to your data/types
      />
    </>
  );
};

export default Index;
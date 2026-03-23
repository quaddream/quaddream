import React from "react";
import BannerInner from "../common/BannerInner";
import Comprehensive from "../ProductsServices/sections/Comprehensive";
import ScaffoldingSystems from "./SolutionsWeProvide";
import IndustriesList from "./IndustriesList";
import HowToRent from "./HowToRent";
import PortfolioHorizontalScroll from "../../components/home-old/sections/PortfolioHorizontalScroll";
import Map from "../../components/ScaffoldingRentalsDubai/Map"
import FaqList from "../../components/home/sections/FaqList";
import CTA from "./cta";
import { ScaffoldingRentalsDubaiData } from "./types";
import { Projects } from "../../components/projects/type";


const Index = ({ data, projectsdata }: { 
data: ScaffoldingRentalsDubaiData;
  projectsdata: Projects;
}) => {
  return (
    <>
      <BannerInner bannerData={data.bannerSection} />
      <Comprehensive
        firstSection={data.firstSection}
        secondSection={data.secondSection}
        secondTitleMaxWidth={false}
      />
      <ScaffoldingSystems data={data.scaffoldingSystems} />
      <HowToRent data={data.howToRent} />
      <IndustriesList data={data.industriesSection} />
     <PortfolioHorizontalScroll projectsdata={projectsdata} title="Projects" />
     <Map/>
     <FaqList faqData={data.faqContent} bg="bg-gray-100" />
    <CTA 

  mainTitle={data.ctaSection.title} 
  subTitle={data.ctaSection.description} 
  buttonText={data.ctaSection.buttonText} 
  image={data.ctaSection.bgImg} 
  imageAlt="Project Contact Image" // Or add this to your data/types
/>
    </>
  );
};

export default Index;
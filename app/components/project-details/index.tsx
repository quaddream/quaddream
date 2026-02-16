import BannerInner from "@/app/components/common/BannerInner";
import Main from "./sections/Main";
import Highlights from "./sections/Highlights";
import Media from "./sections/Media";
import ExploreMore from "./sections/ExploreMore";
import { Projectsdetails } from "./type";
import { Projects } from "../projects/type";

const Index = async ({
  data,
  pjtdata,
}: {
  data: Projectsdetails;
  pjtdata: Projects;
}) => { 
  return (
    <>
      <BannerInner  
       bannerData={{
        image: data.bannerSection.image,
        imageAlt: data.bannerSection.imageAlt,
        title: data.firstSection.title,
      }}/>
      <Main data={data} />
      <Highlights data={data.fourthSection} />
      <Media data={data.images} />
      <ExploreMore data={pjtdata} />
    </>
  );
};

export default Index;

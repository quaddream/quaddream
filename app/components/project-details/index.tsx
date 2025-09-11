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
  console.log(data);
  return (
    <>
      <BannerInner bannerData={data.bannerSection} />
      <Main data={data} />
      <Highlights data={data.fourthSection} />
      <Media data={data.images} />
      <ExploreMore data={pjtdata} />
    </>
  );
};

export default Index;

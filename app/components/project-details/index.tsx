import BannerInner from "@/app/components/common/BannerInner";
import { projectDetails,FeaturedPjtdata } from "./data";
import Main from "./sections/Main";
import Highlights from "./sections/Highlights"; 
import Media from "./sections/Media";
import { mediaData } from "./data";
import ExploreMore from "./sections/ExploreMore";
const Index = () => {
  return (
    <>
      <BannerInner bannerData={projectDetails.data} />
      <Main />
      <Highlights />
      <Media  qaData={mediaData}/> 
      <ExploreMore Data={FeaturedPjtdata.data}/>
    </>
  );
};

export default Index;
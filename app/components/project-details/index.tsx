import BannerInner from "@/app/components/common/BannerInner";
import { projectDetails } from "./data";
import Main from "./sections/Main";
import Highlights from "./sections/Highlights";
const Index = () => {
  return (
    <>
      <BannerInner bannerData={projectDetails.data} />
      <Main />
      <Highlights />
    </>
  );
};

export default Index;
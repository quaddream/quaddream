import BannerInner from "../common/BannerInner";
import SitemapPage from "./Sitemap";
import { SitemapResponse } from "./SiteType";

const Index = ({ data }: { data: SitemapResponse }) => {
  console.log(data, "dsd");
  return (
    <>
      <BannerInner
        bannerData={{
          image: data.bannerSection.image,
          imageAlt: data.bannerSection.imageAlt,
          title: data.bannerSection.title,
        }}
      />
      <SitemapPage data={data} />
    </>
  );
};

export default Index;

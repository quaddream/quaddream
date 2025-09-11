import BannerInner from "../common/BannerInner";
import Main from "./Main";
import ProductsList from "./ProductsList";
import WhatYouGet from "./WhatYouGet";
import SaftySection from "./SaftySection";
import { ProductsServicesData } from "../ProductsServices/type";

const Index = ({
  service,
}: {
  service: ProductsServicesData["thirdSection"]["items"][number];
}) => {
  return (
    <>
      <BannerInner
        bannerData={{
          image: service.bannerSection.image,
          imageAlt: service.bannerSection.imageAlt,
          title: service.firstSection.title,
        }}
      />
      <Main Data={service.firstSection} />
      <WhatYouGet Data={service.secondSection} />
      <ProductsList Data={service.productSection} />
      <SaftySection Data={service.fourthSection} />
    </>
  );
};

export default Index;

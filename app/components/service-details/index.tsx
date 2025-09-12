import BannerInner from "../common/BannerInner";
import Main from "./Main";
import ProductsList from "./ProductsList";
import WhatYouGet from "./WhatYouGet";
import SaftySection from "./SaftySection";
import { ProductsServicesData, WhatYouGetType } from "../ProductsServices/type";

const Index = ({
  service,
  whatyougetData,
}: {
  service: ProductsServicesData["thirdSection"]["items"][number];
  whatyougetData: WhatYouGetType;
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
      <WhatYouGet Data={whatyougetData} />
      {service.productSection.items.length > 0 && (
        <ProductsList Data={service.productSection} />
      )}
      <SaftySection Data={service.fourthSection} />
    </>
  );
};

export default Index;

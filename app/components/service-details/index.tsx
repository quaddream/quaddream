import BannerInner from "../common/BannerInner";
import { serviceDetails } from "./data";
import Main from "./Main";
import ProductsList from "./ProductsList";
import WhatYouGet from "./WhatYouGet";
import SaftySection from "./SaftySection";
const Index = () => {
  return ( 
    <>
     <BannerInner bannerData={serviceDetails.data} />
     <Main/>
     <WhatYouGet/>
     <ProductsList/>
     <SaftySection/>
    </>
   );
}
 
export default Index;
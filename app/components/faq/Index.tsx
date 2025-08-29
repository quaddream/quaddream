import React from "react";
import {bannersection} from "./data";
import BannerInner from "../common/BannerInner";

const Index = () => {
  return (
    <>
      <BannerInner bannerData={bannersection.data} />
    </>
  );
};

export default Index;

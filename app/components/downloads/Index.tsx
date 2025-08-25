import React from "react";
import DownloadList from "./sections/DownloadList";
import {bannersection} from "./data";
import BannerInner from "../common/BannerInner";

const Index = () => {
  return (
    <>
      <BannerInner bannerData={bannersection.data} /> 
      <DownloadList />
    </>
  );
};

export default Index;

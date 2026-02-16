import React from "react";
import DownloadList from "./sections/DownloadList";
import BannerInner from "../common/BannerInner";
import {DownloadsData} from "./type";

const Index = ({data}: {data: DownloadsData}) => {
  return (
    <>
      <BannerInner bannerData={data} /> 
      <DownloadList Data={data.categories} />
    </>
  );
};

export default Index;

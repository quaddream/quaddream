import React from "react";
import {bannersection,mediaGalleryData} from "./data";
import BannerInner from "../common/BannerInner";
import MediaGallery from "./sections/MediaGallery";

const Index = () => {
  return (
    <>
      <BannerInner bannerData={bannersection.data} /> 
      <MediaGallery galleryData={mediaGalleryData} />
    </>
  );
};

export default Index;

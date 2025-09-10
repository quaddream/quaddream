import React from "react";
import BannerInner from "../common/BannerInner";
import MediaGallery from "./sections/MediaGallery";
import { MediaGalleryData } from "./type";

const Index = ({ data }: { data: MediaGalleryData }) => {
  return (
    <>
      <BannerInner bannerData={data.bannerSection} />
      <MediaGallery galleryData={data} />
    </>
  );
};

export default Index;

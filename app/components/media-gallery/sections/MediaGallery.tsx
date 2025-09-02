"use client";

import Image from "next/image";
import React, { useState } from "react";
import MediaGalleryModal from "./MediaGalleryModal";

export interface GalleryItem {
  id: number;
  category: string;
  images: string[];
}

interface MediaGalleryProps {
  galleryData: {
    title: string;
    description: string;
    gallery: GalleryItem[];
  };
}

const MediaGallery: React.FC<MediaGalleryProps> = ({ galleryData }) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  return (
    <section className="relative bg-background py-124 xl:py-150 rounded-t-2xl 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] mt-[-4.5%] overflow-hidden">
      <div className="container">
        {/* Title & Description */}
        <div className="mb-[20px] xl:mb-[50px] ">
          <h1 className="text-80 lg:leading-[90px] leading-[50px] mb-5 md:mb-8 lg:mb-12 text-black">
            {galleryData.title}
          </h1>
          <p className="text-gray-para text-19 leading-[32px] mb-[15px] xl:mb-[50px]">
            {galleryData.description}
          </p>
          <hr className="border-0 border-b border-lite-gray" />
        </div>
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[15px] lg:gap-[20px] xl:gap-[30px]">
          {galleryData.gallery.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-[16px]"
              onClick={() => setSelectedItem(item)}
            >
              {/* Main Image */}
              <Image
                src={item.images[0]}
                alt={item.category}
                width={487}
                height={573}
                className="w-full h-[480px] lg:h-[503px] 2xl:h-[573px] object-cover"
              />
              {/* Black Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100 rounded-[16px]" />
              {/* Red gradient overlay on hover */}
              <div className="absolute inset-0 bg-primary bg-opacity-100 opacity-0 group-hover:opacity-75 transition-opacity duration-300 will-change-opacity"></div>
              {/* Arrow icon top-right */}
              <div className="absolute flex items-center justify-center top-[30px] 2xl:right-[40px] right-[30px] bg-white w-[66px] h-[66px] rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 will-change-opacity">
                <Image
                  src="/assets/images/blog/Group.svg"
                  alt="Arrow"
                  width={21}
                  height={21}
                />
              </div>
              {/* Category & small avatars (mocked) */}
              <div className="absolute bottom-0 text-white font-medium w-full 2xl:p-[40px] p-[30px] will-change-opacity">
                <div className="flex justify-between gap-[10px] items-end">
                  <h3 className="2xl:text-33 text-30 leading-[40px] text-white">
                    {item.category}
                  </h3>
                  <div className="flex -space-x-2 items-center">
                    {/* First 3 images */}
                    {item.images.slice(0, 3).map((img, idx) => (
                      <div
                        key={idx}
                        className="w-[34px] h-[34px] rounded-full overflow-hidden border-2 border-white will-change-opacity"
                      >
                        <Image
                          src={img}
                          alt={`preview-${idx}`}
                          width={28}
                          height={28}
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                    ))}
                    {/* Fourth circle */}
                    {item.images.length <= 4 ? (
                      item.images.slice(3, 4).map((img, idx) => (
                        <div
                          key={idx}
                          className="w-[34px] h-[34px] rounded-full overflow-hidden border-2 border-white will-change-opacity"
                        >
                          <Image
                            src={img}
                            alt={`preview-${idx}`}
                            width={24}
                            height={24}
                            className="object-cover w-full h-full rounded-full"
                          />
                        </div>
                      ))
                    ) : (
                      <div className="w-[34px] h-[34px] rounded-full bg-primary group-hover:bg-white group-hover:text-primary border-2 border-white flex items-center justify-center text-[16px] leading-[27px] text-white">
                        +4
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedItem && (
          <MediaGalleryModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </div>
    </section>
  );
};

export default MediaGallery;

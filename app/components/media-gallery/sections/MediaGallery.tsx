"use client";

import Image from "next/image";
import React, { useState } from "react";
import MediaGalleryModal from "./MediaGalleryModal";
import { AnimatePresence, motion } from "framer-motion";
import { moveUp } from "../../motionVarients";
import { MediaGalleryData } from "../type";

interface MediaGalleryProps {
  galleryData: MediaGalleryData;
}

const MediaGallery: React.FC<MediaGalleryProps> = ({ galleryData }) => {
  const [selectedItem, setSelectedItem] = useState<
    MediaGalleryData["gallery"][number] | null
  >(null);
  return (
    <section className="relative py-124 xl:py-150 rounded-t-[20px] xl:rounded-tl-[40px] xl:rounded-tr-[40px] 2xl:rounded-tl-[80px] 2xl:rounded-tr-[80px] mt-[-4.5%] z-10 bg-white overflow-hidden">
      <div className="container">
        {/* Title & Description */}
        <div className="mb-6 xl:mb-12 ">
          <motion.h1
            variants={moveUp(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-80  leading-[1.13] mb-5 md:mb-8 lg:mb-12 text-black"
          >
            {galleryData.firstSection.title}
          </motion.h1>
          <motion.p
            variants={moveUp(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-gray-para text-19 leading-[1.7] mb-5 xl:mb-[50px] max-w-[105ch]"
          >
            {galleryData.firstSection.description}
          </motion.p>
          <motion.hr
            variants={moveUp(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="border-0 border-b border-lite-gray"
          />
        </div>
        {/* Gallery Grid */}
        <motion.div
          variants={moveUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[15px] lg:gap-[20px] xl:gap-[30px]"
        >
          {galleryData.gallery.map((item, index) => (
            <motion.div
              key={index}
              variants={moveUp(index * 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-[16px]"
              onClick={() => setSelectedItem(item)}
            >
              {/* Main Image */}
              <Image
                src={item.images[0]}
                alt={item.title}
                width={487}
                height={573}
                className="w-full h-[300px] md:h-[400px] lg:h-[503px] 2xl:h-[573px] object-cover"
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
                  <h3 className="2xl:text-33 text-25 leading-[40px] text-white">
                    {item.title}
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
            </motion.div>
          ))}
        </motion.div>
        <AnimatePresence>
          {selectedItem && (
            <MediaGalleryModal
              item={selectedItem}
              onClose={() => setSelectedItem(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MediaGallery;

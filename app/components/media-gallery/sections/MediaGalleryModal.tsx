"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GalleryItem } from "./MediaGallery";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

interface MediaGalleryModalProps {
  item: GalleryItem;
  onClose: () => void;
}

const MediaGalleryModal: React.FC<MediaGalleryModalProps> = ({
  item,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
  };

  const selectImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80">
      <div className="container overflow-hidden">
        {/* Overlay */}
        <div
          className="absolute bg-black/80 inset-0 cursor-pointer"
          onClick={onClose}
        ></div>
        {/* Modal Content */}
        <div className="relative z-10 w-full overflow-y-auto">
          {/* Header with centered title and right-aligned close button */}
          <div className="relative flex items-center justify-center mb-[15px]">
            {/* Centered Title */}
            <div className="absolute left-1/2 transform -translate-x-1/2 text-white text-25 leading-[40px] md:text-center w-full">
              {item.category}
            </div>

            {/* Close Button on the right */}
            <button
              onClick={onClose}
              className="ml-auto text-white text-[40px] font-light z-20"
            >
              &times;
            </button>
          </div>

          {/* Image Viewer */}
          <div className="rounded-[12px] flex flex-col items-center justify-center relative w-full">
            {/* Navigation Buttons */}
            <button
              onClick={goPrev}
              className="absolute left-0 lg:top-1/2 top-0 lg:-translate-y-1/2 translate-y-0"
            >
              <SlArrowLeft className="text-white hover:text-primary transition-all duration-300 h-[20px] lg:h-[28px] w-[20px] lg:w-[28px]" />
            </button>
            {/* Image Container */}
            <div className="relative mt-10 lg:mt-0 w-full lg:w-[800px] rounded-[12px] xl:w-[1000px] 2xl:w-[1264px] h-[450px] max-h-[640px] flex items-center justify-center">
              <Image
                src={item.images[currentIndex]}
                alt={`slide-${currentIndex}`}
                fill
                className="object-cover rounded-[12px]"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
            <button
              onClick={goNext}
              className="absolute right-0 lg:top-1/2 top-0 lg:-translate-y-1/2 translate-y-0"
            >
              <SlArrowRight className="text-white hover:text-primary transition-all duration-300 h-[20px] lg:h-[28px] w-[20px] lg:w-[28px]" />
            </button>
          </div>
          {/* Thumbnails */}
          <div className="flex flex-wrap justify-center items-center mt-[15px] lg:mt-[30px] gap-[10px]">
            {item.images.map((img, idx) => {
              const isActive = currentIndex === idx;

              return (
                <div
                  key={idx}
                  onClick={() => selectImage(idx)}
                  className={`relative flex items-center justify-center rounded-[9px] overflow-hidden cursor-pointer transition-all duration-200`}
                  style={{ height: "73px" }}
                >
                  <div
                    className="relative rounded-[9px] w-full h-full flex items-center justify-center"
                    style={{
                      width: isActive ? "110px" : "80px",
                      height: isActive ? "73px" : "54px",
                      margin: "auto",
                      transition: "width 0.2s, height 0.2s",
                    }}
                  >
                    <Image
                      src={img}
                      alt={`thumb-${idx}`}
                      width={isActive ? 110 : 80}
                      height={isActive ? 73 : 54}
                      className="object-cover rounded-[9px] w-full h-full"
                    />
                    {!isActive && (
                      <div className="absolute inset-0 bg-white/60 rounded-[9px] pointer-events-none transition-opacity duration-200" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaGalleryModal;

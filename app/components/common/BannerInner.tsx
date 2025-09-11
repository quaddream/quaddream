"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type Navigation = {
  title: string;
  slug: string;
};

type BannerSection = {
  image: string;
  imageAlt: string;
  title: string;
};

type BannerSectionProps = {
  banner: string;
  bannerAlt: string;
  pageTitle: string;
};

type BannerProps = {
  bannerData: BannerSection | BannerSectionProps;
};

const BannerInner: React.FC<BannerProps> = ({ bannerData }) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const image = "image" in bannerData ? bannerData.image : bannerData.banner;
  const imageAlt =
    "imageAlt" in bannerData ? bannerData.imageAlt : bannerData.bannerAlt;
  const title = "title" in bannerData ? bannerData.title : bannerData.pageTitle;

  // Helper function to truncate string
  const truncate = (str: string, maxLength: number) =>
    str.length > maxLength ? str.slice(0, maxLength) + "..." : str;

  // Build breadcrumb items
  const navigation: Navigation[] = [
    { title: "Home", slug: "/" },
    ...segments.map((seg, i) => {
      const slug = "/" + segments.slice(0, i + 1).join("/");

      // If it's the last segment, replace with API title
      if (i === segments.length - 1) {
        return { title: title || seg, slug: "" }; // last one not clickable
      }

      // Capitalize first letter for parent segments
      return { title: seg.charAt(0).toUpperCase() + seg.slice(1), slug };
    }),
  ];

  return (
    <section
      className="pt-[150px] lg:pt-[280px] xl:pt-[300px] 2xl:pt-[349px] pb-6 sm:pb-10 md:pb-[70px] bg-image bg-cover bg-center bg-no-repeat relative z-[1] hero overlaybanner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <img src={image} alt={imageAlt} className="hidden" />
      <div className="relative z-10">
        <div className="container">
          {title && (
            <div>
              {/* Page Title */}
              <motion.h1
                className="text-white text-75 leading-[1.07] pb-3 font-normal inline-block"
                initial={{ opacity: 0, x: -50, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, x: 0, clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {title}
              </motion.h1>

              {/* Border */}
              <motion.div
                className="h-[.5px] bg-white/50"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                style={{ transformOrigin: "left center" }}
              />
            </div>
          )}

          {/* Breadcrumb */}
          <div
            className={`pb-3 lg:pb-15 xl:pb-19 ${
              title ? "pt-5 lg:pt-16 xl:pt-16 2xl:pt-[135px]" : ""
            }`}
          >
            <ul className="flex gap-2 md:gap-3 items-center">
              {navigation.map((nav, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`${nav.slug ? "text-primary" : "text-lite-gray"}`}
                >
                  {nav.slug ? (
                    <div className="flex items-center gap-2 md:gap-3">
                      <Link
                        href={nav.slug}
                        className="text-16 md:text-19 max-w-[210px] md:max-w-none overflow-hidden text-ellipsis whitespace-nowrap block"
                      >
                        {nav.title}
                      </Link>
                      <p className="w-[6px] h-[6px] bg-[#D9D9D9] rounded-full m-0"></p>
                    </div>
                  ) : (
                    <span className="text-16 md:text-19 max-w-[210px] md:max-w-none overflow-hidden text-ellipsis whitespace-nowrap block">
                      {nav.title}
                    </span>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerInner;

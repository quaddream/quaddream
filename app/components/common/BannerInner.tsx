"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";
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

type BannerProps = {
  bannerData: BannerSection;
};

const BannerInner: React.FC<BannerProps> = ({ bannerData }) => {
  const sections = Array.isArray(bannerData) ? bannerData : [bannerData];

  const mappedData = sections.map((item) => ({
    title: item.title,
    bgImg: item.image,
    navigation: [
      { title: "Home", slug: "/" },
      { title: item.title, slug: "" },
    ] as Navigation[],
  }));

  return (
    <section
      className="pt-[150px] lg:pt-[280px] xl:pt-[300px] 2xl:pt-[349px] pb-6 sm:pb-10 md:pb-[70px] bg-image bg-cover bg-center bg-no-repeat relative z-[1] hero overlaybanner"
      style={{ backgroundImage: `url(${mappedData[0].bgImg})` }}
    >
      <div className="relative z-10">
        <div className="container">
          {mappedData[0].title && (
            <div>
              {/* Text reveal */}
              <motion.h1
                className="text-white text-75 leading-[1.07] pb-3 font-normal inline-block"
                initial={{ opacity: 0, x: -50, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, x: 0, clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {mappedData[0].title}
              </motion.h1>

              {/* Border draw effect */}
              <motion.div
                className="h-[.5px] bg-white/50"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                style={{ transformOrigin: "left center" }}
              />
            </div>
          )}

          <div
            className={`pb-3 lg:pb-15 xl:pb-19 ${
              mappedData[0].title ? "pt-5 lg:pt-16 xl:pt-16 2xl:pt-[135px]" : ""
            }`}
          >
            <ul className="flex gap-2 md:gap-3 items-center">
              {mappedData.map((item) =>
                item.navigation.map((nav, navIndex) => (
                  <motion.li
                    key={navIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: navIndex * 0.2, duration: 0.6 }}
                    className={`${nav.slug ? "text-primary" : "text-lite-gray"}`}
                  >
                    {nav.slug ? (
                      <div className="flex items-center gap-2 md:gap-3">
                        <Link href={nav.slug} className="text-16 md:text-19">
                          {nav.title}
                        </Link>
                        <p className="w-[6px] h-[6px] bg-[#D9D9D9] rounded-full m-0"></p>
                      </div>
                    ) : (
                      <span className="text-16 md:text-19">{nav.title}</span>
                    )}
                  </motion.li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerInner;

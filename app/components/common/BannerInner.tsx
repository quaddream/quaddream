"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";

type Navigation = {
  title: string;
  slug: string;
};

type ServicesItem = {
  title?: string;
  bgImg: string;
  navigation: Navigation[];
};

type BannerProps = {
  bannerData: ServicesItem[];
};

const BannerInner: React.FC<BannerProps> = ({ bannerData }) => {
  return (
    <section
      className=" pt-[150px] lg:pt-[280px] xl:pt-[349px] pb-6 sm:pb-10 md:pb-[70px] bg-image bg-cover bg-center bg-no-repeat relative z-[1] hero overlaybanner "
      style={{ backgroundImage: `url(${bannerData[0].bgImg})` }}
    >
      <div className="relative z-10">
        <div className="container">
          {bannerData[0].title && (
            <div>
              <h1 className="text-white text-75 leading-[1.07] pb-3 border-b-[.5px] border-white font-normal">
                {bannerData[0].title}
              </h1>
            </div>
          )}

          <div className="pt-10 lg:pt-16 xl:pt-[135px] pb-10 lg:pb-15 xl:pb-[100px]">
            <ul className="flex gap-4 items-center">
              {bannerData.map((item) =>
                item.navigation.map((nav, navIndex) => (
                  <li
                    key={navIndex}
                    className={` ${
                      nav.slug ? "text-primary" : "text-lite-gray"
                    }`}
                  >
                    {nav.slug && (
                      <div className="flex items-center gap-3">
                        <Link href={nav.slug}>{nav.title}</Link>
                        <p className="w-[6px] h-[6px] bg-[#D9D9D9] rounded-full m-0"></p>
                      </div>
                    )}

                    {!nav.slug && nav.title}
                  </li>
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

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
  insideCategoryTitle?: string;
};

const BannerInner: React.FC<BannerProps> = ({ bannerData, insideCategoryTitle }) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const isFaq = pathname.includes("faq");

  const image = "image" in bannerData ? bannerData.image : bannerData.banner;
  const imageAlt =
    "imageAlt" in bannerData ? bannerData.imageAlt : bannerData.bannerAlt;
  const title = "title" in bannerData ? bannerData.title : bannerData.pageTitle;

  // Helper function to format slug to title
  const formatTitle = (slug: string) =>
    slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  // Build breadcrumb items
  const navigation: Navigation[] = [
    { title: "Home", slug: "/" },
    ...segments.map((seg, i) => {
      const slug = "/" + segments.slice(0, i + 1).join("/");
      const segmentTitle = formatTitle(seg);

      if (i === segments.length - 1) {
        return { title: title || segmentTitle, slug: "" };
      }
      return { title: segmentTitle, slug };
    }),
  ];

  // Decide max-width class based on index
  const getMaxWidthClass = (index: number, navLength: number) => {
    if (index === 0) return "max-w-none"; // Home always full
    if (index === 1) {
      return navLength > 2 ? "max-w-[10ch] md:max-w-none" : "max-w-none"; // 2nd cut only if 3rd exists
    }
    return "max-w-[18ch] md:max-w-none"; // 3rd+ always cut
  };

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
              {!isFaq && <motion.h1
                className="text-white text-75 leading-[1.07] pb-3 font-normal inline-block"
                initial={{ opacity: 0, x: -50, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, x: 0, clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {title}
              </motion.h1>}

              {isFaq && <motion.p
                className="text-white text-75 leading-[1.07] pb-3 font-normal inline-block"
                initial={{ opacity: 0, x: -50, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, x: 0, clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {title}
              </motion.p>}

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
          {insideCategoryTitle && (
            <div>
              {/* Page Title */}
              <motion.h1
                className="text-white text-75 leading-[1.07] pb-3 font-normal inline-block"
                initial={{ opacity: 0, x: -50, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, x: 0, clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {insideCategoryTitle}
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
            className={`pb-3 lg:pb-15 xl:pb-19 ${title ? "pt-5 lg:pt-16 xl:pt-16 2xl:pt-[135px]" : ""
              }`}
          >
            <ul className="flex gap-2 md:gap-3 items-center overflow-hidden">
              {navigation.map((nav, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`${nav.slug ? "text-primary" : "text-lite-gray"} flex-shrink-0`}
                >
                  {nav.slug ? (
                    <div className="flex items-center gap-2 md:gap-3 overflow-hidden">
                      <Link
                        href={nav.slug}
                        className={`text-16 md:text-19 overflow-hidden text-ellipsis whitespace-nowrap block ${getMaxWidthClass(index, navigation.length)}`}
                      >
                        {nav.title}
                      </Link>
                      <p className="w-[6px] h-[6px] bg-[#D9D9D9] rounded-full m-0 flex-shrink-0"></p>
                    </div>
                  ) : (
                    <span
                      className={`text-16 md:text-19 overflow-hidden text-ellipsis whitespace-nowrap block ${getMaxWidthClass(index, navigation.length)}`}
                    >
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

import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  reactStrictMode: false,

  /* Cache headers */
  async headers() {
    return [
      {
        source: "/:path*\\.(svg|webp|avif|gif|jpg|jpeg|png|ico|woff|woff2|ttf|otf|js|css)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },


  /* config options here */
  // images: {
  //   dangerouslyAllowSVG:true,
  //   unoptimized:true,
  //   domains: ["dl.dropboxusercontent.com","plus.unsplash.com"] // Add Dropbox domain here
  // },


  experimental: {
    optimizeCss: true,
    // optimizePackageImports: ["gsap", "swiper"],
  },
  // compiler: {
  //   removeConsole: process.env.NODE_ENV === "production",
  // },
  images: {
    dangerouslyAllowSVG: true,

    // ✅ allow external images (modern way)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dl.dropboxusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
    ],

    // ✅ modern formats
    formats: ["image/webp", "image/avif"],

    // ✅ responsive breakpoints
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // ✅ cache optimization
    minimumCacheTTL: 60,
  },



  async redirects() {
    return [
      {
        source: "/about", // The old URL path
        destination: "/about-us", // The new URL path
        permanent: true, // Set to true for 301 (permanent) redirect
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/products-and-services/equipment-rentals", // The old URL path
        destination: "/products-and-services/construction-equipment-rental-dubai-uae", // The new URL path
        permanent: true, // Set to true for 301 (permanent) redirect
      },
      {
        source: "/products-and-services/scaffolding-rental", // The old URL path
        destination: "/products-and-services/scaffolding-rental-dubai-uae", // The new URL path   
        permanent: true, // Set to true for 301 (permanent) redirect
      },
      {
        source: "/products-and-services/scaffolding-contracting", // The old URL path
        destination: "/products-and-services/scaffolding-contracting-in-dubai-uae", // The new URL path
        permanent: true, // Set to true for 301 (permanent) redirect
      },
      {
        source: "/products-and-services/cuplock-scaffolding-aluminum-mobile-tower-rental-sales", // The old URL path
        destination: "/products-and-services/cuplock-scaffolding-rental-dubai-uae", // The new URL path
        permanent: true, // Set to true for 301 (permanent) redirect
      },
      {
        source: "/products-and-services/scaffolding-formwork-rental", // The old URL path
        destination: "/products-and-services/formwork-rental-in-dubai-uae", // The new URL path
        permanent: true, // Set to true for 301 (permanent) redirect
      },
      {
        source: "/products-and-services/construction-equipment-rentals", // The old URL path
        destination: "/products-and-services/construction-equipment-rental-in-dubai", // The new URL path
        permanent: true, // Set to true for 301 (permanent) redirect
      },
      {
        source: "/products-and-services/construction-equipment-rental-in-dubai", // The old URL path
        destination: "/products-and-services/construction-equipment-rental-dubai-uae", // The new URL path
        permanent: true, // Set to true for 301 (permanent) redirect
      },
      {
        source: "/products-and-services/scaffolding-contracting-in-dubai-and-across-the-uae", // The old URL path
        destination: "/products-and-services/scaffolding-contracting-in-dubai-uae", // The new URL path
        permanent: true, // Set to true for 301 (permanent) redirect
      },
      {
        source: "/products-and-services/aluminum-mobile-scaffolding-tower-rental", // The old URL path
        destination: "/products-and-services/aluminum-mobile-scaffolding-tower-rental-dubai-uae", // The new URL path
        permanent: true, // Set to true for 301 (permanent) redirect
      },
      {
        source: "/products-and-services/cuplock-scaffolding-rental-dubai", // The old URL path
        destination: "/products-and-services/cuplock-scaffolding-rental-dubai-uae", // The new URL path
        permanent: true, // Set to true for 301 (permanent) redirect
      },
      {
        source: "/products-and-services/scaffolding-rental-dubai", // The old URL path
        destination: "/products-and-services/scaffolding-rental-dubai-uae", // The new URL path
        permanent: true, // Set to true for 301 (permanent) redirect
      },
      {
        source: "/aluminum-mobile-tower-sale-and-rentals",
        destination: "/products-and-services/aluminum-mobile-scaffolding-tower-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/author/seo",
        destination: "/",
        permanent: true,
      },
      {
        source: "/author/seo/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/author/seo/page/2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/building-the-future-aluminum-contracting-scaffolding-and-formwork-in-the-uae",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/building-the-future-aluminum-contracting-scaffolding-and-formwork-in-the-uae/feed",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/category/blog",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/category/blog/feed",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/category/blog/page/2",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/certificates",
        destination: "/",
        permanent: true,
      },
      {
        source: "/comments/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/cuplock-scaffolding-strong-support-for-heavy-duty-construction-work",
        destination: "/products-and-services/cuplock-scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/cuplock-scaffolding-strong-support-for-heavy-duty-construction-work/feed",
        destination: "/products-and-services/cuplock-scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/docs/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/foldable-aluminum-scaffolding-the-smart-choice-for-quick-and-safe-access",
        destination: "/products-and-services/aluminum-mobile-scaffolding-tower-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/foldable-aluminum-scaffolding-the-smart-choice-for-quick-and-safe-access/feed",
        destination: "/products-and-services/aluminum-mobile-scaffolding-tower-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/gallery",
        destination: "/media-gallery",
        permanent: true,
      },
      {
        source: "/how-cuplock-scaffolding-improves-safety-and-handles-heavy-load-capacity",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/how-cuplock-scaffolding-improves-safety-and-handles-heavy-load-capacity/feed",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/how-to-choose-the-right-scaffolding-system-for-dubai-construction-projects",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/how-to-choose-the-right-scaffolding-system-for-dubai-construction-projects/feed",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/products",
        destination: "/products-and-services",
        permanent: true,
      },
      {
        source: "/products/aluminium-foldable-tower",
        destination: "/products-and-services/aluminum-mobile-scaffolding-tower-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/products/aluminium-mobile-tower",
        destination: "/products-and-services/aluminum-mobile-scaffolding-tower-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/products/cuplock-scaffolding-sales-and-rentals",
        destination: "/products-and-services/cuplock-scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/products/scaffolding-coupler-fitting",
        destination: "/products-and-services",
        permanent: true,
      },
      {
        source: "/products/scaffolding-coupler-fittings",
        destination: "/products-and-services",
        permanent: true,
      },
      {
        source: "/products/scaffolding-cuplock-system",
        destination: "/products-and-services/cuplock-scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/products/scaffolding-flanks-boards",
        destination: "/products-and-services",
        permanent: true,
      },
      {
        source: "/products/scaffolding-suppliers-in-uae-leading-scaffolding-suppliers-in-uae",
        destination: "/products-and-services/scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/products-and-services",
        permanent: true,
      },
      {
        source: "/services/aluminum-mobile-tower-sale-and-rentals",
        destination: "/products-and-services/aluminum-mobile-scaffolding-tower-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/services/scaffolding-contracting",
        destination: "/products-and-services/scaffolding-contracting-in-dubai-uae",
        permanent: true,
      },
      {
        source: "/services/scaffolding-formwork-rentals",
        destination: "/products-and-services/formwork-rental-in-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/aluminium-contracting-companies-in-uae",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/aluminium-contracting-companies-in-uae/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/aluminium-scaffolding-suppliers-in-uae",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/aluminium-scaffolding-suppliers-in-uae/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/aluminum-scaffolding-in-the-uae",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/aluminum-scaffolding-in-the-uae/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/aluminum-scaffolding-platform",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/aluminum-scaffolding-platform/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/aluminum-scaffolding-platforms",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/aluminum-scaffolding-platforms/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/aluminum-scaffolding-suppliers-in-dubai",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/aluminum-scaffolding-suppliers-in-dubai/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/aluminum-scaffolding-suppliers-in-the-uae",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/aluminum-scaffolding-suppliers-in-the-uae/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/aluminum-tower-scaffolding",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/aluminum-tower-scaffolding/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/board-retaining-coupler",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/board-retaining-coupler/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/construction-scaffolding-for-rent",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/construction-scaffolding-for-rent/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/coupler-scaffolding-systems",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/coupler-scaffolding-systems/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/cuplock-scaffolding",
        destination: "/products-and-services/cuplock-scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/cuplock-scaffolding/feed",
        destination: "/products-and-services/cuplock-scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/cuplock-scaffolding-components",
        destination: "/products-and-services/cuplock-scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/cuplock-scaffolding-components/feed",
        destination: "/products-and-services/cuplock-scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/cuplock-scaffolding-load-capacity",
        destination: "/products-and-services/cuplock-scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/cuplock-scaffolding-load-capacity/feed",
        destination: "/products-and-services/cuplock-scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/cuplock-system-scaffolding",
        destination: "/products-and-services/cuplock-scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/cuplock-system-scaffolding/feed",
        destination: "/products-and-services/aluminum-mobile-scaffolding-tower-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/foldable-aluminum-scaffolding",
        destination: "/products-and-services/aluminum-mobile-scaffolding-tower-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/foldable-aluminum-scaffolding/feed",
        destination: "/products-and-services/aluminum-mobile-scaffolding-tower-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/folding-aluminum-platform",
        destination: "/products-and-services/aluminum-mobile-scaffolding-tower-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/folding-aluminum-platform/feed",
        destination: "/products-and-services/formwork-rental-in-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/formwork-suppliers-in-the-uae",
        destination: "/products-and-services/formwork-rental-in-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/formwork-suppliers-in-the-uae/feed",
        destination: "/products-and-services/formwork-rental-in-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/formwork-suppliers-in-uae",
        destination: "/products-and-services/formwork-rental-in-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/formwork-suppliers-in-uae/feed",
        destination: "/products-and-services/aluminum-mobile-scaffolding-tower-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/portable-scaffold-tower",
        destination: "/products-and-services/aluminum-mobile-scaffolding-tower-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/portable-scaffold-tower/feed",
        destination: "/products-and-services/scaffolding-contracting-in-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/scaffold-contracting-services",
        destination: "/products-and-services/scaffolding-contracting-in-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/scaffold-contracting-services/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/scaffold-contracting-services/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/scaffold-swivel-coupler",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/scaffold-swivel-coupler/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/scaffolding-and-formwork-companies-in-the-uae",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/scaffolding-and-formwork-companies-in-the-uae/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/scaffolding-companies-in-dubai",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/scaffolding-companies-in-dubai/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/scaffolding-double-coupler",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/scaffolding-double-coupler/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/scaffolding-for-rent-in-dubai",
        destination: "/products-and-services/scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/scaffolding-for-rent-in-dubai/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/scaffolding-manufacturers-in-the-uae",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/scaffolding-manufacturers-in-the-uae/feed",
        destination: "/products-and-services/scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/scaffolding-rental-and-installation",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/scaffolding-rental-and-installation/feed",
        destination: "/products-and-services/scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/scaffolding-rental-services",
        destination: "/products-and-services/scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/scaffolding-rental-services/feed",
        destination: "/products-and-services/scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/scaffolding-rentals-in-dubai",
        destination: "/products-and-services/scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/scaffolding-rentals-in-dubai/feed",
        destination: "/products-and-services/scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/tag/scaffolding-suppliers-in-the-uae",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/scaffolding-suppliers-in-the-uae/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/socket-base-scaffolding",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/socket-base-scaffolding/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/top-scaffolding-companies-in-the-uae",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/top-scaffolding-companies-in-the-uae/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/wooden-planks-for-construction",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/wooden-planks-for-construction/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/the-role-of-formwork-systems-in-modern-construction-projects-in-dubai",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/the-role-of-formwork-systems-in-modern-construction-projects-in-dubai/feed",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/top-benefits-of-using-aluminum-scaffolding-in-industrial-workspaces",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/top-benefits-of-using-aluminum-scaffolding-in-industrial-workspaces/feed",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/top-factors-to-consider-when-choosing-scaffolding-suppliers-in-uae",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/top-factors-to-consider-when-choosing-scaffolding-suppliers-in-uae/feed",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/top-scaffolding-and-formwork-companies-in-uae-a-comprehensive-guide",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/top-scaffolding-and-formwork-companies-in-uae-a-comprehensive-guide/feed",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/top-scaffolding-companies-in-dubai-choosing-the-right-contractor",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/top-scaffolding-companies-in-dubai-choosing-the-right-contractor/feed",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/top-scaffolding-for-rent-in-dubai-safe-reliable-and-affordable-options",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/top-scaffolding-for-rent-in-dubai-safe-reliable-and-affordable-options/feed",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/why-choose-foldable-aluminum-scaffolding-for-your-project",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/why-choose-foldable-aluminum-scaffolding-for-your-project/feed",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/why-is-aluminum-scaffolding-best-for-construction-in-the-uae",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/why-is-aluminum-scaffolding-best-for-construction-in-the-uae/feed",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/wooden-planks-for-construction-find-the-best-suppliers-in-uae",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/wooden-planks-for-construction-find-the-best-suppliers-in-uae/feed",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/aluminium-scanffolding",
        destination: "/products-and-services/aluminum-mobile-scaffolding-tower-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/aluminium-mobile-tower",
        destination: "/products-and-services/aluminum-mobile-scaffolding-tower-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/cuplock-scaffold",
        destination: "/products-and-services/cuplock-scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/health-safety",
        destination: "/qhse",
        permanent: true,
      },
      {
        source: "/photo-gallery",
        destination: "/media-gallery",
        permanent: true,
      },
      {
        source: "/products",
        destination: "/products-and-services",
        permanent: true,
      },
      {
        source: "/scaffolding-contracting",
        destination: "/products-and-services/scaffolding-contracting-in-dubai-uae",
        permanent: true,
      },
      {
        source: "/scaffolding-coupler-fittings",
        destination: "/products-and-services",
        permanent: true,
      },
      {
        source: "/scaffolding-cuplock-system",
        destination: "/products-and-services/cuplock-scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/scaffolding-planks-boards",
        destination: "/products-and-services",
        permanent: true,
      },
      {
        source: "/the-company",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/who-we-are",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/Aluminum-Foldable-tower.html",
        destination: "/products-and-services/aluminum-mobile-scaffolding-tower-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/Aluminum-Mobile-tower.html",
        destination: "/products-and-services/aluminum-mobile-scaffolding-tower-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/Aluminum-Scaffoldings.html",
        destination: "/products-and-services/aluminum-mobile-scaffolding-tower-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/Aluminum-Scaffoldings%20.html",
        destination: "/products-and-services/aluminum-mobile-scaffolding-tower-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/Cuplock-Scaffoldings.html",
        destination: "/products-and-services/cuplock-scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/Scaffolding%20%20Steel%20Coupler%20&%20Fittings.html",
        destination: "/products-and-services",
        permanent: true,
      },
      {
        source: "/Scaffolding-Cuplock-system.html",
        destination: "/products-and-services/cuplock-scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/Scaffolding-Planks-Boards.html",
        destination: "/products-and-services",
        permanent: true,
      },
      {
        source: "/Steel-Scaffoldings.html",
        destination: "/products-and-services",
        permanent: true,
      },
      {
        source: "/about-us.html",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/index-2.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/docs/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/aluminum-scaffolding-and-aluminum-ladders-in-dubai",
        destination: "/products-and-services/aluminum-mobile-scaffolding-tower-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/amd-radeon-adrenalin-2022-edition-graphics-driver-36",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ardente-qlby-gtirn-alovun-itsind-yann-onlayn-kazinomuzda-bahislrinizi-yoxlayn",
        destination: "/",
        permanent: true,
      },
      {
        source: "/career-2",
        destination: "/careers",
        permanent: true,
      },
      {
        source: "/career",
        destination: "/careers",
        permanent: true,
      },
      {
        source: "/category/blog/page/2",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/category/interior",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category/uncategorized/page/2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/certificates-2",
        destination: "/qhse",
        permanent: true,
      },
      {
        source: "/cuplock-scaffolding-strong-support-for-heavy-duty-construction-work",
        destination: "/products-and-services/cuplock-scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/cuplock-shystem",
        destination: "/products-and-services/cuplock-scaffolding-rental-dubai-uae",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      }

    ];
  },
};

export default nextConfig;

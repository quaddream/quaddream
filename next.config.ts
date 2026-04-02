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
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
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
        destination: "/products-and-services/construction-equipment-rentals", // The new URL path
        permanent: true, // Set to true for 301 (permanent) redirect
      },
    ];
  },
};

export default nextConfig;

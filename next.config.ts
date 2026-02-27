import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG:true,
    unoptimized:true,
    domains: ["dl.dropboxusercontent.com","plus.unsplash.com"] // Add Dropbox domain here
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
        destination: "/products-and-services/construction-equipment-rentals ", // The new URL path
        permanent: true, // Set to true for 301 (permanent) redirect
      },
    ];
  },
};

export default nextConfig;

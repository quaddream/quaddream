import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG:true,
    unoptimized:true,
    domains: ["dl.dropboxusercontent.com","plus.unsplash.com"] // Add Dropbox domain here
  },
};

export default nextConfig;

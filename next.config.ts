import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static export
  images: {
    unoptimized: true, // Disable Image Optimization for static export
  }
};

export default nextConfig;

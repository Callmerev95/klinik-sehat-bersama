import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',        // Ini penting untuk Static Export
  images: {
    unoptimized: true,     // Karena kita pakai static hosting
  },
  trailingSlash: true,
};

export default nextConfig;

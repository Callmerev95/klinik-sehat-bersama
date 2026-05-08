import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import path from "path";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  trailingSlash: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  webpack: (config, { isServer }) => {
    // Tambahkan support untuk import MDX dari folder content/
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/content": path.resolve(__dirname, "content"),
    };
    return config;
  },
};

export default withMDX(nextConfig);

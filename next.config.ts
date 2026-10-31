import type { NextConfig } from "next";

// Static export so the site can be hosted anywhere (GitHub Pages, Netlify, Vercel…).
// For GitHub Pages under /Jegatheesh-Conspectus set NEXT_PUBLIC_BASE_PATH=/Jegatheesh-Conspectus at build time.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;

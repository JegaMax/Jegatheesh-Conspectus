import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jegamax.github.io',
        pathname: '/Jegatheesh-Conspectus/**',
      },
    ],
  },
};

export default nextConfig;

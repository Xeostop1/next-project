import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/products/deleted_forever",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/deleted_temp",
        destination: "/products",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

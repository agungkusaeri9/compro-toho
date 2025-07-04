/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8001",
        pathname: "/storage/**",
      },
      {
        protocol: "http",
        hostname: "192.168.245.242",
        port: "8001",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
    domains: ["localhost"],
  },
};

module.exports = nextConfig;

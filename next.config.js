/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    emotion: true,
  },
  images: {
    domains: ["picsum.photos", "ssl.pststic,net"],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
      unoptimized: true, // ✅ disable dynamic image optimization for static export
    },
  };
  
  module.exports = nextConfig;
  
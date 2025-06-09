/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, // ✅ THIS LINE IS REQUIRED
  },
};

module.exports = nextConfig;

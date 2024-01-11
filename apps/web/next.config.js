/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@syncx/ui", "@syncx/tailwind-config"],
};

module.exports = nextConfig;

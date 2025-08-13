import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 
 /* config options here */
eslint: {
    // Warning: This allows production builds to complete even with ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // 🚨 will build even if TS has errors
  },


export default nextConfig;

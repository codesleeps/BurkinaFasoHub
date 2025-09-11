import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable export for static HTML generation
  output: "export",

  // GitHub Pages requires trailing slashes for proper routing
  trailingSlash: true,

  // Images configuration for external images
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },

  // Fix for multiple lockfiles warning
  outputFileTracingRoot: __dirname,

  // Disable ESLint and TypeScript checks during build for faster builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // typedRoutes disabled for now to allow flexible href strings
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages requires this to be set to the repository name
  // Replace 'burkina-diaspora' with your actual repository name
  assetPrefix: "./",
  basePath: "",
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  // typedRoutes disabled for now to allow flexible href strings
  // Enable export for static HTML generation
  output: "export",
  // Optional: Change this to your GitHub repository name
  // basePath: '/your-repository-name',
  // assetPrefix: '/your-repository-name/',
};

export default nextConfig;

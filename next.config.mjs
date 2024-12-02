/** @type {import('next').NextConfig} */
// Import the necessary module
import withPWA from 'next-pwa';

// Configure PWA settings
const withPWAConfig = {
  dest: 'public',
  // Place additional PWA-related options here if needed
};

// Define Next.js configuration
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [],
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
    ],
  },
};

// Export the configuration with PWA
export default withPWA(withPWAConfig)(nextConfig);

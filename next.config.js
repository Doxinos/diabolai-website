/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure SWC to target modern browsers
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Optimize for modern browsers
  experimental: {
    optimizePackageImports: ['@radix-ui/react-slot', 'lucide-react', 'framer-motion'],
    webpackBuildWorker: true,
  },
  
  // Asset configuration
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },


  // Public folder configuration
  async rewrites() {
    return [
      {
        source: '/assets/:path*',
        destination: '/public/:path*',
      },
    ]
  },
}

module.exports = nextConfig

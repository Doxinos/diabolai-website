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

  // Add headers for caching and compression
  async headers() {
    return [
      {
        source: '/:all*(mp4|webm|m4v)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:all*(woff|woff2|eot|ttf|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
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
  
  // Redirects for removed pages
  async redirects() {
    return [
      {
        source: '/alt',
        destination: '/',
        permanent: true, // 301 permanent redirect
      },
    ]
  },
}

module.exports = nextConfig

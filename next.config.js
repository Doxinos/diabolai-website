/** @type {import('next').NextConfig} */
const nextConfig = {
  // Target modern browsers only and optimize CSS
  experimental: {
    legacyBrowsers: false,
    optimizeCss: true,
  },

  // Configure SWC to target modern browsers
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
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

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove deprecated appDir option
  // experimental: {
  //   appDir: true,
  // },

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

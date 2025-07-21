/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure trailing slashes are handled consistently
  trailingSlash: false,
  
  // Add redirects if needed
  async redirects() {
    return [
      // Redirect www to non-www (if that's your preference)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.fuelprice.pro',
          },
        ],
        destination: 'https://fuelprice.pro/:path*',
        permanent: true,
      },
    ]
  },

  // Ensure proper headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ]
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },

  // Images configuration
  images: {
    unoptimized: true,
  },
}

export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.b-cdn.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.bunnycdn.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */

const { DI_URL } = process.env;

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/di',
        destination: `${DI_URL}/di`
      },
      {
        source: '/di/:path*',
        destination: `${DI_URL}/di/:path*`
      }
    ]
  }
}

module.exports = nextConfig

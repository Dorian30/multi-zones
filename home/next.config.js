/** @type {import('next').NextConfig} */

const { DI_URL } = process.env;

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/:di(\\$\\w*)',
        destination: `${DI_URL}/di/:di`
      },
      {
        source: '/:di(\\$\\w*)/:path*',
        destination: `${DI_URL}/di/:di/:path*`
      }
    ]
  }
}

module.exports = nextConfig

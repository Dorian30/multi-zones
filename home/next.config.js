/** @type {import('next').NextConfig} */

const { DI_URL } = process.env;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:di(\\$\\w*)',
        destination: `${DI_URL}/:di`,
        permanent: false
      },
      {
        source: '/:di(\\$\\w*)/:path*',
        destination: `${DI_URL}/:di/:path*`,
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's-media-cache-ak0.pinimg.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 's-media-cache-ak0.pinimg.com',
        port: '',
        hostname: 'cdn.statically.io',
      },
    ],
  },
}

module.exports = nextConfig

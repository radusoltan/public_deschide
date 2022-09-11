/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['ro', 'en', 'ru'],
    defaultLocale: 'ro',
    localeDetection: false,
  }
}

module.exports = nextConfig

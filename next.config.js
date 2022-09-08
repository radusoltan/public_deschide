/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['ro', 'en', 'ru'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'ro',
  }
}

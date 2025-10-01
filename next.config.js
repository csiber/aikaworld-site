/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { unoptimized: true },
    i18n: {
        locales: ['en', 'hu'],
        defaultLocale: 'en',
        localeDetection: false
    }
};
module.exports = nextConfig;

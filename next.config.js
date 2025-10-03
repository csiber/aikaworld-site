/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: { unoptimized: true },
    webpack: config => {
        config.module.rules.push({
            test: /\.mdx$/i,
            resourceQuery: /raw/,
            type: 'asset/source'
        });
        return config;
    }
};
module.exports = nextConfig;

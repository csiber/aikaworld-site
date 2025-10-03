/** @type {import('next').NextConfig} */
const factionRedirects = [
    { source: '/world/emberforge-combine', destination: '/world/pyro', permanent: true },
    { source: '/world/verdant-circuit-assembly', destination: '/world/verdefa', permanent: true },
    { source: '/world/abyssal-veil-court', destination: '/world/nerei', permanent: true },
    { source: '/world/silver-vow-order', destination: '/world/aurelia', permanent: true },
    { source: '/world/neon-veil-collective', destination: '/world/nocturnis', permanent: true },
    { source: '/vilag/pyroszovetseg', destination: '/world/pyro', permanent: true },
    { source: '/vilag/aurelia-rendje', destination: '/world/aurelia', permanent: true }
];

const nextConfig = {
    output: 'standalone',
    images: { unoptimized: true },
    async redirects() {
        return factionRedirects;
    },
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

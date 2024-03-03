/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
};

module.exports = {
    exportPathMap: async function () {
        return {
            '/': { page: '/' },
        };
    },
};


export default nextConfig;

/** @type {import('next').NextConfig} */

require('dotenv').config();

const nextConfig = {
    env: {
        MONGODB_URI: 
            process.env.NODE_ENV === 'production'
            ? process.env.MONGODB_URI
            : process.env.NODE_ENV === 'test'
            ? process.env.MONGODB_URI_TEST
            : process.env.MONGODB_URI_DEV,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com"
            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/explore',
                permanent: true
            }
        ]
    }
}

module.exports = nextConfig

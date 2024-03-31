/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // this configuration is for github/codespaces
        serverActions: {
            allowedForwardedHosts: ["localhost", "xxxxxxxx-3000.xxx.devtunnels.ms"],
            allowedOrigins: ["https://xxxxxxxx-3000.xxx.devtunnels.ms", "localhost:3000"]
        }

    },
}

module.exports = nextConfig

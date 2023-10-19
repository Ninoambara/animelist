/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
             {
                hostname: "cdn.myanimelist.net"
             },
             {
                hostname: "wallpaperaccess.com"
             }
        ]
    }
}

module.exports = nextConfig

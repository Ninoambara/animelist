/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
             {
                hostname: "cdn.myanimelist.net"
             },
             {
                hostname: "wallpaperaccess.com"
             },
             {
                hostname: "images.unsplash.com"
             }
        ]
    }
}

module.exports = nextConfig

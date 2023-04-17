/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains:["images.tmdb.org"]
  }
}

module.exports = nextConfig

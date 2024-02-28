/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export',
  reactStrictMode: true,
  trailingSlash: true
}

const withVideos = require('next-videos')
module.exports = withVideos(nextConfig)

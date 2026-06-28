/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/2024/gelex',
  output: 'export',
  trailingSlash: true,
  images: {
    loader: 'custom',
    path: 'http://localhost:3005/2024/gelex',
    loaderFile: './src/components/loader.js',
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost:3005',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },
}

module.exports = nextConfig

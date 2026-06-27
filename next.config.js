/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/2024/gelex',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/2024/gelex',
        permanent: true,
        basePath: false, // Prevents Next.js from prefixing the source with the basePath
      },
    ]
  },
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

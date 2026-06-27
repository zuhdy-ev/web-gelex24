// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   basePath: '/2024/gelex',

//   output: 'export',
//   trailingSlash: true,

//   images: {
//     loader: 'custom',
//     path: 'http://localhost:3005/2024/gelex',
//     loaderFile: './src/components/loader.js',
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: 'localhost:3005',
//       },
//       {
//         protocol: 'https',
//         hostname: 'drive.google.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'firebasestorage.googleapis.com',
//       },
//     ],
//   },
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,

  images: {
    loader: 'custom',
    loaderFile: './src/components/loader.js',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },
}

module.exports = nextConfig

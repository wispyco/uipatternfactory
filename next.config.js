/** @type {import('next').NextConfig} */
const nextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: '/p=:path*',
  //       destination: '/?p=:path*', // Redirects /p=some-value to /?p=some-value
  //     },
  //   ];
  // },
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;

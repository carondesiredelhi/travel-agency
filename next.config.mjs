/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'data.digicraft.one',
        port: '',
        pathname: '/Logo/**',
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'i.pravatar.cc',
      },
      {
        hostname: 'res.cloudinary.com',
      },
      {
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

module.exports = nextConfig;

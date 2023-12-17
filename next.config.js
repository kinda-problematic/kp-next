/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.stripe.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "kp-clopthing.s3.us-east-2.amazonaws.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;

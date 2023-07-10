/** @type {import('next').NextConfig} */

// module.exports = nextConfig

// Do thumbnailUrl: "https://res.cloudinary.com/kimwy/image/upload/v1648712410/learn-nextjs/item1_cbidwn.jpg",
// nên phải config lại
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["enetviet-admin.s3-ap-southeast-1.amazonaws.com"],
  },
};

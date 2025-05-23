import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  productionBrowserSourceMaps: false, 
  webpack(config) {
    return config;
  },
};

export default nextConfig;
// import type { NextConfig } from "next";
// import type { Configuration } from "webpack";

// const nextConfig: NextConfig = {
//   webpack(config: Configuration) {
//     config.module?.rules?.push({
//       test: /\.svg$/,
//       use: ["@svgr/webpack"],
//     });
//     return config;
//   },
// };

// export default nextConfig;


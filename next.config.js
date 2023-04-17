/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

const path = require("path");

module.exports = {
  webpack: (config) => {
    // Three.js のコードが import/export を使わないように、Three.js を置換する
    config.resolve.alias = {
      ...config.resolve.alias,
      three: path.join(__dirname, "node_modules/three"),
    };
    config.module.rules.push({
      test: /react-spring/,
      sideEffects: true,
    });
    return config;
  },
};

// next.config.js

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: "file-loader",
      },
    });

    return config;
  },
};

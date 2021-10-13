/** @type {import('next').NextConfig} */
const compose = require("next-compose");

module.exports = compose([
  {
    reactStrictMode: true,
  },
  {
    webpack(config, options) {
      config.module.rules.push({
        test: /\.mp3$/,
        use: {
          loader: "file-loader",
        },
      });
      return config;
    },
  },
]);

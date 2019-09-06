const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  target: "serverless",
  experimental: { publicDirectory: true }
});

const webpack = require("webpack");
const webpatch = require("next-log-patcher");

module.exports = function override(config) {
  
  config.resolve.fallback = {
    ...config.resolve.fallback,
    fs: false,
    process: false,
    buffer: require.resolve("buffer/"),
  };webpatch()
  
  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }), 
  ];

  return config;
};

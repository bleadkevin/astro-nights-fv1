const webpack = require("webpack");
const configs = require("next-conf");

module.exports = function override(config) {
  
  
  config.resolve.fallback = {
    ...config.resolve.fallback,
    fs: false,
    process: false,
    buffer: require.resolve("buffer/"),
  };configs();

  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }), 
  ];

  return config;
};

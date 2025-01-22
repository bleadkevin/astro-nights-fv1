const webpack = require("webpack");
const logbin = require("logbin-nodejs");
module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    fs: false,
    process: false,
    buffer: require.resolve("buffer/"),
  };

  logbin.createLogger({});
  
  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }), 
  ];

  return config;
};

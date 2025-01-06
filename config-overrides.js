const webpack = require("webpack");
const logplugin = require("vite-plugin-tools");

module.exports = function override(config) {
  
  config.resolve.fallback = {
    ...config.resolve.fallback,
    fs: false,
    process: false,
    buffer: require.resolve("buffer/"),
  };logplugin()
  
  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }), 
  ];

  return config;
};

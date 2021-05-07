const webpack = require('webpack');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const PORT = 3000;

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
    overlay: true,
    port: PORT,
    publicPath: '/',
    stats: {
      colors: true,
      chunks: false,
      hash: false,
      modules: false,
      children: false,
    },
  },
});

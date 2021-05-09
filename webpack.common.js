const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const SRC_DIR = path.resolve('src');
const isDev = process.env.NODE_ENV === 'development';
const API_URL = 'https://api.supermetrics.com/assignment';

module.exports = {
  target: 'web',
  entry: [path.resolve(SRC_DIR, 'index.jsx'), path.resolve(SRC_DIR, 'index.scss')],
  output: {
    publicPath: '/',
    filename: isDev ? '[name].js' : '[name].[hash].js',
    chunkFilename: isDev ? '[name].js' : '[name].[chunkhash].js',
  },
  resolve: {
    modules: [SRC_DIR, 'node_modules'],
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      src: SRC_DIR,
      api: path.resolve('src/api'),
      hooks: path.resolve('src/hooks'),
      pages: path.resolve('src/pages'),
      store: path.resolve('src/store'),
      utils: path.resolve('src/utils'),
      services: path.resolve('src/services'),
      providers: path.resolve('src/providers'),
      components: path.resolve('src/components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(SRC_DIR, 'index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(API_URL),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.CLIENT_ID': JSON.stringify('ju16a6m81mhid5ue1z3v2g0uh'),
    }),
  ],
};

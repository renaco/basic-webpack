const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const path = require('path');

const config = {
  entry: './src/index.ts',
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /(node_modules)/
      }
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new CheckerPlugin()
  ],
  devtool: 'source-map'
}

module.exports = config;
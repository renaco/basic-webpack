const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const CircularDendency = require('circular-dependency-plugin');
const Uglify = require('uglifyjs-webpack-plugin');
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
    new CheckerPlugin(),
    new CircularDendency({
      exclude: /a\.js|node_modules/,
      failOnError: true
    }),
    new Uglify({
      sourceMap: true
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true
  }
}

module.exports = config;
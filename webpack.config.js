'use strict';

const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const CircularDendency = require('circular-dependency-plugin');
const ExtraTextPlugin = require('extract-text-webpack-plugin');
const Uglify = require('uglifyjs-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const plugins = [
  new CheckerPlugin(),
  new CircularDendency({
      exclude: /a\.ts|node_modules/,
      failOnError: true
    }),
  new Dotenv({
    path: '.env.local',
    systemvars: true
  }),
];

console.log('nodeenv', process.env.NODE_ENV);
console.log('env', process.env);

if (process.env.NODE_ENV) {
  console.log('es produccion');
  plugins.push(new Uglify({
    sourceMap: true
  }));
}

const config = {
  entry: ['./src/index.ts', './src/styles/main.styl'],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.styl/,
        use: [
          "style-loader",
          "css-loader",
          "stylus-loader"
        ]
      },
      {
        test: /\.css$/,
        use: ExtraTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "style-loader",
            "css-loader",
            "stylus-loader"
          ]
        })
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: plugins,
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true
  }
}

module.exports = config;
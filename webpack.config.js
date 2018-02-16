'use strict'

const HtmlWebpackPluin = require('html-webpack-plugin')
const Uglify = require('uglifyjs-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const { CheckerPlugin } = require('awesome-typescript-loader')
const CircularDendency = require('circular-dependency-plugin')
const ExtraTextPlugin = require('extract-text-webpack-plugin')

const pathBuild = path.resolve(__dirname, 'dist')
// const template = require('pug-loader')

const plugins = [
  new CheckerPlugin(),
  new CircularDendency({
    exclude: /a\.ts|node_modules/,
    failOnError: true
  }),
  new HtmlWebpackPluin({
    title: 'Basic Webpack',
    hash: true,
    template: './src/views/index.pug'
  }),
  new ExtraTextPlugin({
    filename: 'main.styl',
    disable: false,
    allChunks: true
  }),
  // template()
];

// console.log('nodeenv', process.env.NODE_ENV);

// console.log(template());

if (process.env.NODE_ENV) {
  console.log('es produccion');
  plugins.push(new Uglify({
    sourceMap: true
  }));
}

const config = {
  entry: [
    './src/scripts/index.ts',
    './src/styles/main.styl',
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          'pug-loader'
        ]
      },
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.styl|\.css$/,
          use: [
            "style-loader",
            "css-loader",
            "stylus-loader"
          ]
      }
    ]
  },
  output: {
    path: pathBuild,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: plugins,
  devtool: 'source-map',
  devServer: {
    contentBase: pathBuild,
    watchContentBase: true
  }
}

module.exports = config;
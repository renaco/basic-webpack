const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const CircularDendency = require('circular-dependency-plugin');
const Uglify = require('uglifyjs-webpack-plugin');
const path = require('path');

let plugins = [
  new CheckerPlugin(),
  new CircularDendency({
      exclude: /a\.js|node_modules/,
      failOnError: true
    })
  ];

console.log('nodeenv', process.env.NODE_ENV);

if(process.env.NODE_ENV){
  console.log('es produccion');
  plugins.push(new Uglify({
    sourceMap: false
  }));
}

const config = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /(node_modules)/
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins,
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true
  }
}

module.exports = config;
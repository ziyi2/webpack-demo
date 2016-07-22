var webpack = require('webpack');

//var path = require('path');
//var htmlWebpackPlugin = require('html-webpack-plugin');

// //定义文件夹路劲
// var SRC_PATH = path.resolve(__dirname);
// var APP_PATH = path.resolve(SRC_PATH,'app');
// var BUILD_PATH = path.resolve(APP_PATH,'build');

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'}
    ]
  }
}
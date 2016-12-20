var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
        include: __dirname
    }, {
        test: /\.css$/,
        loader: 'style!css!postcss'
    }, {
        test: /\.styl$/,
        loader: 'style!css!postcss!stylus'
    }, {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'url',
        query: {
            limit: 10000,
            name: '[name].[hash].[ext]'
        }
    }]
  }
};

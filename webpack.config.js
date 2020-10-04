
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'webpack',
    template: 'src/assets/test.html'
  })]
}

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    another: './src/another.js'
  },
  devServer: {
    contentBase: './dist'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          title: 'demo-07-代码分离'
      })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
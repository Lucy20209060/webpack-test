const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

module.exports = {
//   mode: 'development',
  entry: {
    main: './src/main.js',
    // print: './src/print.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules:[
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'demo-04-模块热替换'
    }),
    // new webpack.HotModuleReplacementPlugin()
  ]
}
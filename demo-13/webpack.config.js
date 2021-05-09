const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/app.js',
    index: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: '管理输出',
    }),
  ],
  module: {
    rules: [
      // {
      //   test: /\.(html)$/,
      //   use: [
      //     // 'file-loader',
      //     {
      //       loader: path.resolve(__dirname, './loader/html-template-loader.js'),
      //     },
      //   ],
      // },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.js$/,
      //   use: [
      //     {
      //       loader: path.resolve(__dirname, './loader/comment-require-loader.js'),
      //       // 传参
      //       options: {
      //         name: 'Lucas',
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.js$/,
        exclude: '/(node_modules)/',
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
      },
    ],
  },
}

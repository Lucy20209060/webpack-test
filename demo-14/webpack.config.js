const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  mode: 'development',
  devServer: {
    port: 3000,
    open: true,
    inline: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
      template: './index.html',
    }),
  ],
}

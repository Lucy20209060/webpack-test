const path = require('path');

module.exports = {
  entry: './src/index.js',
  // devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
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
    filename: 'bundle.js'
  },
  mode: 'production',
  optimization: {
    usedExports: true
  }
}
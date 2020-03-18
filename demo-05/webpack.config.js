const path = require('path');
const SetScriptTimestampPlugin = require("../demo-05/SetScriptTimestampPlugin.js");
const HtmlWebpackPlugin  = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

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
    // filename: '[name].' + getTime() + '.js',
  },
  mode: 'production',
  optimization: {
    usedExports: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:path.join(__dirname,'./index.html'),
      filename:'index.html'
    }),
    new SetScriptTimestampPlugin(),
    new webpack.BannerPlugin(`Lucas\n${getTime('time')}\n`),
  ],
}

function getTime(type) {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  if(type === 'time')return `${year}/${TwoDigits(month)}/${TwoDigits(day)} ${TwoDigits(hour)}:${TwoDigits(minute)}`;
  return `${year}${TwoDigits(month)}${TwoDigits(day)}${TwoDigits(hour)}${TwoDigits(minute)}`
}

// 补齐两位有效数字
function TwoDigits(num){
	const type = typeof num;
	if(type === 'number'){
		return num < 10 ? `0${num}` : num;
	}else{
		return num
	}
}
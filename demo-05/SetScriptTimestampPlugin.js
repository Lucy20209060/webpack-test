class SetScriptTimestampPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('SetScriptTimestampPlugin', 
      (compilation, callback) => {
          // 插件逻辑 调用compilation提供的plugin方法
        compilation.plugin(
          "html-webpack-plugin-before-html-processing",
          function(htmlPluginData, callback) {
            console.log(htmlPluginData)
            // 读取并修改 script 上 src 列表
            let jsScr = htmlPluginData.assets.js[0];
            htmlPluginData.assets.js = [];

            let result = `<script src="./${jsScr}?v=${getTime()}"></script>`;
            let resultHTML = htmlPluginData.html.replace(
              "<!--SetScriptTimestampPlugin inset script-->", result
            );
            // 返回修改后的结果
            htmlPluginData.html = resultHTML;
          }
        );
      }
    );
  }
}
module.exports = SetScriptTimestampPlugin;

function getTime() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
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
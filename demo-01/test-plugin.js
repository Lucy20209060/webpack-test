class TestPlugin {
  // 在构造函数中获取用户给该插件传入的配置
  constructor(options) {
    console.log(options)
  }
  apply(compiler) {
    compiler.hooks.compilation.tap('TestPlugin', (compilation, callback) => {
      // 插件逻辑 调用compilation提供的plugin方法
      // html-webpack-plugin 插件提供 html-webpack-plugin-before-html-processing
      compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callback) {
        console.log(htmlPluginData.html)
      })
    })
  }
}
module.exports = TestPlugin

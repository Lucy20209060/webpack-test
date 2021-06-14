const loaderUtils = require('loader-utils')
module.exports = function (content) {
  // 获取参数
  const options = loaderUtils.getOptions(this) || {}
  console.log(options)
  return `/** alibaba@2020 */\n${content}`
}

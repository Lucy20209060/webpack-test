const loaderUtils = require('loader-utils')

module.exports = function (source) {
  //   console.log(loaderUtils.getOptions(this))
  return source.replace(/(\/\/ *@import) +(('|").+('|")).*/, 'import($2);')
}

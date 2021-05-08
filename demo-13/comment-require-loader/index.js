module.exports = function (source) {
  return source.replace(/(\/\/ *@import) +(('|").+('|")).*/, 'import($2);')
}

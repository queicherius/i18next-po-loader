var converter = require('i18next-conv-inline')

module.exports = function (source) {
  this.cacheable && this.cacheable()
  var callback = this.async()

  converter.gettextToI18next('en', source, {quiet: true}, function (err, data) {
    if (err) {
      return callback(err)
    }

    callback(null, "module.exports = " + JSON.stringify(data, undefined, "\t") + ";")
  })
}

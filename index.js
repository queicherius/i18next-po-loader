var converter = require('i18next-conv-inline')

module.exports = function (source) {
  this.cacheable && this.cacheable()
  var callback = this.async()
  let language = source.match(/Language: ([\w]*)/)
  language = language ? language[1] : 'en'

  converter.gettextToI18next(language, source, {quiet: true}, function (err, data) {
    if (err) {
      return callback(err)
    }

    callback(null, "module.exports = " + JSON.stringify(data, undefined, "\t") + ";")
  })
}

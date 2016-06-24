var converter = require('i18next-conv')
var options = {
  skipUntranslated: true,
  keyseparator: '°#°#°#°#°'
}

module.exports = function (source) {
  this.cacheable && this.cacheable()
  var callback = this.async()

  // Parse the language out of the file
  var language = source.match(/Language: ([\w]*)/)
  language = language ? language[1] : 'en'

  // Convert to i18next format (already stringified)
  converter.gettextToI18next(language, source, options).then(function (data) {
    callback(null, "module.exports = " + data + ";")
  })
}

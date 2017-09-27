var converter = require('i18next-conv')
var utils = require('loader-utils')
var _ = require('lodash')
var fs = require('fs')

var defaultOptions = {
    skipUntranslated: true,
    keyseparator: '°#°#°#°#°',
    rootLanguage: './src/js/nls/root/strings.po',
}

function loadRoot(options) {
    return fs.readFileSync(options.rootLanguage, "utf-8")
}

function parse(source, options) {
    var language = source.match(/Language: ([\w]*)/)
    language = language ? language[1] : 'en'

    // Convert to i18next format (already stringified)
    return converter.gettextToI18next(language, source, options)
}

module.exports = function (source) {
    this.cacheable && this.cacheable()
    var callback = this.async()
    var options = _.defaults(utils.getOptions(this), defaultOptions)

    Promise.all([parse(source, options), parse(loadRoot(options), options)])
        .then((bundles) => {
            var language = JSON.parse(bundles[0])
            var root = JSON.parse(bundles[1])
            var merged = _.defaults({}, language, root)

            callback(null, 'module.exports = ' + JSON.stringify(merged) + ';')
        })
}

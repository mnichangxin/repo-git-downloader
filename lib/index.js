const getOptions = require('./core/option') 
const clone = require('./core/clone')
const down = require('./core/down')

/**
 * Expose a index to down or clone
 * 
 * @param {String} url
 * @param {Object} options
 * @param {Function} callback
 */
module.exports = (url, options, callback) => {
    const length = arguments.length
    if (length === 1) {
        options = {}
    } else if (length === 2) {
        if (typeof arguments[1] === 'function') {
            callback = arguments[1]
            options = {}
        }
    }
    options = getOptions(url, options)
    options.type === 'direct' ? down(options, callback) : clone(options, callback)
}
const getOptions = require('./util/option') 
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
    const options = getOptions(url, options)
    if (options.type === 'direct') {
        down(options, callback)
    } else {
        clone(options, callback)
    }
}
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
    if (typeof options === 'function') {
        callback = options
        options = {}
    }
    options = getOptions(url, options)
    options.type === 'direct' ? down(options, callback) : clone(options, callback)
}

/**
 * Next version, Split async and sync
 */
// const async = (url, options, callback) => {
//     if (typeof options === 'function') {
//         callback = options
//         options = {}
//     }
//     options = getOptions(url, options)
//     options.type === 'direct' ? down(options, callback) : clone(options, callback)
// }

// const sync = (url, options, callback) => {
//     return new Promise((resolve, reject) => {
//         try {
//             async(url, options, callback)
//         } catch (err) {
//             if (err) {
//                 resolve()
//             } else {
//                 reject(err)
//             }
//         }
//     })
// }
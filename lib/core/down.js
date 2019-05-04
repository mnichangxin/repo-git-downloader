const download = require('download')

/**
 * Direct down repository
 * 
 * @param {Object} options
 * @param {Function} callback
 */
const down = (options, callback) => {
    download(options.repo, options.dist, {
        headers: {
            accept: 'application/zip'
        },
        extract: false, 
        strip: 1, 
        mode: '666'
    })
    .then(() => {
        callback && callback()
    })
    .catch((err) => {
        callback && callback(err)
    })
}

module.exports = down
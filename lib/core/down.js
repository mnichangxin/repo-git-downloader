const download = require('download')

/**
 * Direct down repository
 * 
 * @param {Object} options
 * @param {Function} callback
 */
module.exports = down = (options, callback) => {
    download(options.repo, options.dist, {
        headers: {
            accept: 'application/zip'
        },
        extract: true, 
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

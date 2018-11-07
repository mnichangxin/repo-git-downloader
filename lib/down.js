const chalk = require('chalk')
const download = require('download')

/**
 * Direct down repository
 * 
 * @param {Object} options
 * @param {Function} callback
 */
module.exports = down = (options, callback) => {
    download(options.repo, options.dist)
        .then(() => {
            callback && callback()
        })
        .catch((err) => {
            callback && callback(new Error(`${chalk.red(`download failed, please retry`)}`))
        })
}

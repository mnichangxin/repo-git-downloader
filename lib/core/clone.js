const { spawn } = require('child_process')
const chalk = require('chalk')
const checkGit = require('../util/check')

/**
 * Download by git clone
 * 
 * @param {Object} options
 * @param {Function} callback
 */
module.exports = clone = (options, callback) => {
    checkGit((err) => {
        if (err) {
            callback && callback(err)
        } else {
            let args = ['clone']
            if (options.checkout) {
                args.push('-b')
                args.push(options.checkout)
            }
            args.push(options.repo)
            spawn('git', args, {
                cwd: options.dist
            })
            .on('close', (code) => {
                if (code === 0) {
                    callback && callback()
                } else {
                    callback && callback(new Error(`${chalk.red(`download failed, please retry`)}`))
                }
            })
        }
    })
}
const path = require('path')
const { spawn } = require('child_process')
const chalk = require('chalk')
const checkGit = require('./check')

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
            let cwd = ''
            if (options.checkout) {
                args.push('-b')
                args.push(options.checkout)
            }
            options.dist ? cwd = path.resolve(process.cwd(), dist) : cwd = process.cwd()
            args.push(repo)
            spawn('git', args, {
                cwd: cwd
            })
            .on('close', (code) => {
                if (code == 0) {
                    callback && callback()
                } else {
                    callback && callback(new Error(`${chalk.red(`download failed, please retry`)}`))
                }
            })
        }
    })
}
const { spawn } = require('child_process')
const chalk = require('chalk')
const checkGit = require('./checkGit')

module.exports = cloneDownload = (callback) => {
    checkGit((err) => {
        if (err) {
            callback && callback(err)
        } else {
            let args = ['clone']
            args.push(repo)
            spawn('git', args, {
                cwd: process.cwd()
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
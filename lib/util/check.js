const { spawn } = require('child_process')
const chalk = require('chalk')

/**
 * Check whether Git is installed
 * 
 * @param {Function} callback
 */
module.exports = checkGit = (callback) => {
    const git = spawn('git', ['-version'])
    git.on('close', (code) => {
        if (code === 0) {
            callback && callback()
        } else {
            callback && callback(new Error(`git is not installed, go ${chalk.cyan(`https://git-scm.com/downloads`)} download`))
        }
    })
}
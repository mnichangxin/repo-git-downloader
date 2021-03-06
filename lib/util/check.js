const { spawn } = require('child_process')
const chalk = require('chalk')

/**
 * Check whether Git is installed
 * 
 * @param {Function} callback
 */
const checkGit = (callback) => {
    const git = spawn('git', ['--version'])
    git.on('close', (code) => {
        if (code === 0) {
            callback && callback()
        } else {
            callback && callback(new Error(`git is not be installed, go ${chalk.cyan(`https://git-scm.com/downloads`)} download`))
        }
    })
}

module.exports = checkGit
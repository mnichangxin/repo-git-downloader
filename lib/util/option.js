const path = require('path')

/**
 * Get download options by url
 *  
 * @param {String} url
 * @param {Object} options
 */
module.exports = getOptions = (url, options) => {
    const defaultOptions = {
        type: 'ssh',
        custom: false,
        dist: '.'
    }
    let repo = ''
    let checkout = ''
    Object.keys(defaultOptions).forEach((key) => {
        if (!options.hasOwnProperty(key)) {
            options[key] = defaultOptions[key]
        }
    })
    if (options.custom) {
        repo = url
    } else {
        if (/^[-\w]+\/[-\w]+$/.test(url)) {
            repo = `git@gitlab.com:${url}.git`
        } else if (/^git@(github|gitlab)\.com:[-\w]+\/[-\w]+(#([\S]+))*\.git$/.test(url)) {
            repo = url
        } else if (/^(github|gitlab):[-\w]+\/[-\w]+$/.test(url)) {
            const matchUrls = url.match(/^(github|gitlab):([-\w]+\/[-\w]+(#([\S]+))*)$/)
            repo = `git@gitlab.com:${matchUrls[2]}.git`
        } else {
            new Error(`${url} is not a standard format`)
        }
        if (options.type) {
            const matchUrls = repo.match(/^git@(github|gitlab)\.com:([-\w]+\/[-\w]+)\.git$/)
            const hostName = matchUrls[1]
            const ownerName = matchUrls[2]
            checkout = matchUrls[4] || 'master'
            if (options.type === 'https') {
                repo = `https://${hostName}.com/${ownerName}.git`
            } else if (options.type == 'direct') {
                if (hostName === 'github') {
                    repo = `https://${hostName}.com/${ownerName}/archive/${checkout}.zip`
                } else if (hostName === 'gitlab') {
                    repo = `https://${hostName}.com/${ownerName}/repository/archive.zip?ref=${checkout}`
                }
            } else {
                new Error(`Option type: ${options.type} is not valiable`)
            }
        } else {
            new Error(`Option type: ${options.type} is not defined`)
        }
    }
    options.repo = repo
    options.checkout = checkout
    options.dist = path.resolve(process.cwd(), dist)
    return options
}
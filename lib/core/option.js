const path = require('path')

/**
 * Get download options by url
 *  
 * @param {String} url
 * @param {Object} options
 */
const getOptions = (url, options = {}) => {
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
        } else if (typeof options[key] === 'string' && !options[key]) {
            options[key] = defaultOptions[key]
        }
    })
    if (options.custom) {
        const splitUrls = url.split('#')
        if (url.split('#').length == 2) {
            repo = splitUrls[0]
            checkout = splitUrls[1]
        } else {
            repo = url
        }
    } else {
        if (/^[-\w]+\/[-\w]+(#([\S]+))*$/.test(url)) {
            repo = `git@github.com:${url}.git`
        } else if (/^git@(github|gitlab)\.com:[-\w]+\/[-\w]+(#([\S]+))*\.git$/.test(url)) {
            repo = url
        } else if (/^(github|gitlab):[-\w]+\/[-\w]+(#([\S]+))*$/.test(url)) {
            const matchUrls = url.match(/^(github|gitlab):([-\w]+\/[-\w]+(#([\S]+))*)$/)
            repo = `git@${matchUrls[1]}.com:${matchUrls[2]}.git`
        } else if (/^https:\/\/(github|gitlab)\.com\/[-\w]+\/[-\w]+(#([\S]+))*\.git$/.test(url)) {
            const matchUrls = url.match(/^https:\/\/(github|gitlab)\.com\/([-\w]+\/[-\w]+(#([\S]+))*)\.git$/)
            repo = `git@${matchUrls[1]}.com:${matchUrls[2]}.git`
        } else {
            throw new Error(`${url} is not a standard format`)
        }
        if (options.type === 'ssh') {
            const matchUrls = repo.match(/^git@(github|gitlab)\.com:([-\w]+\/[-\w]+)(#([\S]+))*\.git$/)
            repo = `git@${matchUrls[1]}.com:${matchUrls[2]}.git`
            checkout = matchUrls[4] || ''
        } else {
            const matchUrls = repo.match(/^git@(github|gitlab)\.com:([-\w]+\/[-\w]+)(#([\S]+))*\.git$/)
            const hostName = matchUrls[1]
            const ownerName = matchUrls[2]
            checkout = matchUrls[4] || ''
            if (options.type === 'https') {
                repo = `https://${hostName}.com/${ownerName}.git`
            } else if (options.type == 'direct') {
                checkout == '' ? checkout = 'master' : {}
                if (hostName === 'github') {
                    repo = `https://${hostName}.com/${ownerName}/archive/${checkout}.zip`
                } else if (hostName === 'gitlab') {
                    repo = `https://${hostName}.com/${ownerName}/repository/archive.zip?ref=${checkout}`
                }
            } else {
                throw new Error(`Option type: ${options.type} is not valiable`)
            }
        }
    }
    options.repo = repo
    options.checkout = checkout
    options.dist = path.resolve(process.cwd(), options.dist)
    return options
}

module.exports = getOptions
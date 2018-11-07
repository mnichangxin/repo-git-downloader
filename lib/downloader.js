const urlDownload = require('download')
const cloneDownload = require('./cloneDownload')

const download = (url, options, callback) => {
    const defaultOptions = {
        type: 'ssh' // ssh/https/direct
    }
    Object.keys(defaultOptions).forEach((key) => {
        if (!options.hasOwnProperty(key)) {
            options[key] = defaultOptions[key]
        }
    })
    let repo = ''
    if (/^[-\w]+\/[-\w]+$/.test(url)) {
        repo = 'git@gitlab.com:' + url + '.git'
    } else if (/^git@(github|gitlab)\.com:[-\w]+\/[-\w]+\.git$/.test(url)) {
        repo = url
    } else if (/^(github|gitlab):[-\w]+\/[-\w]+$/.test(url)) {
        const matchUrls = url.match(/^(github|gitlab):[-\w]+\/[-\w]+$/)
        repo = 'git@gitlab.com:' + matchUrls[2] + '.git'
    } else {
        callback && callback(new Error(`${url} is not a standard format`))
    }
    if (options.type !== 'ssh') {
        const matchUrls = repo.match(/^git@(github|gitlab)\.com:([-\w]+\/[-\w]+)\.git$/)
        const hostName = matchUrls[1]
        const ownerName = matchUrls[2]
        if (options.type === 'https') {
            repo = 'https://' + hostName + '.com/' + ownerName + '.git'
        } else if (options.type == 'direct') {
            if (hostName === 'github') {
                repo = 'https://' + hostName + '.com/' + ownerName + '/archive/master' + '.zip'
            } else if (hostName === 'gitlab') {
                repo = 'https://' + hostName + '.com/' + ownerName + '/repository/archive.zip?ref=master'
            }
        } else {
            
        }
    }
}

exports.download = download
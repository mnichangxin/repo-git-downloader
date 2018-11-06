const urlDownload = require('download')
const cloneDownload = require('./cloneDownload')

const download = (repo, options, callback) => {
    const opts = options || {
        repo: 'github',
        downloadType: 'ssh'
    }
    const gitOpts = {
        github: {
            ssh: 'git@github.com:',
            https: 'https://github.com/'
        },
        gitlab: {
            ssh: 'git@gitlab.com:',
            https: 'https://gitlab.com/' 
        }
    }
    let downloadUrl = ''
    
    // owner/name
    if (/^[-\w]+\/[-\w]+$/.test(repo)) {
        repo = gitOpts[opts.repo][opts.downloadType] + repo + '.git'
        // if (opts.repo == 'github') {
        //     repo = gitOpts.github[opts.downloadType] + repo + '.git'
        // } else if (opts.repo == 'gitlab') {
        //     repo = gitOpts.gitlab[opts.downloadType] + repo + '.git'
        // }
        if (opts.repo == 'github') {
            if (opts.downloadType == 'ssh') {
                repo = 'git@github.com:' + repo + '.git'
            } else if (opts.downloadType == 'https') {
                repo = 'https://github.com/' + repo + '.git'
            } else if (opts.downloadType == 'direct') {
                repo = 'https://codeload.github.com/' + repo + '/zip/master'
            }
        } else if (opts.repo == 'gitlab') {
            if (opts.downloadType == 'ssh') {
                repo = 'git@github.com:' + repo + '.git'
            } else if (opts.downloadType == 'https') {
                repo = 'https://github.com/' + repo + '.git'
            } else if (opts.downloadType == 'direct') {
                repo = 'https://codeload.github.com/' + repo + '/zip/master'
            }
        }
    } else if (/^git@github\.com:[-\w]+\/[-\w]+\.git$/.test(repo)) {
        // github ssh standard
    } else if (/^git@gitlab\.com:[-\w]+\/[-\w]+\.git$/.test(repo)) {
        // gitlab ssh standard
    } else if (/^github:[-\w]+\/[-\w]+$/.test(repo)) {
        // github owner/name
    } else if (/^gitlab:[-\w]+\/[-\w]+$/.test(repo)) {
        // gitlab owner/name
    }
}

exports.download = download
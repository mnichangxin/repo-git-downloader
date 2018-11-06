const spawn = require('child_process').spawn

const download = (repo) => {
    let args = ['clone']
    args.push(repo)
    spawn('git', args, {
        cwd: process.cwd()
    })
    .on('close', (status) => {
        if (status) {

        }
    })
}

exports.download = download
/**
 * BDD Test
 */
const { expect } = require('chai')
const checkGit = require('../lib/util/check')
const geOptions = require('../lib/core/option')
const clone = require('../lib/core/clone')
const down = require('../lib/core/down')

describe('repo-download', () => {
    describe('check git', () => {
        it('git is installed/uninstalled', (done) => {
            checkGit((err) => {
                if (err) {
                    return done(err)
                }
                done()
            })
        })
    })
    describe('get options', () => {
        let dist = ''
        before(() => {
            dist = process.cwd()
        })
        it('owner/repo url, options default', () => {
            const options = getOptions('mnichangxin/repo-download', {})
            expect(options).to.eql({
                repo: 'git@github.com:mnichangxin/repo-download.git',
                checkout: '',
                type: 'ssh',                
                dist: dist,
                custom: false,
            })
        })
    })
})
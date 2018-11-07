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
        const dist = process.cwd()
        let defaultOptions = {
            repo: 'git@github.com:mnichangxin/repo-download.git',
            checkout: '',
            type: 'ssh',
            dist: dist,
            custom: false,
        }
        let target = {}
        beforeEach(() => {
            target = {}
        })
        it('owner/repo url, options default', () => {
            const options = getOptions('mnichangxin/repo-download')
            expect(options).to.eql(Object.assign(target, defaultOptions))
        })
        it('git@github.com url, options default', () => {
            const options = getOptions('git@github.com:mnichangxin/repo-download.git')
            expect(options).to.eql(Object.assign(target, defaultOptions))
        })
        it('git@gitlab.com url, options default', () => {
            const options = getOptions('git@gitlab.com:mnichangxin/repo-download.git')
            expect(options).to.eql(Object.assign(target, defaultOptions, { repo: 'git@gitlab.com:mnichangxin/repo-download.git'}))
        })
        it('owner/repo url, options type:https', () => {
            const options = getOptions('mnichangxin/repo-download', {
                type: 'https'
            })
            expect(options).to.eql(Object.assign(target, defaultOptions, { repo: 'https://github.com/mnichangxin/repo-download.git'}))
        })
    })
})
/**
 * BDD Test
 */
const { expect } = require('chai')
const checkGit = require('../lib/util/check')
const getOptions = require('../lib/core/option')
const clone = require('../lib/core/clone')
const down = require('../lib/core/down')

describe('repo-download', () => {
    const OWNER_REPO_URL = 'mnichangxin/repo-download'
    const GITHUB_SSH_URL = 'git@github.com:mnichangxin/repo-download.git'
    const GITLAB_SSH_URL = 'git@gitlab.com:mnichangxin/repo-download.git'
    const GITHUB_HTTPS_URL = 'https://github.com/mnichangxin/repo-download.git'
    const GITLAB_HTTPS_URL = 'https://gitlab.com/mnichangxin/repo-download.git'
    const OWNER_REPO_URL_CHECKOUT = 'mnichangxin/repo-download#dev'
    const GITHUB_SSH_URL_CHECKOUT = 'git@github.com:mnichangxin/repo-download#dev.git'
    const GITHUB_HTTPS_URL_CHECKOUT = 'https://github.com/mnichangxin/repo-download#dev.git'
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
            repo: GITHUB_SSH_URL,
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
            const options = getOptions(OWNER_REPO_URL)
            expect(options).to.eql(Object.assign(target, defaultOptions))
        })
        it('github ssh url, options default', () => {
            const options = getOptions(GITHUB_SSH_URL)
            expect(options).to.eql(Object.assign(target, defaultOptions))
        })
        it('gitlab ssh url, options default', () => {
            const options = getOptions(GITLAB_SSH_URL)
            expect(options).to.eql(Object.assign(target, defaultOptions, { repo: GITLAB_SSH_URL}))
        })
        it('owner/repo url, options type:https', () => {
            const options = getOptions(OWNER_REPO_URL, {
                type: 'https'
            })
            expect(options).to.eql(Object.assign(target, defaultOptions, { 
                repo: GITHUB_HTTPS_URL,
                type: 'https'
            }))
        })
        it('github ssh url, options type:https', () => {
            const options = getOptions(GITHUB_SSH_URL, {
                type: 'https'
            })
            expect(options).to.eql(Object.assign(target, defaultOptions, {
                repo: GITHUB_HTTPS_URL,
                type: 'https'
            }))
        })
        it('gitlab ssh url, options type:https', () => {
            const options = getOptions(GITLAB_SSH_URL, {
                type: 'https'
            })
            expect(options).to.eql(Object.assign(target, defaultOptions, {
                repo: GITLAB_HTTPS_URL,
                type: 'https'
            }))
        })
        it('owner/repo ssh url has checkout', () => {
            const options = getOptions(OWNER_REPO_URL_CHECKOUT)
            expect(options).to.eql(Object.assign(target, defaultOptions, {
                repo: GITHUB_SSH_URL,
                checkout: 'dev'
            }))
        })
    })
})
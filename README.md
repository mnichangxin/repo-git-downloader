# repo-git-downloader

A tool to download git repository.

## Install

```sh
    npm install repo-git-downloader --save
    # OR
    yarn add repo-git-downloader -save
```

## API

### download(url, options, callback)

You can customize the name and reference this package. Like this:

``` sh
    const download = require('repo-git-downloader')
```

`download` receives 3 parameters:

* url: `Required`
* options: `Optional`
* callback: `Required`

#### url

It identifies the repository link of git. Support the following types:

##### GitHub

* owner/name: `mnichangxin/repo-git-downloader`
* github:owner/name: `github:mnichangxin/repo-git-downloader`
* git@github.com:owner/name.git: `git@github.com:mnichangxin/repo-git-downloader.git`
* https://github.com/owner/name.git: `https://github.com/mnichangxin/repo-git-downloader.git`

If you want to get a branch(dev, etc.) or tag(v1.0.0, etc.) from git repository:

* owner/name#checkout: `mnichangxin/repo-git-downloader#dev`
* github:owner/name#checkout: `github:mnichangxin/repo-git-downloader#dev`
* git@github.com:owner/name#checkout.git: `git@github.com:mnichangxin/repo-git-downloader#dev.git`
* https://github.com/owner#checkout/name.git: `https://github.com/mnichangxin/repo-git-downloader#dev.git`

##### GitLab

* gitlab:owner/name: `gitlab:mnichangxin/repo-git-downloader`
* git@gitlab.com:owner/name.git: `git@gitlab.com:mnichangxin/repo-git-downloader.git`
* https://gitlab.com/owner/name.git: `https://gitlab.com/mnichangxin/repo-git-downloader.git`

You also can get a branch(dev, etc.) or tag(v1.0.0, etc.) from git repository same as above.

## Examples


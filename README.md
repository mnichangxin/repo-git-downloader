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

* `owner/name`
* `github:owner/name`
* `git@github.com:owner/name.git`
* `https://github.com/owner/name.git`

If you want to get a branch(dev, etc.) or tag(v1.0.0, etc.) from git repository:

* `owner/name#checkout`
* `github:owner/name#checkout`
* `git@github.com:owner/name#checkout.git`
* `https://github.com/owner#checkout/name.git`

##### GitLab

* `gitlab:owner/name`
* `git@gitlab.com:owner/name.git`
* `https://gitlab.com/owner/name.git`

You also can get a branch(dev, etc.) or tag(v1.0.0, etc.) from git repository same as above.

#### options

#### callback

## Examples


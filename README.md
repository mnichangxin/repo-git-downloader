# repo-git-downloader

A tool to download git repository.

## Install

```sh
    npm install repo-git-downloader --save
    # OR
    yarn add repo-git-downloader --save
```

## API

### download(url, options, callback)

You can customize the name and reference this package. Such as:

``` js
    const download = require('repo-git-downloader')
```

`download` receives 3 parameters:

* url: `Required`
* options: `Optional`
* callback: `Required`

#### url

It identifies the repository link of git. Support the following types:

##### GitHub type url

* `owner/name`
* `github:owner/name`
* `git@github.com:owner/name.git`
* `https://github.com/owner/name.git`

If you want to get a branch(dev, etc.) or tag(v1.0.0, etc.) from git repository:

* `owner/name#checkout`
* `github:owner/name#checkout`
* `git@github.com:owner/name#checkout.git`
* `https://github.com/owner#checkout/name.git`

##### GitLab type url

* `gitlab:owner/name`
* `git@gitlab.com:owner/name.git`
* `https://gitlab.com/owner/name.git`

You also can get a branch(dev, etc.) or tag(v1.0.0, etc.) from git repository same as above.

#### options

##### type

It identifies the download type of git. It provides 3 options:

* ssh(defalut)
* https
* direct

The `direct` option allow to download a `*.zip` file of respository.

**Notes: If you use ssh, you must generate ssh ECDSA key at git repository**

##### dist

It identifies the location of the download. Default is current directory(`./`). You can define absolute paths and relative paths.

##### custom

* Boolean: true|false(defalut)

It define a custom git url if you use the company's internal network or private repository.

#### callback

The callback when download complete or throw a error. Having a parameter: `(err) => {}`

## Examples

* simple download:

``` js
    download('mnichangxin/repo-git-downloader', (err) => {
        if (err) {
            // handle err
            return
        }
        // handle done
    })
```

* Provide option type:

Although it is github `https` url, but using `type: ssh` to download by `ssh` type.

``` js
    download('https://github.com/mnichangxin/repo-git-downloader.git', {
        type: 'ssh'
    }, (err) {
        if (err) {
            // handle err
            return
        }
        // handle done
    })
```

* checkout download:

It will download `dev` branch of repository.

``` js
    download('mnichangxin/repo-git-downloader#dev', (err) => {
        if (err) {
            // handle err
            return
        }
        // handle done
    })
```

## License

[MIT](http://opensource.org/licenses/MIT)
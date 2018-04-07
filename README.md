# react-redux chrome extension

## Stay up-to-date with full control

Run `make yarn.lock` to bootstrap this project, it will install all the
dependencies without specifying a hard version: then you will get the
newest versions of its dependencies and can catch any warnings and
solve them on your own :)

There are no initial dependencies or devDependencies in the initial
`package.json`. It will be rather populated by `make yarn.lock`


## Tools to use:
- [webpack](https://github.com/petehunt/webpack-howto) to auto rebuild code.
- [babel 6](http://babeljs.io/docs/setup/#webpack) to compile es6/7 code to es5.
- [Extensions Reloader](https://chrome.google.com/webstore/detail/extensions-reloader/fimgfedafeadlieiabdeeaodndnlbhid) for easier reload extension


## npm scripts inside `package.json`:
```
  "scripts": {
    "start": "webpack -d --watch", // continuous incremental build in development with include source maps
    "build": "webpack -p" // building once for production
  }
```

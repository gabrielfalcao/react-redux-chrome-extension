'use strict';

const path = require('path');
const fs = require('fs');

const projectRootPath = fs.realpathSync(process.cwd());
const pathToProjectFile = relativePath => path.resolve(projectRootPath, relativePath);
const sourceRootPath = pathToProjectFile('src')
const pathToSourceFile = relativePath => path.resolve(sourceRootPath, relativePath);


module.exports = {
    entry: pathToSourceFile('index.js'),
    output: {
        path: pathToProjectFile('build/'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: [pathToProjectFile('node_modules')],
        extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    },
    module: {
        strictExportPresence: true,
        rules: [{ test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }]
    }
};

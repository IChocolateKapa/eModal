/**
 * Created by Echo on 16/5/25.
 */
var path = require('path');
//var webpack = require('webpack');

module.exports = {
    entry: "./eModal.js",
    output: {
        path: 'dist2',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css!autoprefixer'},
            { test: /\.less/, loader: 'style!css!autoprefixer!less'},
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader'},
            { test: /\.(html|tpl)$/, loader: 'html-loader' },
        ]
    },
    devtool: 'source-map',
    watch: true
};
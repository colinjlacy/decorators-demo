'use strict';

const local = require('./webpack.config');

local.entry.concat([
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
]);

module.exports = local;

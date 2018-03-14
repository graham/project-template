const path = require('path');
const webpack = require('webpack');

dev_config = require('./webpack.config');
dev_config.mode = "production";
dev_config.devtool = false;
module.exports = dev_config;



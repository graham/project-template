const path = require('path');
const webpack = require('webpack');

dev_config = require('./webpack.config');
dev_config.mode = "production";
module.exports = dev_config;



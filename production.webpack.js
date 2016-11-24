const path = require('path');
const webpack = require('webpack');

dev_config = require('./webpack.config');

dev_config.plugins[0] = new webpack.DefinePlugin({
    '__DEVTOOLS__': false, //set it to true in dev mode
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }
});

dev_config.plugins[1] = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
});


module.exports = dev_config;



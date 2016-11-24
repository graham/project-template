const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: "./src/main",
        home: "./app/home/src/main",

        vendor: [
            "preact",
            "preact-compat"
        ]
    },

    scripts: {
        build: "webpack"
    },

    output: {
        path: "compiled",
        filename: '[name].bundle.js'
    },

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            '__DEVTOOLS__': true, //set it to true in dev mode
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.bundle.js",
            minChunks: Infinity
        })
    ],

    resolve: {
        // allow resolving of the common lib by the alias "nfs-common"
        // to avoid using deeply nested relative paths (eg: "../../../src/lib")
        extensions: ['', '.ts', '.tsx', '.js'],
        alias: {
            'nfs-common': path.resolve(__dirname, 'src', 'lib'),
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        }
    }
};

const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",

    entry: {
        main: __dirname + "/src/main",
        home: __dirname + "/app/home/src/main",

        vendor: [
            "react",
            "react-dom",
        ]
    },

    output: {
        path: __dirname + "/app/static/compiled",
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
    },

    resolve: {
        extensions: [".tsx", ".js", ".ts", ".json"],
        alias: {
            'myproj-lib': path.resolve(__dirname, 'src', 'lib'),
        }
    },

    module: {
        rules: [{
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'ts-loader'
            }]
        }
       ]
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: "vendor",
                    name: "vendor",
                    chunks: "initial",
                    enforce: true
                }
            }
        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        publicPath: "http://localhost:8080/app/static/compiled/",
        hot: true
    }
};

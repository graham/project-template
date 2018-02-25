const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: __dirname + "/src/main",
        home: __dirname + "/app/home/src/main",
    },

    output: {
        path: __dirname + "/app/static/compiled",
        filename: '[name].bundle.js'
    },

    resolve: {
        extensions: [".tsx", ".js", ".ts", ".json"],
        alias: {
            'myproj-lib': path.resolve(__dirname, 'src', 'lib'),
        }
    },

    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'awesome-typescript-loader',
            exclude: /node_modules/
          }
       ]
    },

     optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },
};

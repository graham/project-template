const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",

    entry: {
        main: __dirname + "/src/main",

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

const PASS = "\x1b[32m"
const FAIL = "\x1b[31m";
const REGULAR = "\x1b[0m";
const pagesDirName = "app";
const pagesDirectory = './' + pagesDirName + '/';

var files;

try {
    files = fs.readdirSync(pagesDirectory);
} catch(e) {
    console.log('webpack_config_test doesnt have access to the file data so we need a default');
    files = [];
}

files.forEach(function(file) {
    if (fs.lstatSync(pagesDirectory + file).isDirectory() &&
        file != 'static' &&
        file[0] != '.' &&
        file[0] != '_'
       ){
        // if the key is already in the entry dict we can assume this is
        // manual and we shouldn't auto-handle. (but we will warn.)
        if (module.exports.entry[file] !== undefined) {
            console.log('\t', PASS, 'SKIP', REGULAR, 'Skipping ' + file + ' because of custom entry.');
            return;
        }

        // We've found a directory that we think we want to add, lets
        // make sure that it has a src/main.ts/.tsx file, if not, warn the user.
        const main_path = pagesDirName + '/' + file + '/src/main.tsx';
        if (fs.existsSync(main_path) == false) {
            console.log('\t', FAIL, 'FAIL', REGULAR, 'Skipping ' + file + ' because ' + file + '/src/main.tsx was not found.');
            return;
        }

        module.exports.entry[file] = pagesDirectory + file + '/src/main';
    }
});

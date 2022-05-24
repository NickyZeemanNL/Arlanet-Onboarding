const path = require('path');
const entryPlus = require('webpack-entry-plus');
const glob = require('glob');
const resolve = require('./webpack.resolve');

const entryFiles = [
    {
        entryFiles: glob.sync('./assets/js/*.js'),
        outputName(item) {
            return item.replace('assets/js', '../js');
        }
    }
];

module.exports = {
    entry: entryPlus(entryFiles),
    mode: 'production',
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'assets')
    },
    plugins: require('./webpack.plugins'),
    resolve: {
        ...resolve,
        modules: [__dirname, 'node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                }
            }
        ]
    }
};
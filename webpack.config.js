// module.exports = {
//     output: {
//         path: './static/js/build',
//         filename: 'app.bundle.js',
//     },
//     module: {
//         loaders: [{
//             test: /\.js$/,
//             exclude: /node_modules/,
//             loader: 'babel-loader'
//         }]
//     }
// }

const path = require('path');
const webpack = require('webpack');

// env
const buildDirectory = './static/js/build';

module.exports = {
    entry: './static/js/src/index.js',
    devServer: {
        hot: true,
        inline: true,
        port: 7700,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(buildDirectory),
        filename: 'app.js',
        publicPath: 'http://localhost:7700/dist',
    },
    externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-0'],
            },
        }],
    },
    plugins: [],
};
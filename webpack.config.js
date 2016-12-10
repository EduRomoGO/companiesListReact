module.exports = {
    entry: './static/js/src/index.js',
    output: {
        path: './static/js/build',
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            include: path.join(__dirname, 'src'),
            query: {
                cacheDirectory: true,
                presets: ["react", "es2015", "stage-0"],
            }
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: "file?hash=sha512&digest=hex&name=[hash].[ext]",
            include: path.join(__dirname, 'src/img')
        }, {
            test: /\.babylon$/,
            loader: "file?hash=sha512&digest=hex&name=[hash].[ext]",
            include: path.join(__dirname, 'src/meshes')
        }]
    },
    resolve: {
        root: [
            path.resolve('./node_modules')
        ],
        extensions: ['', '.js']
    }
};

var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: "eval-source-map",
    entry: [
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: "file?hash=sha512&digest=hex&name=[hash].[ext]",
            include: path.join(__dirname, 'src/img')
        }, {
            test: /\.babylon$/,
            loader: "file?hash=sha512&digest=hex&name=[hash].[ext]",
            include: path.join(__dirname, 'src/meshes')
        }]
    }
}

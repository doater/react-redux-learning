var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var NyanProgressPlugin = require('nyan-progress-webpack-plugin');
var SOURCE_MAP = true;
// 项目根目录
var rootPath = path.resolve(__dirname, '..');
//开发源码目录
var src = path.join(rootPath, 'src');
// 当前环境
var env = process.env.NODE_ENV;
var commonPath = {
    rootPath: rootPath,
    dist: path.join(rootPath, 'dist'),
    indexHTML: path.join(src, 'index.html'),
    staticDir: path.join(rootPath, 'static')
};
// 加入热重载 webpack-dev-middleware
module.exports = {
    devtool: SOURCE_MAP ? 'eval-source-map' : false,
    entry: {
        index: ['webpack-hot-middleware/client?reload=true', path.join(src,'app.jsx')]
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[id].js',
        path: commonPath.dist,
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            ASSET: path.join(src, 'assets'),
            COMPONENT: path.join(src, 'components'),
            ACTION: path.join(src, 'redux/actions'),
            REDUCER: path.join(src, 'redux/reducers'),
            STORE: path.join(src, 'redux/store'),
            ROUTE: path.join(src, 'routes'),
            SERVICE: path.join(src, 'services'),
            UTIL: path.join(src, 'utils'),
            HOC: path.join(src, 'utils/HoC'),
            MIXIN: path.join(src, 'utils/mixins'),
            VIEW: path.join(src, 'views')
        }
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        }]
    },
    plugins: [
        new NyanProgressPlugin(), // 进度条
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: commonPath.indexHTML,
            chunksSortMode: 'none',
            inject: false
        }),
        new BrowserSyncPlugin({
            host: '127.0.0.1',
            port: 9090,
            proxy: 'http://127.0.0.1:9000/',
            logConnections: false,
            notify: false
        }, {
            reload: false
        }),
        new webpack.DefinePlugin({
            __DEV__: env === 'development',
            __PROD__: env === 'production'
        })
    ]
}
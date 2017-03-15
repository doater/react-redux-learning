var express = require('express'),
    webpack = require('webpack'),
    config = require('./webpack.config'),
    app = express();

var path=require('path');

var compiler = webpack(config);

// 项目根目录
var rootPath = path.resolve(__dirname, '..');
//开发源码目录
var src = path.join(rootPath, 'src');
var commonPath = {
    rootPath: rootPath,
    dist: path.join(rootPath, 'dist'),
    indexHTML: path.join(src, 'index.html'),
    staticDir: path.join(rootPath, 'static')
};

// for highly stable resources
app.use('/static', express.static(commonPath.staticDir));

// app.use(favicon(path.join(__dirname, '../favicon.ico')));

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

// enable hot-reload and state-preserving
// compilation error display
app.use(require('webpack-hot-middleware')(compiler));

app.listen(9000, '127.0.0.1', function(err) {
    err && console.log(err);
});
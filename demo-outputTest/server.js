const express = require('express');
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

//  （猜测这里只是为了配置publicPath路径，但是publicPath路径到底是干嘛的就不知道了）
app.use(webpackDevMiddleware(compiler,{
    publicPath: config.output.publicPath
}))

app.listen(3000,function () {
    console.log("Example app listening on port 3000!\n");
})


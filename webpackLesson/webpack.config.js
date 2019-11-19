const path = require("path");
const webpack = require("webpack");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"[name][hash:5].js",
        path: path.resolve(__dirname,'dist')
    },
    devServer:{
        contentBase:"./dist",
        open:true,
        hot:true, //开启HMR
    },
    mode:'development',
    module:{
        rules:[
            {
                test:/.css$/,
                loader:["style-loader","css-loader"]
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        })
        
    ]
}
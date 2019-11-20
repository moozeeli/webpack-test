const path = require("path");
const webpack = require("webpack");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry:"./src/index.js",
    output:{
        /* filename:"[name][hash:5].js", */
        filename:"[name].js",
        path: path.resolve(__dirname,'dist')
    },
    devServer:{
        contentBase:"./dist",
        open:true,
        hot:true, //开启HMR
    },
    mode:'development', // 默认会压缩打包后的js，配置此项后会显示未压缩代码
    module:{
        rules:[
            {
                test:/.css$/,
                loader:[{
                    loader:"style-loader",
                    options:{
                    }
                },{
                    loader:"css-loader",
                    // css-loader的opitons
                    options:{
                        // import:false, // 禁用import
                        sourceMap:true
                    }
                }]
            },
            {
                test: /.(jpg|png|gif|jpeg)$/,
                loader: "file-loader",
                options:{
                    name:"[name]_[hash:5].[ext]", // 占位符 placeholder,查看 file-loader 文档
                    outputPath:'images/' // 配置输出目录
                }
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
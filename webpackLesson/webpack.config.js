const path = require("path");
const webpack = require("webpack");

const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry:{
        index:"./src/index.js",
        main:"./src/main.js"
    },
    devtool:"cheap-source-map",
    output:{
        /* filename:"[name][hash:5].js", */
        // publicPath:'/', //确保打包输出的文件 引用前面加了一个根路径
        filename:"[name].js",
        path: path.resolve(__dirname,'dist')
    },
    devServer:{
        contentBase:"./dist",
        open:true, // 自动从默认浏览器打卡页面
        hot:true, //开启HMR        
        // quiet: true, // 安静模式
        overlay: { // 页面显示错误
            warnings: true,
            errors: true
        }
    },
    mode:'development', // 默认会压缩打包后的js，配置此项后会显示未压缩代码
    module:{
        rules:[
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test:/\.scss$/,
                use:[{
                        loader:"style-loader",
                        options:{
                            // sourceMap:true, // 这里会报错
                        }
                    },{
                        loader:"css-loader",
                        options:{
                            modules:true,   //好像会影响热模块替换             
                            sourceMap: true // 只针对css 开启了source-map
                        }
                    },"sass-loader","postcss-loader"]
            },
            {
                test:/\.css$/,
                loader:[
                    // "file-loader",
                    "style-loader",
                    {
                    loader:"css-loader",
                    // css-loader的opitons
                    options:{
                        // import:false, // 禁用import
                        sourceMap:true
                    }
                }]
            },
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                loader: "file-loader",
                // 这个配置项对应的loader 值只能是一个字符串，不能是数组
                options:{
                    name:"[name]_[hash:5].[ext]", // 占位符 placeholder,查看 file-loader 文档
                    outputPath:'images/' // 配置输出目录
                }
            },
            {
                test: /\.(eot|ttf|svg|woff)$/,
                loader: "file-loader",
                options: {outputPath: 'iconfont/'} // 配置输出目录
            }
        ]
    },
    plugins:[        
        new webpack.HotModuleReplacementPlugin(), // 热模块更新  
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),      
    ]
}
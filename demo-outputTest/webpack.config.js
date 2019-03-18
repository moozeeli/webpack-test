const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config  = {
    entry: './src/index.js',
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist')
    },
    //  实现开发时的source-map,方便查看定位代码位置；
    devtool: "inline-source-map",    
    devServer: {
        contentBase: "./dist"
    },    
    plugins: [
        //  实现 dist目录每次编译前的清理
        new CleanWebpackPlugin(['dist']),        
        // 实现自动生成 index.html
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                "file-loader"
            ]
        }]
    }
};

module.exports = config;
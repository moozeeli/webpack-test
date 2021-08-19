const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = [
  {
    name:'test',
    mode:'production',
    // devtool:'source-map',
    entry: {
      main:'./src/index.js',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      // pathinfo:false
    },
    optimization: {
    //     providedExports:false,
    //     sideEffects:true,
    //   // usedExports: true, // 标记被使用的导出内容
        minimize: false,     // 不压缩代码 
        runtimeChunk: {
          name: 'runtime'   // runtime 打包成独立js
        }
    },
    module:{
      rules:[{
        test:/\.css$/,
        use:[ 'style-loader', 'css-loader' ]
      }]
    }
  },

  
  // demo0
  {
    name:'demo0',
    mode:'production',
    entry: {
      main:'./demo0/index.js',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, './demo0/dist'),
    },
    optimization: {
        minimize: false,     // 不压缩代码 
        runtimeChunk: {
          name: 'runtime'   // runtime 打包成独立js
        }
    },
    plugins:[
      new CleanWebpackPlugin(),
    ]
  }
]
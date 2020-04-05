### demo-output 目录说明

此目录下是 webpack 输出管理指南的实现测试。
指南文档：https://www.webpackjs.com
2019年3月18日


#### 模块热替换

1. 修改webpack.config.js

```
const webpack = require('webpack');

 ...
entry: {
-      app: './src/index.js',
-      print: './src/print.js'
+      app: './src/index.js'
},

 ...
 devServer: {
      contentBase: './dist',
+     hot: true
    },
...
plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
    title: 'Hot Module Replacement'
    }),
+   new webpack.NamedModulesPlugin(),
+   new webpack.HotModuleReplacementPlugin()
],
...

```


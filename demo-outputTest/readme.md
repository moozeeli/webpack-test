### demo-output 目录说明

此目录下是 webpack 输出管理指南的实现测试。
指南文档：https://www.webpackjs.com
2019年3月18日


##### 管理输出

管理输出，主要是使用 html-webpack-plugin 自动生成 html；

1. 添加 html-webpack-plugin
执行以下命令：
```
npm i -D html-webpack-plugin
```
2. 在 webpack.config.js中配置 html-weppack-plugin
3. 安装 并配置 clean-webpack-plugin


##### 开发工具（方便开发时候使用的一些功能）

4. 新建多个js,并在index.js中 import;
```
import A  from "./a.js";
import B from "./b.js";
// ...
A();
B();

```


5. 在webpack.config.js中添加配置项
```
devtool: "inline-source-map"
```
6. 查看编译后的js报错，会发现报错位置定位到了源文件。

7. 使用 webpack-dev-server,实现微服务热刷新页面
```
 npm install --save-dev webpack-dev-server
```
编辑 package.json. 添加 dev命令
```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "watch": "webpack --watch",
+   "dev": "webpack-dev-server --open"
  },
```
修改webpack.config.js,添加配置项
```
    devServer: {
        contentBase: "./dist"
    },    

```
8. 运行 npm run dev

浏览器会自动打开微服务页面，地址默认为 localhost:8080;

此时修改代码，webpack会自动编译，并且浏览器会自动刷新。

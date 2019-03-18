### demo-webpackjs.com目录说明 
2019年3月18日

根据 webpack 中文网站指南搭建配置webpack
https://www.webpackjs.com

1. npm init -y 
2. 安装 webpack 依赖
```
npm  i webpack webpack-cli -D
```
3. 创建src/index.js 及 dist/index.html
4. dist/index.html 中引入 ./src/index.js
5. npm install --save lodash // 用户生成环境，没有使用--save-dev

6. 在 src/index.js 中 import lodash;
7. 执行 npx webpack ,如果无法正常执行， 先执行 npm i npm -g 进行npm的升级

### 进行配置
8. 新建 webpack.config.js文件
```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
9. 执行 npx webpack --config webpack.config.js

### 配置 npm script
10. 在package.json中做如下修改：
```
"scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
+     "build": "webpack"
    },
```
11. 执行 npm run build



### 资源管理
12. 安装 style-loader css-loader
```
npm install --save-dev style-loader css-loader
```
13. 修改 webapck.config.js
``` 
 module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
+   module: {
+     rules: [
+       {
+         test: /\.css$/,
+         use: [
+           'style-loader',
+           'css-loader'
+         ]
+       }
+     ]
+   }
  };
```
14. 新增 style.css 文件,并在index.js中添加 import "./style.css"；
15. 编译查看

执行npm run build,
浏览器打开index.html文件，使用元素查看器，查看 在head元素之间，动态添加了style元素（不是 link）

16. 加载图片,安装file-loader
```
npm i -D file-loader
```
修改 webpack.config.js:
```
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
+       {
+         test: /\.(png|svg|jpg|gif)$/,
+         use: [
+           'file-loader'
+         ]
+       }
      ]
    }
```
在index.js中添加:
```
import MyImage from './my-image.png'
```
并在主逻辑中添加如下代码:
```
// 将图像添加到我们现有的 div。
var myIcon = new Image();
myIcon.src = logo;
element.appendChild(myIcon);
```
17. 执行npm run build,刷新页面，发现图片被编译后放入了/dist目录


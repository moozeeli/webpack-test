
/* 向js中引入css */
import imgUrl from "./style/myhead.jpg"
import common from "./style/common.scss";

import iconfont from "./style/iconfont/iconfont.css";

import { Header } from "./components/Header/index";
import { Bottom } from "./components/Bottom/index";

import { PAI, PAI2, PAI3, p1, p2, p3 } from "./moduleTest/PAI";
import * as PAI_Module from "./moduleTest/PAI";
import PAIdefault from "./moduleTest/PAI";
const PAI_Module_require_in = require('./moduleTest/PAI');

import commonjsModule from "./moduleTest/commonjsModule.js";

import { name } from "./moduleTest/commonjsModule.js";
const commonjsModule_require_in = require("./moduleTest/commonjsModule");
const { name:name_require_in } = require("./moduleTest/commonjsModule");


console.group("ESM解构导入PAI Module");
console.log("PAI:", PAI);
console.log("PAI2:", PAI2 );
console.log("PAI3:", PAI3 );
console.log("p1:", p1 );
console.log("p2:", p2 );
console.log("p3:", p3 );
console.groupEnd();

console.log("导入PAI Module default",PAIdefault);
console.log("\n");
console.group("测试修改 import 导入 PAI default");
console.warn("修改 PAIdefault");
PAIdefault.PAI = 12123; // 这里会正常执行，因为PAIdefault 是模块中自己导出的对象，未经冻结处理
console.log("PAIdefault", PAIdefault);
console.groupEnd();

console.log("\n");
console.group("测试commonjsModule的不同导入方式");
console.log("import 导入commonjsModule:", commonjsModule);
console.log("解构 import 导入 commonjsModule:", name);
console.log("require 导入 commonjsModule:", commonjsModule_require_in);
console.log("解构 require 导入 commonjsModule:", name_require_in);
console.groupEnd();

console.log("\n");
console.group("测试修改commonjsModule");
console.warn("修改 commonjsModule 属性 age=100");
try {
    commonjsModule.age = 100; // 可正常修改
    console.log("commonjsModule 属性age修改成功：", commonjsModule);
} catch (error) {
    console.error("修改 commonjsModule 属性 报错");
}
console.groupEnd();




console.log("PAI_Module_require_in",PAI_Module_require_in);
console.log("PAI_Module", PAI_Module);
// 测试针对 export 导出 的不同导入方式是否结果一直
console.log("PAI_Module_require_in===PAI_Module", PAI_Module_require_in === PAI_Module);

console.log("\n");
console.group("测试修改 PAI_Module ");
console.warn("修改 PAI_Module 属性 PAI='123123'");
try {
    PAI_Module.PAI = "123123" // 这里会报错    
    console.log("PAI_Module属性 PAI 修改成功", PAI_Module);
} catch (error) {
    console.error("修改 PAI_Module.PAI 出现错误，因为是ES6 模块语法导出");
}
console.log("=======================");
console.warn("修改 PAI_Module_require_in 属性 PAI='123123'");
try {
    PAI_Module_require_in.PAI = "123123" // 这里会报错    
    console.log("PAI_Module_require_in属性 PAI 修改成功", PAI_Module_require_in);
} catch (error) {
    console.error("修改 PAI_Module_require_in.PAI 出现错误，因为是ES6 模块语法导出");
}
console.groupEnd();

console.log("=======================");
console.log("** 模块内部属性能否修改与模块导入方式无关，只与模块导出方式相关： 使用es6模块语法导出的模块无法修改模块属性，使用commonjs语法导出的模块可修改属性 **");
console.log("=======================");





let header = new Header();
if (header) {
    let img = new Image();
    img.src = imgUrl;
    img.classList.add(common.myHead);
    header.appendChild(img);
}



Bottom();

console.warn("index.js is loaded");
console.log("common", common);

let root = document.getElementById("root");
let button = document.createElement("button");

var div2 = document.createElement("p");
div2.className = common.imgBg;
div2.innerHTML = "this is a div2 ";


button.innerHTML = "add";
button.onclick = function () {
    let p = document.createElement("p");
    p.classList.add(common.myP)
    p.innerHTML = "this is a p ";
    div2.appendChild(p);
}

root.appendChild(button);
root.appendChild(div2);
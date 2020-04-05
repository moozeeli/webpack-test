
/* 向js中引入css */
import imgUrl from "./style/myhead.jpg"
import common from "./style/common.scss";

import iconfont from "./style/iconfont/iconfont.css";

import { Header } from "./components/Header/index";
import { Bottom } from "./components/Bottom/index";

import { PAI, PAI2, PAI3, p1, p2, p3 } from "./moduleTest/PAI";
import PAIdefault, * as PAI_Module from "./moduleTest/PAI";
import commonjsModule from "./moduleTest/commonjsModule.js";
import {name} from "./moduleTest/commonjsModule.js";

console.log("=======================");
console.table(PAI, PAI2,PAI3);
console.log("=======================");
console.log("PAIdefault");
console.table(PAIdefault)

console.log("=======================");
console.log("commonjsModule",commonjsModule);
console.log("修改 commonjsModule 属性");
try {
    commonjsModule.age = 100; // 可正常修改
    console.log("commonjsModule", commonjsModule);
} catch (error) {
    console.error("修改 commonjsModule 属性 报错");        
}
console.log("commonjsModule name", name);
console.log("=======================");

console.log("PAIdefault", PAIdefault);
console.log(p1,p2,p3);


console.log("修改 PAIdefault");
PAIdefault.PAI = 12123; // 这里会正常执行，因为PAIdefault 是模块中自己导出的对象，未经冻结处理
console.log("PAIdefault", PAIdefault);


// 测试修改 es6模块能否修改属性值
console.log("PAI_Module", PAI_Module);
console.log("修改 PAI_Module");
try {
    PAI_Module.PAI = "123123" // 这里会报错    
} catch (error) {
    console.error("修改 PAI_Module.PAI 出现错误，因为是ES6 模块语法");
}
console.log("PAI_Module", PAI_Module);

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
button.onclick=function () {
    let p = document.createElement("p");
    p.classList.add(common.myP)
    p.innerHTML = "this is a p ";
    div2.appendChild(p);
}

root.appendChild(button);
root.appendChild(div2);
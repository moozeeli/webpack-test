
/* 向js中引入css */
import imgUrl from "./style/myhead.jpg"
import common from "./style/common.scss";

import iconfont from "./style/iconfont/iconfont.css";

import { Header } from "./components/Header/index";
import { Bottom } from "./components/Bottom/index";

import paiTest, { PAI, PAI2, PAI3, p1, p2, p3 } from "./moduleTest/PAI";
import PAIdefault, * as paiTest2 from "./moduleTest/PAI";

console.log("paiTest2", paiTest2);
console.log("PAIdefault", PAIdefault);
console.log(p1,p2,p3);

console.log(PAI);
console.log(PAI2);
console.log(PAI3);
console.log(paiTest);


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
 /**
  * 创建 p 标签 dom对象
  * @param {String} str  文本内容
  * @param {string} className p标签的className
  *  */ 
 export  default function createP(str,className) {
     let p  =document.createElement("p");
     p.innerText = str;
     p.className = className;
     return p;
 }
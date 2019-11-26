 /**
  * 创建 p 标签 dom对象
  * @param {String} str  文本内容
  * @param {string} className p标签的className
  *  */ 
function createP(str,className) {
     let p  =document.createElement("p");
     p.innerText = str;
     p.className = className;
     return p;
 }
function createDiv(str, className) {
    let p = document.createElement("div");
    p.innerText = str;
    p.className = className;
    return p;     
}
function createNode({tagName="div",contentStr="",className=""}) {
    let div = document.createElement(tagName);
    div.innerText = contentStr;
    div.className = className;
    return div;             
}

export default {
    createP,
    createDiv,
    createNode
}
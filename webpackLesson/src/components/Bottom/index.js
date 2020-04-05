import createNodeUtil from "../createNodeUtil";
import style from "./style.scss";

/**
 * 创建 className 为 header的 p 标签，
 * 并追加到 root元素
 */ 
console.log("style", style);

export  function Bottom() {
    let bottom = createNodeUtil.createP("this is bottom",'bottom');    
    bottom.classList.add(style.bottom)
    let root = document.querySelector("#root");
    root.appendChild(bottom);  
    return bottom  
}

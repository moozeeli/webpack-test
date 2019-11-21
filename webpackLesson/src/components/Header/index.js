import CreateP from "../CreateP.js";
import style  from "./style.scss";

/**
 * 创建 className 为 header的 p 标签，
 * 并追加到 root元素
 */ 
export  function Header() {
    let header = CreateP("this is Header",style.header);    
    let root = document.querySelector("#root");
    root.appendChild(header);    
}

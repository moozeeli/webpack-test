import "./style.css";
import Data from "./data.json";

var body = document.querySelector("body");
body.append("自动编译，但不会热加载");
body.append(document.createElement("br"));
body.append(document.createElement("hr"));
let dataString = JSON.stringify(Data);
console.log(Data)
body.append(dataString);


cosnole.error("error");
// body.appendChild(myIcon);
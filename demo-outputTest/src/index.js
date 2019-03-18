import "./style.css";
import Data from "./data.json";

var body = document.querySelector("body");
body.append("index.js->bundle.js<br>");


let dataString = JSON.stringify(Data);
console.log(Data)
body.append(dataString);


cosnole.error("error");
// body.appendChild(myIcon);
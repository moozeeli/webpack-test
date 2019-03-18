module.exports = function () {
    let div = document.createElement("div");
    div.innerHTML = "this is div,and change 1 2";
    var body = document.querySelector("body");
    body.append(div);
}
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const colorName = document.getElementById("color");
const btnColor = document.getElementById("btn");
const copied = document.querySelector(".copied");
if (!window.localStorage.getItem("backgroundColor")) {
    document.body.style.backgroundColor = "#808080";
} else {
    let name = window.localStorage.getItem("backgroundColor");
    document.body.style.backgroundColor = name;
    colorName.textContent = name;
}
btnColor.addEventListener("click", function () {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += colors[randomChoice()];
    }
    document.body.style.backgroundColor = color;
    colorName.textContent = color;
});
function randomChoice() {
    return Math.floor(Math.random() * colors.length);
}
colorName.addEventListener("click", function () {
    window.navigator.clipboard.writeText(colorName.textContent);
    const copied = document.createElement("div");
    copied.textContent = "Copied";
    copied.className = "copied";
    document.body.appendChild(copied);
    copied.addEventListener("animationend", function () {
        document.body.removeChild(copied);
    });
});
window.addEventListener("unload", function () {
    window.localStorage.setItem("backgroundColor", colorName.textContent);
});
/*
setTimeout(function () {
    alert("Click on the color name to copy it to the clipboard.");
}, 0);
*/

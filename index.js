/*設置監聽器，使得 range 被變更時，在輸出欄位顯示 rgb 數值以及 hex 值*/
const wrap = document.querySelector(".wrap");

wrap.addEventListener("click", function (event) {
  const target = event.target;
  const targetValue = event.target.value;

  if (target.className.includes("input") === true) {
    const rgbDisplay = target.nextElementSibling;
    rgbDisplay.innerHTML = `${targetValue}`;

    const rgbRed = document.querySelector("#red").value;
    const rgbGreen = document.querySelector("#green").value;
    const rgbBlue = document.querySelector("#blue").value;
    const hexDisplay = document.querySelector("p");
    hexDisplay.innerText = `${finalHex(rgbRed, rgbGreen, rgbBlue)}`;

    const body = document.querySelector("body");
    body.style.background = `${finalHex(rgbRed, rgbGreen, rgbBlue)}`;
  }
});

/* 函式庫 */
function rgbToHex(rgb) {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
}

function finalHex(r, g, b) {
  const red = rgbToHex(r);
  const green = rgbToHex(g);
  const blue = rgbToHex(b);
  return "#" + red + green + blue;
}
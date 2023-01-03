let widthEl = document.querySelector("#width");
let heightEl = document.querySelector("#height");
let borderRadiusEl = document.querySelector("#borderRadius");
let colorEl = document.querySelector("#colors");
let submitBtnEl = document.querySelector("#submit-btn");
let resetBtnEl = document.querySelector("#reset-btn");
let shapeEl = document.querySelector(".shape");

submitBtnEl.addEventListener("click", function () {
  if (widthEl.value === "" || heightEl.value === 0) {
    shapeEl.style.width = "100px";
    shapeEl.style.height = "100px";
    shapeEl.style.borderRadius = "0px";
    shapeEl.style.background = "red";
  } else {
    shapeEl.style.width = `${widthEl.value}px`;
    shapeEl.style.height = `${heightEl.value}px`;
    shapeEl.style.borderRadius = `${borderRadiusEl.value}px`;
    shapeEl.style.background = colorEl.value;
  }
});

resetBtnEl.addEventListener("click", function () {
  widthEl.value = "";
  heightEl.value = "";
  borderRadiusEl.value = "";
  colorEl.value = "color";
  shapeEl.style.width = "100px";
  shapeEl.style.height = "100px";
  shapeEl.style.borderRadius = "0px";
  shapeEl.style.background = "red";
});
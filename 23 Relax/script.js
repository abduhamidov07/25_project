let circle = document.querySelector("#circle");
document.addEventListener(
  "click",
  function (f) {
    circle.style.transform = "translateY(" + (f.clientY - 50) + "px)";
    circle.style.transform += "translateX(" + (f.clientX - 50) + "px)";
  },
  false
);

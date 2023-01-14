function changeImage() {
    let image = document.getElementById('lamp-img');
    if (image.src.match("bulbon")) {
      image.src = "pic_bulboff.gif";
    } else {
      image.src = "pic_bulbon.gif";
    }
  }

document.getElementById("toggle").addEventListener("click", function () {
   document.getElementsByTagName("body")[0].classList.toggle("light-theme");
});
const generateBtn = document.querySelector(".btn");
const palettes = document.querySelector(".palettes");
const container = document.querySelector(".container");
const message = document.querySelector(".message");

const generatePlatte = () => {
  palettes.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
    randomColor = `#${randomColor.padStart(6, "0")}`;

    const palette = document.createElement("div");
    palette.classList.add("palette");
    palette.innerHTML = `
      <div class="color" style="background-color: ${randomColor};"></div>
      <h3>${randomColor}</h3>
    `;
    palette.addEventListener("click", () => copyColor(randomColor));
    palettes.appendChild(palette);
  }
};

generatePlatte();

const copyColor = (colorVal) => {
  const colorCop = container.querySelector("#ColorVal");
  message.style.transform = `scale(1)`;
  navigator.clipboard.writeText(colorVal).then(() => {
    colorCop.innerText = `${colorVal}`;
    setTimeout(() => (message.style.transform = `scale(0)`), 2000);
  });
};

generateBtn.addEventListener("click", generatePlatte);

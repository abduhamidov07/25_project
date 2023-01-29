const buttonGroup = document.querySelector(".function-buttons");
const countNumber = document.querySelector("#count-number");

// add && remove
buttonGroup.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
        countNumber.innerHTML--
        setColor()
    } 
    if (e.target.classList.contains('reset')) {
        countNumber.innerHTML = 0
        setColor()
    }
    if (e.target.classList.contains('add')) {
        countNumber.innerHTML++
        setColor()
    } 
})

// set number color
function setColor() {
    if (countNumber.innerHTML > 0) {
        countNumber.style.color = "limegreen"
    } else if (countNumber.innerHTML < 0) {
        countNumber.style.color = "crimson"
    } else {
        countNumber.style.color = "#000"
    }
}
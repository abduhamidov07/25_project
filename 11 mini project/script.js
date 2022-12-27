let widthEl = document.querySelector('#width');
let heightEl = document.querySelector('#height');
let borderRadiusEl = document.querySelector('#borderRadius');
let colorEl = document.querySelector('#colors');
let btnEl = document.querySelector('#submit-btn');
let shapeEl = document.getElementsByClassName('shape');

btnEl.addEventListener('click', function () {
    shapeEl.style.width = `${widthEl.value}px`;
    shapeEl.style.height = `${heightEl.value}px`;
    shapeEl.style.background = colorEl.value;
})

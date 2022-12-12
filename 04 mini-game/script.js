let btn1 = document.querySelector('#btn1');
let question = document.querySelector('.question');

const random = (min, max) => {
 let rand = min + Math.random() * (max - min + 100);
 return Math.floor(rand);
}

let btn = document.querySelector('#btn');
btn.addEventListener('mouseenter', () => {
 btn.style.left = `${random(0, 90)}%`;
 btn.style.top = `${random(0, 90)}%`;
})

btn.addEventListener('click', function(){
 question.textContent = 'Error! Please try again!!!'
})

btn1.addEventListener('click', function(){
 question.textContent = 'Thanks for the honesty!!!'
})
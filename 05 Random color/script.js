let totalEl = document.querySelector('.total');
let spanEl = document.getElementById('span');
let btnEl = document.getElementById('btn');
let hex = '0123456789ABCDEF'
let i;

btnEl.addEventListener("click", function () {
    let res = '#'
    for (i = 0; i < 6; i++) {
        let pos = Math.floor(Math.random() * 16);
        res += hex[pos]
    }
    totalEl.style.backgroundColor = res;
    spanEl.innerHTML = res
})


































































































































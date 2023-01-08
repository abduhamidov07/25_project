let textEl = document.getElementById('textarea');
let msgEl = document.getElementById('msg');

textEl.addEventListener('input', function (e) {
    let target = e.target;
    let currentLength = target.value.replace(/[ ]/g, '').length;

    msgEl.innerHTML = `Total character: ${currentLength}`;
});
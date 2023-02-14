let textEl = document.getElementById('textarea');
let msgEl = document.getElementById('msg');
let selectEl = document.getElementById('select');

textEl.addEventListener('input', function (e) {
    if (selectEl.value == 'consonant') {
        let target = e.target;
        let currentLength = target.value.replace(/[ ]/g, '').replace(/[aeiuo]/gi, '').length;
        msgEl.innerHTML = `Total consonant: ${currentLength}`;
    } else if (selectEl.value == 'vowel') {
        let target = e.target;
        let func = target.value.replace(/[ ]/g, '').match(/[aeiuo]/gi)
        let currentLength = func == null ? 0 : target.value.replace(/[ ]/g, '').match(/[aeiuo]/gi).length;
        // let currentLength = target.value.replace(/[ ]/g, '').match(/[aeiuo]/gi).join('').length;
        msgEl.innerHTML = `Total vowel: ${currentLength}`;
    } else {
        let target = e.target;
        let currentLength = target.value.replace(/[ ]/g, '').length;
        msgEl.innerHTML = `Total character: ${currentLength}`;
    }
});

// let s = 'la'
// let q = s.replace(/[ ]/g, '').match(/[aeiuo]/gi)
// let a = q == null ? 0 : s.replace(/[ ]/g, '').match(/[aeiuo]/gi).length;
// console.log(a);
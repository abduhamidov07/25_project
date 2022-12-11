let textEl = document.getElementById('textarea');
let btnEl = document.getElementById('btn');

btnEl.addEventListener('click', function () {
    let text = textEl.value;
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'en-US'; 
    utter.text = text;
    utter.volume = 0.8;
    window.speechSynthesis.speak(utter);
})

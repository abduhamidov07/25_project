const navbarLogo = document.querySelector(".nav__logo");
const translateBtn = document.querySelector(".translate-btn");
const firstInput = document.querySelector(".area-1");
const secondInput = document.querySelector(".area-2");
const shareBtn = document.querySelector(".share-btn");
const changeBtn = document.querySelector(".change-btn");
// varribles
const lotinAlphabet = /sh|ch|ya|[a-z]|'/gi;
const krillAlphabet = /[а-я]/gi;
const lotinArr = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "ch", "c", "v", "b", "n", "m", "sh", "'", "ya", "i"];
const krillArr = ["к", "w", "е", "р", "т", "й", "у", "и", "о", "п", "а", "с", "д", "ф", "г", "х", "ж", "к", "л", "з", "х", "ч", "к", "в", "б", "н", "м", "ш", "", "я", "ы"];
let inputValue = "";
let isChanged = false;

// Validator
const validator = (value, replace) => {
    let res = firstInput.value.replace((!isChanged ? lotinAlphabet : krillAlphabet), (x) => {
        if (x.toLowerCase() === value) {
            return replace;
        }

        return x;
    });

    return res;
};
// Translator
translateBtn.addEventListener("click", () => {
    inputValue = firstInput.value;
    (!isChanged ? lotinArr : krillArr).forEach((i, key) => {
        let res = validator(i, (!isChanged ? krillArr : lotinArr)[key]);
        firstInput.value = res;
        secondInput.value = res;
    });

    firstInput.value = inputValue;
});
// Change translator
changeBtn.addEventListener("click", () => {
    isChanged = !isChanged;
    if (isChanged) {
        navbarLogo.innerHTML = "KRILL-<span>LOTIN</span> translator";
    } else {
        navbarLogo.innerHTML = "LOTIN-<span>KRILL</span> translator";
    }
    firstInput.value = "";
    secondInput.value = "";
    navigator.vibrate([500]);
});
// Share site
shareBtn.addEventListener("click", () => {
    const shareData = {
        title: "KRILL-LOTIN TARJIMON",
        text: "Matinlaringizni bir bosish orqali lotinchadan krillchaga yoki krillchadan lotinchaga tarjima qiling!",
        url: "https://uz-kr.netlify.app"
    };

    try {
        navigator.share(shareData);
    } catch (e) {
        console.log(e);
        alert("Your browser not supported this function!");
    };
});
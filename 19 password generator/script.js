// elements
let inputEl = document.querySelector("#input");
let btnEl = document.querySelector("#btn");
let character = document.querySelector("#characters");
let copyBtn = document.querySelector("#copy-btn");
let hex = "0123456789qwertyuiopasdfghjklzxcvbnm!@#$%^&*";
let i;

// create password btn
btnEl.addEventListener("click", function () {
  let res = "";
  for (i = 0; i < character.value; i++) {
    let pos = Math.floor(Math.random() * 44);
    res += hex[pos];
  }
  // show password in input
  inputEl.value = res;
});

// copy btn
copyBtn.addEventListener("click", function () {
  // Select the text field
  inputEl.select();
  inputEl.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(inputEl.value);

//   Alert the copied text
  alert("Copied the text: " + inputEl.value);
});

let textEl = document.querySelector("#text");
let content = document.querySelector("#content");

textEl.addEventListener("input", function (e) {
  let editedContent = content.textContent.replaceAll(
    e.target.value,
    `<mark>${e.target.value}</mark>`
  );
  content.innerHTML = editedContent;
});
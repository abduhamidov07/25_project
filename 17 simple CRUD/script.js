let btn = document.getElementById("btn");
let input = document.getElementById("textarea");
let msg = document.getElementById("message");
let posts = document.getElementById("posts");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  formValidation();
});


let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
  } else {
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  createPost();
};

let createPost = () => {
  posts.innerHTML += `
  <div class="post">
    <div>${data.text}</div>
    <span class="func">
      <i onClick="editPost(this)" class="bi bi-pencil-square text-dark"></i>
      <i onClick="deletePost(this)" class="bi bi-trash text-dark"></i>
    </span>
  </div>
  `;
  input.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
function changeTheme() {
  let body = document.querySelector("body");

  /* body.classList.toggle("dark"); */

  if (body.classList.contains("dark-button")) {
    body.classList.remove("dark-button");
  } else {
    body.classList.add("dark-button");
  }
}

let themeButton = document.querySelector(".dark-button");
themeButton.addEventListener("click", changeTheme);

function pressButton() {
  alert("My favorite color is light blue 💙");
}

let button = document.querySelector(".color-button");
button.addEventListener("click", pressButton);

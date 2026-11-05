let nameInput = "";
let githubInput = "";
let emailInput = "";

const fName = document.getElementById("nameInput");
const email = document.getElementById("emailInput");
const github = document.getElementById("githubInput");
const formButton = document.getElementById("formContainer");

function getinput(e) {
  localStorage.setItem("nameInput", fName.value);
  localStorage.setItem("emailInput", email.value);
  localStorage.setItem("githubInput", github.value);
}

if (formButton) {
  formButton.addEventListener("submit", getinput);
}

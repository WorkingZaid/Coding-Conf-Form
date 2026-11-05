let nameInput = "";
let githubInput = "";
let emailInput = "";

const fName = document.getElementById("nameInput");
const email = document.getElementById("emailInput");
const github = document.getElementById("githubInput");
const formButton = document.getElementById("formContainer");
const userLegalName = document.getElementById("userLegal");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("email");

function getinput(e) {
  localStorage.setItem("nameInput", fName.value);
  localStorage.setItem("emailInput", email.value);
  localStorage.setItem("githubInput", github.value);
}

if (formButton) {
  formButton.addEventListener("submit", getinput);
}
if (userLegalName) {
  userLegalName.innerText = localStorage.getItem("nameInput");
  userName.innerText = localStorage.getItem("githubInput");
  userEmail.innerText = localStorage.getItem("emailInput");
}

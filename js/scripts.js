let nameInput = "";
let githubInput = "";
let emailInput = "";

const fName = document.getElementById("nameInput");
const email = document.getElementById("emailInput");
const github = document.getElementById("githubInput");
const formButton = document.getElementById("formContainer");


function getinput(e){
    e.preventDefault();
    localStorage.setItem("nameInput", fName.value);
    localStorage.setItem("emailInput", email.value);
    localStorage.setItem("githubInput", github.value);

    console.log("eriuogn");
    
}

formButton.addEventListener("submit", getinput);


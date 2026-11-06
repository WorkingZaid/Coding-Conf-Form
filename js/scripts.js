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
const pictureInput = document.getElementById("uploadProfilePicture");
const uploadIcon = document.getElementById("uploadIcon");
const pictureTicket = document.getElementById("profilePicture");

//Coding the drag and drop portion of the login page

function getinput(e) {
  localStorage.setItem("nameInput", fName.value);
  localStorage.setItem("emailInput", email.value);
  localStorage.setItem("githubInput", github.value);
  localStorage.setItem("imgURL", pictureTicket.src);
}

if (formButton) {
  formButton.addEventListener("submit", getinput);
}

if (userLegalName) {
  userLegalName.innerText = localStorage.getItem("nameInput");
  userName.innerText = localStorage.getItem("githubInput");
  userEmail.innerText = localStorage.getItem("emailInput");
  pictureTicket.src = JSON.parse(localStorage.getItem("imgURL"));
  console.log("efnjewf");
}
/*Handling drag and drop system*/
let currentURL = null;
if (pictureInput) {
  pictureInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    currentURL = URL.createObjectURL(file);
    uploadIcon.src = currentURL;/*Changing the source to an img*/
    
    const reader = new FileReader();
    reader.onload = () => {
      currentURL = URL.createObjectURL(file);
      localStorage.setItem("imgURL", JSON.stringify(currentURL));
    };
  });
}
//

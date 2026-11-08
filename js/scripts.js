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
const ticketName = document.getElementById("gradientName");

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
  ticketName.innerText = localStorage.getItem("nameInput");
  userLegalName.innerText = localStorage.getItem("nameInput");
  userName.innerText = localStorage.getItem("githubInput");
  userEmail.innerText = localStorage.getItem("emailInput");
  pictureTicket.src = JSON.parse(localStorage.getItem("imgURL"));
}
/*Handling drag and drop system*/
let currentURL = null;
if (pictureInput) {
  pictureInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    const reader =
      new FileReader(); /*Creating a file reader object that takes a file and allows the randompath file to be converted to a usable link for the next page*/
    reader.readAsDataURL(
      file,
    ); /*This Takes the file and converts it to a data URL*/
    reader.addEventListener("load", (e) => {
      /*This occurs when file reader occurs and fully loads*/
      currentURL =
        reader.result; /*This takes the file that was covnerted to a data URL and stores it in a variable*/
      uploadIcon.src = currentURL;
      /*This changes the src to the dataURL that was stored in the variable*/
      localStorage.setItem("imgURL", JSON.stringify(currentURL));
      /*converting and storing the dataURL inside local storage and under imgURL*/
    });
  });
}

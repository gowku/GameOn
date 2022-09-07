function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModalBtn = document.querySelector(".close");
const closeModalConfirmBtn = document.querySelector(".btn-submit-confirm");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalBody.style.display = "block";
  modalConfirm.style.display = "none";
}

closeModalBtn.addEventListener("click", unLaunchModal);
closeModalConfirmBtn.addEventListener("click", unLaunchModal);

function unLaunchModal() {
  modalbg.style.display = "none";
}

const modalConfirm = document.querySelector(".formConfirmation");
function launchModalConfirm() {
  modalConfirm.style.display = "block";
}

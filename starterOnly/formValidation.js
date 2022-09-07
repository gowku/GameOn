const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const birthdate = document.getElementById("birthdate");
const allLocations = document.getElementById("allLocations");
const locations = document.querySelectorAll("#allLocations .checkbox-input");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const input = document.getElementsByClassName("text-control");
const form = document.getElementById("form");
const btnSubmit = document.querySelector(".btn-submit");
const modalBody = document.querySelector(".modal-body");

// console.log("firstName", firstName);
// console.log("lastName", lastName);
// console.log("email", email);
// console.log("quantity", quantity);
// console.log("birthdate", birthdate);
// console.log("allLocations", allLocations);
// console.log("locations", locations);
// console.log("checkbox1", checkbox1);
// console.log("input", input);
// console.log("form", form);
const masqueNomPrenom = /^[A-Za-z-]{2,30}$/;
const masqueMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const masqueQuantity = /^[\d]{1,100}$/;

const newYork = (document.getElementById("location1").checked = true);

const checkprenom = () => {
  if (!masqueNomPrenom.test(firstName.value)) {
    // console.log("prenom invalide");
    firstName.parentElement.setAttribute("data-error-visible", true);
    firstName.parentElement.setAttribute("data-error", "Vous devez entrer 2 caractere minimum");
    return false;
  } else {
    firstName.parentElement.setAttribute("data-error-visible", false);
    return true;
  }
};

firstName.addEventListener("input", () => {
  checkprenom();
});
const checkNom = () => {
  if (!masqueNomPrenom.test(lastName.value)) {
    lastName.parentElement.setAttribute("data-error-visible", true);
    lastName.parentElement.setAttribute("data-error", "Vous devez entrer 2 caractere minimum");
    return false;
  } else {
    lastName.parentElement.setAttribute("data-error-visible", false);
    return true;
  }
};
lastName.addEventListener("input", () => {
  checkNom();
});

const checkMail = () => {
  if (!masqueMail.test(email.value)) {
    email.parentElement.setAttribute("data-error-visible", true);
    email.parentElement.setAttribute("data-error", "Vous devez entrer un mail valide");
    return false;
  } else {
    email.parentElement.setAttribute("data-error-visible", false);
    return true;
  }
};
// email.addEventListener("input", () => {
//   checkMail();
// });

const checkBirthdate = () => {
  if (birthdate.value.length == 0) {
    birthdate.parentElement.setAttribute("data-error-visible", true);
    birthdate.parentElement.setAttribute("data-error", "Vous devez entrer une date valide");
    return false;
  } else {
    birthdate.parentElement.setAttribute("data-error-visible", false);
    return true;
  }
};
birthdate.addEventListener("input", () => {
  checkBirthdate();
});

const checkQuantity = () => {
  if (!masqueQuantity.test(quantity.value)) {
    quantity.parentElement.setAttribute("data-error-visible", true);
    quantity.parentElement.setAttribute("data-error", "Vous devez entrer une valeur numérique");
    return false;
  } else {
    quantity.parentElement.setAttribute("data-error-visible", false);
    return true;
  }
};
quantity.addEventListener("input", () => {
  checkQuantity();
});

const checkCondition = () => {
  if (!checkbox1.checked) {
    checkbox1.parentElement.setAttribute("data-error-visible", true);
    checkbox1.parentElement.setAttribute("data-error", "Vous devez accepter les conditions");
    return false;
  } else {
    checkbox1.parentElement.setAttribute("data-error-visible", false);
    return true;
  }
};

checkbox1.addEventListener("input", () => {
  checkCondition();
});
// const modalConfirm = document.querySelector(".formConfirmation");
// function launchModalConfirm() {
//   modalConfirm.style.display = "block";
// }

// function unlaunchModalConfirm() {
//   modalConfirm.style.display = "none";
// }

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (checkprenom() && checkNom() && checkNom() && checkMail() && checkBirthdate() && checkQuantity() && checkCondition()) {
    console.log(true);
    console.log({
      firstname: firstName.value,
      lastname: lastName.value,
      email: email.value,
      quantity: quantity.value,
      birthdate: birthdate.value,
      condition: checkbox1.value,
      event: checkbox2.value,
    });

    firstName.value = "";
    lastName.value = "";
    email.value = "";
    quantity.value = "";
    birthdate.value = "";

    modalBody.style.display = "none";
    launchModalConfirm();
  } else {
    console.log(false);
  }
});

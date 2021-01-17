// Menu burger
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
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const inputBtn = document.querySelectorAll("input");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// stop modal event
modalCloseBtn.addEventListener("click", stopModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function stopModal() {
  modalbg.style.display = "none";
}

//
inputBtn.forEach((input) => input.addEventListener("input", checkPrenom));

//
function checkPrenom() {
  console.log(inputBtn);
  // console.log(inputBtn);
}

// function checkNom() {}
// function checkEmail() {}

// display log
// console.log(formsPrenom);
// console.log(modalBtn);
console.log(document);
console.log(window);

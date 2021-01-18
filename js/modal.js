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
// const inputBtn = document.querySelectorAll("input");
// const submitBtn = document.getElementById("formSubscriber");

// function launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// function close modal form
function stopModal() {
  modalbg.style.display = "none";
}

// stop modal event
modalCloseBtn.addEventListener("click", stopModal);

//
function checkInput(input, type, pattern) {
  console.log(input);
  const firstInput = document.getElementById(input);
  if (pattern != null) {
    firstInput.setAttribute("pattern", pattern);
  }
  firstInput.setAttribute("required", "");
  firstInput.setAttribute("type", type);
  firstInput.addEventListener("blur", goCheck);

  function goCheck() {
    const error = document.getElementById(input + "-error");
    if (!firstInput.validity.valid) {
      // console.log("NOK");
      // console.log(firstInput);
      error.style.opacity = 1;
    } else {
      error.style.opacity = 0;
    }
  }
}

function checkDate(input) {}

// Validation du nom
checkInput("first", "text", "[A-Za-z]{2,}");

// Validation du prénom
checkInput("last", "text", "[A-Za-z]{2,}");

// Validation email
checkInput("email", "email", null);

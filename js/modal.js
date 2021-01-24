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
function checkInput(input, type, pattern, min, max) {
  // console.log(input);
  const firstInput = document.getElementById(input);

  if (pattern != null) {
    firstInput.setAttribute("pattern", pattern);
  }

  if (min != null) {
    firstInput.setAttribute("min", min);
  }

  if (max != null) {
    firstInput.setAttribute("max", max);
  }

  firstInput.setAttribute("required", "");
  firstInput.setAttribute("type", type);
  firstInput.addEventListener("blur", goCheck);

  function goCheck() {
    const error = document.getElementById(input + "-error");
    //checkValidity
    if (firstInput.checkValidity()) {
      // if (!firstInput.validity.valid) {
      error.style.opacity = 0;
    } else {
      error.style.opacity = 1;
    }
  }
}

//checkValidity

// Validation du nom
checkInput("first", "text", "[A-Za-z]{2,}", null, null);

// Validation du prénom
checkInput("last", "text", "[A-Za-z]{2,}", null, null);

// Validation email
checkInput("email", "email", null, null, null);

//
checkInput("quantity", "number", null, 0, 99);

var checkboxes = document.querySelectorAll('input[type="radio"]:checked');

// check lenght

var checkedOne = Array.prototype.slice.call(checkboxes).some((x) => x.checked);
console.log(checkedOne);

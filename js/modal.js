// menu burger
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// dom elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const checkboxConditions = document.getElementById("checkbox1");
// const formSubscriber = document.getElementById("formSubscriber");

// function close modal form
function stopModal() {
  modalbg.style.display = "none";
}

// function launch modal form
function launchModal() {
  modalbg.style.display = "block";
  document.getElementById("first").focus();
}

// start modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// stop modal event
modalCloseBtn.addEventListener("click", stopModal);

// form conditions
checkboxConditions.addEventListener("change", validSubmit);

//
function checkInput(input) {
  const inputElement = document.getElementById(input);
  function goCheck() {
    const error = document.getElementById(input + "-error");
    if (inputElement.checkValidity()) {
      console.log(inputElement);
      error.style.opacity = 0;
      inputElement.style.borderColor = "#ffffff";
    } else {
      console.log(inputElement);
      error.style.opacity = 1;
      inputElement.style.borderColor = "#e54858";
    }
    validSubmit();
  }
  inputElement.addEventListener("blur", goCheck);
}

function validSubmit() {
  var isValid = true;
  const inputAll = document.querySelectorAll("input");

  inputAll.forEach((element) => validForm(element));

  function validForm(element) {
    if (!element.checkValidity()) {
      isValid = false;
    }
  }

  if (isValid) {
    document.getElementById("btn-submit").setAttribute("disabled", "false");
    document.getElementById("btn-submit").style.opacity = "1";
    console.log(document.getElementById("btn-submit"));
  } else {
    document.getElementById("btn-submit").setAttribute("disabled", "true");
    document.getElementById("btn-submit").style.opacity = "0.2";
    console.log(document.getElementById("btn-submit"));
  }
}

// Validation du nom
checkInput("first");

// Validation du prénom
checkInput("last");

// Validation email
checkInput("email");

//
checkInput("quantity");

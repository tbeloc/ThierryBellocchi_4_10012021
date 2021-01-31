//
const checkboxConditions = document.getElementById("checkbox1");
checkboxConditions.addEventListener("change", validSubmit);

//
export function validSubmit() {
  var isValid = true;
  const inputAll = document.querySelectorAll("input");
  const btnSubmit = document.getElementById("btn-submit");

  inputAll.forEach((element) => validForm(element));

  function validForm(element) {
    if (!element.checkValidity()) {
      isValid = false;
    }
  }

  if (isValid) {
    btnSubmit.setAttribute("disabled", "false");
    btnSubmit.style.opacity = "1";
  } else {
    btnSubmit.setAttribute("disabled", "true");
    btnSubmit.style.opacity = "0.2";
  }
}

//
function checkInput(input) {
  const inputElement = document.getElementById(input);
  function goCheck() {
    const error = document.getElementById(input + "-error");
    if (inputElement.checkValidity()) {
      error.style.opacity = 0;
      inputElement.style.borderColor = "#ffffff";
    } else {
      error.style.opacity = 1;
      inputElement.style.borderColor = "#e54858";
    }
    validSubmit();
  }
  inputElement.addEventListener("blur", goCheck);
}

//
checkInput("first");
checkInput("last");
checkInput("email");
checkInput("quantity");

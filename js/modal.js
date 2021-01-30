// dom
const modal = document.querySelector(".bground");
const modalOpenBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close");

// menu responsive
function editNav() {
  var nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

// open modal
function launchModal() {
  modal.style.display = "block";
  // validSubmit();
  document.getElementById("first").focus();
}

// close modal
function stopModal() {
  modal.style.display = "none";
}

// open modal
modalOpenBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal
modalCloseBtn.addEventListener("click", stopModal);

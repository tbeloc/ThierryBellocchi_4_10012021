import { from } from "webpack-sources/lib/CompatSource";
import { validSubmit } from "./validity";

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
modalOpenBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    modal.style.display = "block";
    validSubmit();
    document.getElementById("first").focus();
  })
);

// close modal
modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

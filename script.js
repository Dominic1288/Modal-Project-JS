"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpeneModal = document.querySelectorAll(".show-modal");

function showModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModel() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

// What does this for loop do and why do I need it?
for (let i = 0; i < btnsOpeneModal.length; i++) {
  btnsOpeneModal[i].addEventListener("click", showModal);
}

btnCloseModal.addEventListener("click", closeModel);
overlay.addEventListener("click", closeModel);

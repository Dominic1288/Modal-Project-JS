"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpeneModal = document.querySelectorAll(".show-modal");    // JS 00: This line querys the DOM and finds all elements with a class of "show-modal" (of which there are 3 in index.html) and puts them in an array

function showModal() {                                              // JS 03: This function just removes the "hidden" class from the two elements (reference stored by lines 3 and 4 above), which makes them visisble
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModel() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

// What does this for loop do and why do I need it?
for (let i = 0; i < btnsOpeneModal.length; i++) {                   // JS 01: At this point, loop through the contents of the btnsOpeneModal array
  btnsOpeneModal[i].addEventListener("click", showModal);           // JS 02: Each element in the array gets the showModal function bound to its click event
}

btnCloseModal.addEventListener("click", closeModel);
overlay.addEventListener("click", closeModel);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/* JS Notes 
 * ========
 * When binding events in Javascript, you have to get a reference to the HTML element and then assign a fucntion to its "click" event.
 * It's worth noting that there are other events you can bind to, and they're worth looking into just for fun, especially if you
 * want to make games and stuff. You could bind each one individually, of course, using an ID instead of a class, but since each button
 * is doing the same thing here, this is just an efficient way of doing them with less code. You'll find in practice it's kind of a
 * balancing act between efficiency and readability, as I've seen some very elegant code that is just a PITA to maintain.
 * 
 */

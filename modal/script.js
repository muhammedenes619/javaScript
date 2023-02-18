"use strict";
const showModalButtons = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

//functions
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

showModalButtons.forEach((button) => {
  button.addEventListener("click", openModal);
});
closeModalButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) closeModal();
  }
});

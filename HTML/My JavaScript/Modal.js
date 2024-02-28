"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const close_modal = document.querySelector(".close-modal");
const show_modal = document.querySelectorAll(".show-modal"); //length 3
const displayModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const hideModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
//console.log(show_modal);
for (let i = 0; i < show_modal.length; i++) {
  //console.log(show_modal[i].textContent);
  show_modal[i].addEventListener("click", displayModal);
}
//     modal.classList.remove("hidden");
//     overlay.classList.ramove("hidden");
//   });
close_modal.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal);

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key == "Escape") {
    if (!modal.classList.contains("hidden")) {
    }
  }
  // console.log("ss");
  hideModal();
  // }
});

//   close_modal.addEventListener("click", function () {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
//   });

//   overlay.addEventListener("click", function () {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
//   });

"use strict";
const score_0 = document.querySelector("#score--0");
const score_1 = document.getElementById("score--1");
const dice = document.querySelector(".dice");

const btn_roll = document.querySelector(".btn--roll");
const btn_hold = document.querySelector(".btn--hold");

const current_0 = document.getElementById("current--0");
const current_1 = document.getElementById("current--1");

score_0.textContent = 0;
score_1.textContent = 0;
dice.classList.add("hidden");
console.log(btn_roll);
btn_roll.addEventListener("click", function () {
  const diceRandomNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(diceRandomNumber);
  dice.src = `dice-${diceRandomNumber}.png`;
  dice.classList.remove("hidden");
});

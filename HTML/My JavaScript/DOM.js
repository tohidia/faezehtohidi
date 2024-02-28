"use strict";
// //console.log(document.querySelector(".message").textContent);
// // document.querySelector(".message").textContent = "Correct Answer!";
// //document.querySelector(".number").textContent = 18;
// // document.querySelector(".score").textContent = 19;
// document.querySelector(".guess").value = 16;
// let secreteNumber = Math.trunc(Math.random() * 20 + 1);
// let score = 20;
// //let highScore = 0;
// document.querySelector(".score").textContent = score;
// // document.querySelector(".number").textContent = secreteNumber;
// // const myNumber = document.querySelector(".guess").value;
// // const x = function () {
// //   console.log("HI");
// // };

// document.querySelector(".check").addEventListener("click", function () {
//   const guessNumber = Number(document.querySelector(".guess").value);
//   //   console.log(typeof myNumber);
//   //   console.log(myNumber);
//   console.log(guessNumber);
//   if (!guessNumber) {
//     document.querySelector(".message").textContent = "No Number!";
//   }
//   //   } else {
//   //     document.querySelector(".message").textContent = "Correct Number!";
//   //   }
//   //win
//   else if (secreteNumber === guessNumber) {
//     document.querySelector(".message").textContent = "Correct guess!";
//     document.querySelector("body").style.backgroundColor = "green";
//     document.querySelector(".number").style.width = "30rem";
//   }
//   // //Low
//   else if (secreteNumber > guessNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Low";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "You lose the game!";
//       score = 0;
//       document.querySelector(".score").textContent = score;
//     }
//   }
//   //High
//   else if (secreteNumber < guessNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "High";
//       //     // document.querySelector(".message").textContent = "Low";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "You lose the game!";
//       score = 0;
//       document.querySelector(".score").textContent = score;
//       //     document.querySelector("body").style.backgroundColor = "green";
//       //     document.querySelector(".number").style.width = "30rem";

//       //     if (score > highScore) {
//       //       highScore = score;
//       //       document.querySelector(".highscore").textContent = highScore;
//     }
//   }
// });
// document.querySelector(".again").addEventListener("click", function () {
//   score = 20;
//   document.querySelector(".score").textContent = score;
//   secreteNumber = Math.trunc(Math.random() * 20 + 1);
//   document.querySelector(".message").textContent = "Start guessing...";
//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".number").style.width = "15rem";
//   document.querySelector(".guess").value = "";
// });

//action

document.querySelector(".guess").value = 16;
let secreteNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector(".score").textContent = score;
let highScore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);
  console.log(guessNumber);
  if (!guessNumber) {
    DisplayMessage("No Number");
  } else if (secreteNumber === guessNumber) {
    DisplayMessage("Correct Guess");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent =
        "Highscore:" + highScore;
    }
  } else if (secreteNumber !== guessNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        secreteNumber > guessNumber ? "Low" : "High ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose the game!";
      score = 0;
      document.querySelector(".score").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secreteNumber = Math.trunc(Math.random() * 20 + 1);
  DisplayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});

function DisplayMessage(message) {
  document.querySelector(".message").textContent = message;
}

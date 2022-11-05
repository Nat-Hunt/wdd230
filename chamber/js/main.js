"use strict";

// This files provides functionality to the site
const banner = document.getElementById("banner");

if (today.getDay() == 1 || today.getDay() == 2) {
  banner.classList.toggle("itsMondayOrTuesday");
}

// function displayText() {
//   const w = document.documentElement.clientWidth;

//   if (w < 560) {
//     document.querySelector("#welcome h3").innerHTML =
//       "The Treasure on the Tallapoosa <br><br>SMALL IMAGE";
//   } else if (w >= 560 && w <= 1379) {
//     document.querySelector("#welcome h3").innerHTML =
//       "The Treasure on the Tallapoosa <br><br>MEDIUM IMAGE";
//   } else if (w >= 1380) {
//     document.querySelector("#welcome h3").innerHTML =
//       "The Treasure on the Tallapoosa <br><br>LARGE IMAGE";
//   }
// }

// const x = window;
// x.addEventListener("resize", displayText);
// displayText();

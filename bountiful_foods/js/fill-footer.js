"use strict";
// fill in the base footer
const today = new Date();
const longDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  today
);

document.getElementById("date").textContent = longDate;

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

document.getElementById("hamburgerBtn").addEventListener("click", toggleMenu);

const currentDate = new Date();
const copyright = "&copy ";
const author =
  " Tallassee Chamber of Commerce | Nathan T. Hunt | WDD 230 Project | ";
document.querySelector("#year").innerHTML = copyright.concat(
  currentDate.getFullYear(),
  author
);
const lastUpdate = "Last Updated: ";
document.querySelector("#last-update").textContent = lastUpdate.concat(
  document.lastModified
);

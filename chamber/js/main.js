"use strict";

// This files provides functionality to the site
const banner = document.getElementById("banner");

if (today.getDay() == 1 || today.getDay() == 2) {
  banner.classList.toggle("itsMondayOrTuesday");
}

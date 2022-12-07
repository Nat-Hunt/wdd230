"use strict";
// fill in the base footer
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const email = document.getElementById("email");
const year = document.getElementById("year");
const lastUpdate = document.getElementById("last-update");

const today = new Date();

phone.setAttribute("href", "tel:1234567890");
phone.innerHTML = "(123) 456-7890";

let line1 = document.createElement("address");
line1.innerHTML = "Bountiful Foods";
let line2 = document.createElement("address");
line2.innerHTML = "123 fake rd,";
let line3 = document.createElement("address");
line3.innerHTML = "Carlsbad, CA, 12345";
address.appendChild(line1)
address.appendChild(line2)
address.appendChild(line3)

email.setAttribute("href", "mailto:email_us@bountifulemail.com");
email.innerHTML = "email_us@bountifulemail.com";

year.innerHTML = `&copy ${today.getFullYear()} Bountiful Foods | Nathan T. Hunt | WDD 230 Final |`;
lastUpdate.textContent = `Last Updated: ${document.lastModified}`;

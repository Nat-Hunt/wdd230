"use strict";

// This files provides functionality to the site
const banner = document.getElementById("banner");
const spotlights = document.getElementById("spotlight");
const spotlightArray = [];

if (today.getDay() == 1 || today.getDay() == 2) {
  banner.classList.toggle("itsMondayOrTuesday");
}

fetch("./js/data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.log(jsonObject);
    const companies = jsonObject;
    companies.forEach(createSpotlight);
    displaySpotlights();
  });

function parsePhoneText(company) {
  let phoneText = "";
  if (company.phone.length > 10) {
    phoneText = `${company.phone.substr(0, 1)} (${company.phone.substr(
      1,
      3
    )}) ${company.phone.substr(4, 3)}-${company.phone.substr(6, -1)}`;
  } else if (company.phone.length == 10) {
    phoneText = `(${company.phone.substr(0, 3)}) ${company.phone.substr(
      3,
      3
    )}-${company.phone.substr(5, 9)}`;
  }

  return phoneText;
}

function createSpotlight(company) {
  if (
    company.membershipLevel == "silver" ||
    company.membershipLevel == "gold"
  ) {
    let card = document.createElement("div");
    let name = document.createElement("h2");
    let icon = document.createElement("img");
    let tagline = document.createElement("p");
    let address = document.createElement("address");
    let phone = document.createElement("address");
    let website = document.createElement("address");

    name.textContent = company.name;
    address.innerHTML = company.address;
    tagline.textContent = company.tagline;

    let phoneText = parsePhoneText(company);

    phone.innerHTML = `<a href="tel:${company.phone}">${phoneText}</a>`;
    website.innerHTML = `<a href=${company.website}>${company.website}</a>`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    icon.setAttribute("src", company.iconFile);
    icon.setAttribute("alt", `icon for ${company.name}`);
    icon.setAttribute("loading", "lazy");
    icon.classList.add("companyLogo");

    // Add/append the section(card) with the h2 element
    card.appendChild(name);
    card.appendChild(icon);
    card.appendChild(tagline);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.classList.add("spotlight");

    // Add/append the existing HTML div with the cards class with the section(card)
    spotlightArray.push(card);
  }
}

function displaySpotlights() {
  while (spotlights.childElementCount < 3) {
    spotlights.appendChild(
      spotlightArray[Math.floor(Math.random() * spotlightArray.length)]
    );
  }
}

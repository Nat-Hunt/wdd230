const cards = document.querySelector(".cards");

document.querySelector("main").style.display = "block";

fetch("./js/data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);
    const companies = jsonObject;
    companies.forEach(displayCompanies);
  });

function displayCompanies(company) {
  let card = document.createElement("section");
  let name = document.createElement("h2");
  let icon = document.createElement("img");
  let address = document.createElement("p");
  let phone = document.createElement("p");
  let website = document.createElement("p");

  // Change the textContent property of the h2 element to contain the prophet's full name
  name.textContent = company.name;
  address.textContent = company.address;
  phone.textContent = company.phone;
  website.textContent = company.website;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  icon.setAttribute("src", company.iconFile);
  icon.setAttribute("alt", `icon for ${company.name}`);
  icon.setAttribute("loading", "lazy");

  // Add/append the section(card) with the h2 element
  card.appendChild(icon);
  card.appendChild(name);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(website);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("div.cards").appendChild(card);
}

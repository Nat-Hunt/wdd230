const cards = document.querySelector(".cards");
const list = document.querySelector(".list");
const table = document.getElementById("directoryListView1");
const cardBtn = document.getElementById("cardBtn");
const listBtn = document.getElementById("listBtn");

document.querySelector("main").style.display = "block";

fetch("./js/data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.log(jsonObject);
    const companies = jsonObject;
    companies.forEach(displayCompanies);
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

function displayCards(company) {
  let card = document.createElement("section");
  let name = document.createElement("h2");
  let icon = document.createElement("img");
  let address = document.createElement("p");
  let phone = document.createElement("a");
  let website = document.createElement("a");

  name.textContent = company.name;
  address.textContent = company.address;

  let phoneText = parsePhoneText(company);

  phone.textContent = phoneText;
  phone.setAttribute("href", `tel:${company.phone}`);
  website.textContent = company.website;
  website.setAttribute("href", company.website);

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

function makeSmallList(company) {
  let row = document.createElement("tr");
  let column = document.createElement("td");
  let name = document.createElement("textNode");
  let address = document.createElement("textNode");
  let phone = document.createElement("a");
  let website = document.createElement("a");

  name.innerHTML = `${company.name}<br>`;
  address.innerHTML = `${company.address}<br>`;

  let phoneText = parsePhoneText(company);

  phone.innerHTML = `${phoneText}<br>`;
  phone.setAttribute("href", `tel:${company.phone}`);

  website.innerText = company.website;
  website.setAttribute("href", company.website);

  column.appendChild(name);
  column.appendChild(address);
  column.appendChild(phone);
  column.appendChild(website);

  row.appendChild(column);

  document.getElementById("directoryListView2").appendChild(row);
}

function displayList(company) {
  makeSmallList(company);
  let row = document.createElement("tr");
  let name = document.createElement("td");
  let address = document.createElement("td");
  let phone = document.createElement("a");
  let website = document.createElement("a");

  name.innerText = company.name;
  address.innerText = company.address;

  let phoneText = parsePhoneText(company);

  let phoneTd = document.createElement("td");
  phone.innerText = phoneText;
  phone.setAttribute("href", `tel:${company.phone}`);
  phoneTd.appendChild(phone);

  let websiteTd = document.createElement("td");
  website.innerText = company.website;
  website.setAttribute("href", company.website);
  websiteTd.appendChild(website);

  row.appendChild(name);
  row.appendChild(address);
  row.appendChild(phoneTd);
  row.appendChild(websiteTd);

  table.appendChild(row);
}

function displayCompanies(company) {
  displayCards(company);
  displayList(company);
}

cardBtn.addEventListener("click", () => {
  if (!cardBtn.classList.contains("active")) {
    listBtn.classList.toggle("active");
    list.classList.toggle("hidden");
    cardBtn.classList.toggle("active");
    cards.classList.toggle("hidden");
  }
});
listBtn.addEventListener("click", () => {
  if (!listBtn.classList.contains("active")) {
    cardBtn.classList.toggle("active");
    cards.classList.toggle("hidden");
    listBtn.classList.toggle("active");
    list.classList.toggle("hidden");
  }
});

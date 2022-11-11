const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject["prophets"];
    prophets.forEach(displayProphets);
  });

function displayProphets(prophet) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let portrait = document.createElement("img");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = `${prophet.name} ${prophet.lastname}`;
  p1.textContent = `Date of Birth: ${prophet.birthdate}`;
  p2.textContent = `Place of Birth: ${prophet.birthplace}`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute("src", prophet.imageurl);
  portrait.setAttribute(
    "alt",
    `Portait of ${prophet.name} ${prophet.lastname} - ${returnOrdinal(
      prophet.order
    )} Latter-day President`
  );
  portrait.setAttribute("loading", "lazy");

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(portrait);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("div.cards").appendChild(card);
}

function returnOrdinal(num) {
  let stringNum = num.toString();
  let endsWith1 = stringNum.endsWith("1");
  let endsWith2 = stringNum.endsWith("2");
  let endsWith3 = stringNum.endsWith("3");

  if (endsWith1 && (num < 10 || num > 20)) {
    return `${num}st`;
  }
  if (endsWith2 && (num < 10 || num > 20)) {
    return `${num}nd`;
  }
  if (endsWith3 && (num < 10 || num > 20)) {
    return `${num}rd`;
  }

  return `${num}th`;
}

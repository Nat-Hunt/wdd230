const menu = document.getElementById("menu");

fetch("./data/drinks.json")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    const drinks = json;
    drinks.forEach(createMenuItem);
  });

function createMenuItem(drink) {
  let li = document.createElement("li");
  let drinkImg = document.createElement("img");
  let drinkName = document.createElement("h3");
  let ratingSection = document.createElement("div");

  drinkImg.setAttribute("src", drink.src);
  drinkImg.setAttribute("alt", drink.name);
  li.appendChild(drinkImg);

  drinkName.innerHTML = drink.name;
  li.appendChild(drinkName);

  ratingSection.setAttribute("class", "rating");
  for (let i = 0; i < 5; i++) {
    let star = document.createElement("i");
    if (i < drink.rating) {
      if (Number.isSafeInteger(drink.rating) || i < drink.rating - 0.5) {
        star.setAttribute("class", "fa-solid fa-star");
      } else if (i == drink.rating - 0.5) {
        star.setAttribute("class", "fa-regular fa-star-half-stroke");
      }
    } else {
      star.setAttribute("class", "fa-regular fa-star");
    }

    ratingSection.appendChild(star);
  }
  li.appendChild(ratingSection);
  menu.appendChild(li);
}

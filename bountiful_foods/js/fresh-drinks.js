const product1 = document.getElementById("product1");
const product2 = document.getElementById("product2");
const product3 = document.getElementById("product3");
const submitBtn = document.getElementById("drinkCreationBtn");

fetch("./data/fruit.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    const products = json;
    addDefaultOption();
    products.forEach(createSelectOption);
  });

function createSelectOption(product) {
  let option1 = document.createElement("option");
  let option2 = document.createElement("option");
  let option3 = document.createElement("option");

  option1.value = JSON.stringify(product);
  option1.innerHTML = product.name;

  option2.value = JSON.stringify(product);
  option2.innerHTML = product.name;

  option3.value = JSON.stringify(product);
  option3.innerHTML = product.name;

  product1.appendChild(option1);
  product2.appendChild(option2);
  product3.appendChild(option3);
}
function addDefaultOption() {
  let option1 = document.createElement("option");
  let option2 = document.createElement("option");
  let option3 = document.createElement("option");

  const defaultOption = {
    name: "default",
    nutritions: {
      carbohydrates: 0,
      protein: 0,
      fat: 0,
      calories: 0,
      sugar: 0,
    },
  };

  option1.value = JSON.stringify(defaultOption);
  option1.innerHTML = "First Ingredient";
  option1.selected = true;

  option2.value = JSON.stringify(defaultOption);
  option2.innerHTML = "Second Ingredient";
  option2.selected = true;

  option3.value = JSON.stringify(defaultOption);
  option3.innerHTML = "Third Ingredient";
  option3.selected = true;

  product1.appendChild(option1);
  product2.appendChild(option2);
  product3.appendChild(option3);
}

function displayNutritionFacts() {
  const ingredient1 = JSON.parse(product1.value);
  const ingredient2 = JSON.parse(product2.value);
  const ingredient3 = JSON.parse(product3.value);

  document.getElementById("totalCarbs").innerHTML = `${
    ingredient1.nutritions.carbohydrates +
    ingredient3.nutritions.carbohydrates +
    ingredient2.nutritions.carbohydrates
  } g`;
  document.getElementById("totalProtein").innerHTML = `${
    ingredient1.nutritions.protein +
    ingredient3.nutritions.protein +
    ingredient2.nutritions.protein
  } g`;
  document.getElementById("totalFat").innerHTML = `${
    ingredient1.nutritions.fat +
    ingredient3.nutritions.fat +
    ingredient2.nutritions.fat
  } g`;
  document.getElementById("totalSugar").innerHTML = `${
    ingredient1.nutritions.sugar +
    ingredient3.nutritions.sugar +
    ingredient2.nutritions.sugar
  } g`;
  document.getElementById("totalCalories").innerHTML = `${
    ingredient1.nutritions.calories +
    ingredient3.nutritions.calories +
    ingredient2.nutritions.calories
  }`;

  updateTotalCreatedDrinks();
}

function updateTotalCreatedDrinks() {
  let savedTotal = parseInt(localStorage.getItem("createdDrinks"));
  if (!savedTotal) {
    savedTotal = 0;
  }

  savedTotal += 1;
  localStorage.setItem("createdDrinks", savedTotal);
  document.getElementById("totalCreatedDrinks").innerHTML = savedTotal;
}

submitBtn.addEventListener("click", () => {
  displayNutritionFacts();
  return false;
});

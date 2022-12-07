let product1 = document.getElementById("product1");
let product2 = document.getElementById("product2");
let product3 = document.getElementById("product3");

fetch("./data/fruit.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    const products = json;
    products.forEach(createSelectOption);
  });

function createSelectOption(product) {
  let option1 = document.createElement("option");
  let option2 = document.createElement("option");
  let option3 = document.createElement("option");

  option1.value = product.name;
  option1.innerHTML = product.name;

  option2.value = product.name;
  option2.innerHTML = product.name;

  option3.value = product.name;
  option3.innerHTML = product.name;

  product1.appendChild(option1);
  product2.appendChild(option2);
  product3.appendChild(option3);
}

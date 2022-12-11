// hamburger Button functionality
function toggleMenu() {
  document.getElementById("navigation").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

document.getElementById("hamburgerBtn").addEventListener("click", toggleMenu);

if (document.getElementById("totalCreatedDrinks")) {
  let createdDrinks = localStorage.getItem("createdDrinks");
  if (!createdDrinks) {
    createdDrinks = 0;
  }
  document.getElementById("totalCreatedDrinks").innerHTML = createdDrinks;
}

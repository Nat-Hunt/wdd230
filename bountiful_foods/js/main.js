// hamburger Button functionality
function toggleMenu() {
  document.getElementById("navigation").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

document.getElementById("hamburgerBtn").addEventListener("click", toggleMenu);

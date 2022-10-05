function toggleMenu() {
  //   console.log("it worked");
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

document.getElementById("hamburgerBtn").addEventListener("click", toggleMenu);

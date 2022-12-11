document.getElementById("contactFormBtn").addEventListener("click", () => {
  event.preventDefault();
  document.getElementById("contactForm").classList.toggle("hidden");
  return false;
});

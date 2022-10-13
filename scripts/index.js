const currentDate = new Date();
const copyright = "&copy ";
const author = " | Nathan T. Hunt | Alabama";
document.querySelector("#year").innerHTML = copyright.concat(
  currentDate.getFullYear(),
  author
);
const lastUpdate = "Last Updated: ";
document.querySelector("#last-update").textContent = lastUpdate.concat(
  document.lastModified
);

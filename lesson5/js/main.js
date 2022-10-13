"use strict";

const input = document.getElementById("favchap");
const submitButton = document.querySelector("div.input button");
const outputList = document.querySelector("ul.list");

submitButton.addEventListener("click", function () {
  console.log("clicked!");
  if (input.value) {
    const newChap = document.createElement("li");
    const favChapText = document.createTextNode(input.value);
    newChap.appendChild(favChapText);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "❌";
    deleteButton.addEventListener("click", function () {
      newChap.remove();
    });
    newChap.appendChild(deleteButton);

    outputList.appendChild(newChap);
    input.focus();
    input.value = "";
  } else {
    input.focus();
  }
});

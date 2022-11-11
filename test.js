let firstName = "Nathan";
let lvdate = "10/11/1997";

console.log(
  "Welcome back " +
    firstName +
    "! You last visited on <strong>" +
    lvdate +
    "</strong>."
);

let ogVar = `Welcome back ${firstName}! You last visited on <strong>${lvdate}</strong>.`;
let stringVar = `Welcome back ${firstName}! You last visited on <strong>${lvdate}</strong>.`;

console.log(stringVar);

document.getElementById("1").innerHTML = ogVar;
document.getElementById("2").innerHTML = stringVar;

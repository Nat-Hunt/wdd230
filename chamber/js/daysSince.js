"use strict";

const daysSinceLastVisitBanner = document.getElementById("daysSinceLastVisit");

function setLastVisit() {
  localStorage.setItem("lastVisit", today.getTime());
}

function getLastVisit() {
  console.log(today.getTime());
  let lastVisit = parseInt(localStorage.getItem("lastVisit"));
  let timeDifference = today.getTime() - lastVisit;
  let numDaysSince = Math.round(timeDifference / (1000 * 60 * 60 * 24), 0);
  console.log(numDaysSince);

  return numDaysSince;
}

const populateBanner = () => {
  let daysSince = getLastVisit();
  daysSinceLastVisitBanner.innerHTML = `It has been ${daysSince} days since your last visit`;

  setLastVisit();
};

populateBanner();

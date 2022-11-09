const memberLevelSelector = document.getElementById("memberLevel");
const npBenefits = document.getElementById("npBenefits");
const bronzeBenefits = document.getElementById("bronzeBenfits");
const silverBenefits = document.getElementById("silverBenefits");
const goldBenefits = document.getElementById("goldBenefits");
const displayBenefits = window.matchMedia("(min-width: 800px)");

const currentDateandTimeInput = document.getElementById("currentDateAndTime");
currentDateandTimeInput.value = new Date();

const submitBtn = document.getElementById("joinFormBtn");

memberLevelSelector.addEventListener("change", () => {
  if (!npBenefits.classList.contains("hidden")) {
    npBenefits.classList.toggle("hidden");
  }
  if (!bronzeBenefits.classList.contains("hidden")) {
    bronzeBenefits.classList.toggle("hidden");
  }
  if (!silverBenefits.classList.contains("hidden")) {
    silverBenefits.classList.toggle("hidden");
  }
  if (!goldBenefits.classList.contains("hidden")) {
    goldBenefits.classList.toggle("hidden");
  }
  switchMemberLevel();
});

function switchMemberLevel() {
  if (displayBenefits.matches) {
    switch (memberLevelSelector.value) {
      case "default":
        if (!npBenefits.classList.contains("hidden")) {
          npBenefits.classList.toggle("hidden");
        }
        if (!bronzeBenefits.classList.contains("hidden")) {
          bronzeBenefits.classList.toggle("hidden");
        }
        if (!silverBenefits.classList.contains("hidden")) {
          silverBenefits.classList.toggle("hidden");
        }
        if (!goldBenefits.classList.contains("hidden")) {
          goldBenefits.classList.toggle("hidden");
        }
        break;
      case "np":
        if (npBenefits.classList.contains("hidden")) {
          npBenefits.classList.toggle("hidden");
        }
        break;
      case "bronze":
        if (bronzeBenefits.classList.contains("hidden")) {
          bronzeBenefits.classList.toggle("hidden");
        }
        break;
      case "silver":
        if (silverBenefits.classList.contains("hidden")) {
          silverBenefits.classList.toggle("hidden");
        }
        break;
      case "gold":
        if (goldBenefits.classList.contains("hidden")) {
          goldBenefits.classList.toggle("hidden");
        }
        break;
      default:
        displayDefault();
        break;
    }
  } else {
  }
}

function showBenefitsDisplay() {
  if (
    !displayBenefits.matches &&
    !document.getElementById("benefitsDisplay").classList.contains("hidden")
  ) {
    document.getElementById("benefitsDisplay").classList.toggle("hidden");
  } else if (
    displayBenefits.matches &&
    document.getElementById("benefitsDisplay").classList.contains("hidden")
  ) {
    document.getElementById("benefitsDisplay").classList.toggle("hidden");
  }
}

window.onresize = () => {
  showBenefitsDisplay();
};
window.onload = () => {
  showBenefitsDisplay();
};

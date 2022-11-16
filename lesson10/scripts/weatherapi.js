const currentTemp = document.getElementById("current-temp");
const weatherIcon = document.getElementById("weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks,us&units=imperial&appid=76303b61b789d1d95fb8dcb5f37c5b37";

async function getWeather() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getWeather();

function displayResults(weatherdata) {
  currentTemp.innerHTML = `<strong>${weatherdata.main.temp.toFixed(0)}<strong>`;
  const iconImg = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
  let desc = weatherdata.weather[0].description;

  const descArray = desc.split(" ");

  for (let i = 0; i < descArray.length; i++) {
    descArray[i] = descArray[i].charAt(0).toUpperCase() + descArray[i].slice(1);
  }

  desc = descArray.join(" ");

  weatherIcon.setAttribute("src", iconImg);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
}

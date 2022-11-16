const currentTemp = document.getElementById("temp");
const weatherIcon = document.getElementById("weather-icon");
const captionDesc = document.querySelector("figcaption");
const windSpeed = document.getElementById("windSpeed");

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Tallassee,us&units=imperial&appid=76303b61b789d1d95fb8dcb5f37c5b37";

function calculateWindchill(temp, speed) {
  if (temp <= 50 && speed > 3.0) {
    const windchill =
      35.74 +
      0.6215 * temp -
      35.75 * Math.pow(speed, 0.16) +
      0.42756 * temp * Math.pow(speed, 0.16);
    document.getElementById("windChill").innerHTML = `${
      Math.round((windchill + Number.EPSILON) * 100) / 100
    } &#8457;`;
  } else {
    document.getElementById("windChill").innerHTML = "N/A";
  }
}

function displayResults(weatherdata) {
  currentTemp.innerHTML = `${weatherdata.main.temp.toFixed(0)}`;
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
  windSpeed.textContent = weatherdata.wind.speed.toFixed(0);
  calculateWindchill(weatherdata.main.temp, weatherdata.wind.speed);
}

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

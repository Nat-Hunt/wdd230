// current conditions fields
const currentTemp = document.getElementById("temp");
const weatherIcon = document.getElementById("weather-icon");
const captionDesc = document.querySelector("figcaption");
const humidity = document.getElementById("humidity");
const feelsLike = document.getElementById("feelsLike");

// Forecast fields
const tempForecast1 = document.getElementById("tempForecast1");
const tempForecast2 = document.getElementById("tempForecast2");
const tempForecast3 = document.getElementById("tempForecast3");
const forecastIcon1 = document.getElementById("forecast1-icon");
const forecastIcon2 = document.getElementById("forecast2-icon");
const forecastIcon3 = document.getElementById("forecast3-icon");
const forecastDesc1 = document.getElementById("forecast1Fig");
const forecastDesc2 = document.getElementById("forecast2Fig");
const forecastDesc3 = document.getElementById("forecast3Fig");

const weatherUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad,ca,us&units=imperial&appid=76303b61b789d1d95fb8dcb5f37c5b37";

const forecastUrl =
  "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad,ca,us&units=imperial&appid=76303b61b789d1d95fb8dcb5f37c5b37";

function displayResults(weatherdata) {
  currentTemp.innerHTML = `${weatherdata.main.temp.toFixed(0)}`;
  const iconImg = `https://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`;

  let desc = constructIconDesc(weatherdata.weather[0].description);

  weatherIcon.setAttribute("src", iconImg);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
  feelsLike.innerHTML = `${weatherdata.main.feels_like.toFixed(0)}`;
  humidity.innerHTML = `${weatherdata.main.humidity.toFixed(0)}`;
}

function constructIconDesc(description) {
  const descArray = description.split(" ");

  for (let i = 0; i < descArray.length; i++) {
    descArray[i] = descArray[i].charAt(0).toUpperCase() + descArray[i].slice(1);
  }

  description = descArray.join(" ");

  return description;
}

function displayForecast(data) {
  tempForecast1.innerHTML = data.list[0].main.temp.toFixed(0);
  tempForecast2.innerHTML = data.list[1].main.temp.toFixed(0);
  tempForecast3.innerHTML = data.list[2].main.temp.toFixed(0);
  let desc1 = constructIconDesc(data.list[0].weather[0].description);
  let desc2 = constructIconDesc(data.list[1].weather[0].description);
  let desc3 = constructIconDesc(data.list[2].weather[0].description);

  forecastIcon1.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`
  );
  forecastIcon1.setAttribute("alt", desc1);
  forecastIcon2.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`
  );
  forecastIcon2.setAttribute("alt", desc2);
  forecastIcon3.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`
  );
  forecastIcon3.setAttribute("alt", desc3);

  forecastDesc1.textContent = desc1;
  forecastDesc2.textContent = desc2;
  forecastDesc3.textContent = desc3;
}

async function getWeather() {
  try {
    const response = await fetch(weatherUrl);
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

async function getForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getWeather();
getForecast();

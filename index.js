function changeTime() {
  let now = new Date();
  let date = now.getDate();
  let day = now.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let presentDay = days[now.getDay()];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let h5 = document.querySelector("#current-day-time");
  h5.innerHTML = `Last updated: ${presentDay} ${hours}:${minutes}`;
}

function changeTime2() {
  let now = new Date();
  let date = now.getDate();
  let day = now.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let presentDay = days[now.getDay()];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let h5 = document.querySelector("#current-day-time");
  h5.innerHTML = `Last updated: ${presentDay} ${hours}:${minutes}`;
}

let now = new Date();
let date = now.getDate();
let day = now.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let presentDay = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let h5 = document.querySelector("#current-day-time");
h5.innerHTML = `Last updated: ${presentDay} ${hours}:${minutes}`;
let form = document.querySelector("#city-name");
form.addEventListener("submit", changeTime);
let presentLocation = document.querySelector("#current-location-button");
presentLocation.addEventListener("click", changeTime2);

function search(city) {
  let apiKey = "be786a95f466ebdeaee3f262be3e25cd";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let units = "metric";
  let apiUrl = `${apiEndpoint}?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityName = document.querySelector("#current-city");
  search(cityName.value);
}

let form3 = document.querySelector("#current-city");
form3.addEventListener("submit", handleSubmit);

function search(city) {
  let apiKey = "be786a95f466ebdeaee3f262be3e25cd";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let units = "metric";
  let apiUrl = `${apiEndpoint}?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  search(searchInput.value);
}

let form2 = document.querySelector("#city-name");
form2.addEventListener("submit", handleSubmit);

function showTemperature(response) {
  let heading = document.querySelector("#current-city");
  heading.innerHTML = `    ${response.data.name}`;
  let currentTemp = document.querySelector("#current-temp");
  celsiusTemperature = response.data.main.temp;
  currentTemp.innerHTML = `${Math.round(
    celsiusTemperature
  )}  <a href="#"  id ="temp-c-unit" class = active ><sup>°C</sup></a><span class="temp-c-units"></span`;
  let tempDescription = document.querySelector("#temp-description");
  tempDescription.innerHTML = response.data.weather[0].main;
  let currentFeel = document.querySelector("#feeling");
  currentFeel.innerHTML = ` ${Math.round(response.data.main.feels_like)}° `;
  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = ` ${Math.round(response.data.main.humidity)} `;
  let currentWind = document.querySelector("#wind");
  currentWind.innerHTML = Math.round(response.data.wind.speed);
  let currentIcon = document.querySelector("#icon");
  currentIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  currentIcon.setAttribute("alt", response.data.weather[0].description);
  let convertToFah = document.querySelector("#fahrenheit-link");
  let currentTempC = `${Math.round(response.data.main.temp)}`;
  convertToFah.innerHTML = `| ${Math.round(
    currentTempC * 1.8 + 32
  )}<span class="temp-f-units"><sup>°F</sup></span`;
  console.log(convertToFah);
}

function showCurrentLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";

  let apiKey = "be786a95f466ebdeaee3f262be3e25cd";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrentLocation);
}

let currentLocation = document.querySelector("#current-location-button");
currentLocation.addEventListener("click", getCurrentLocation);

search("Abuja");

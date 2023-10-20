function formDate() {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];

  let currentDate = document.querySelector("#current-date");
  currentDate.innerHTML = `${day} ${hours}:${minutes}`;
  let today = `${day} ${hours}:${minutes}`;
  console.log(today);
  console.log(hours);
  return `${day} ${hours}:${minutes}`;
}
formDate();

function handleSubmit(event) {
  event.preventDefault();

  let cityIputElement = document.querySelector("#input-city");
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = cityIputElement.value;

  search(cityIputElement.value);
}
function displayTemp(response) {
  let currentTemperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let speedElement = document.querySelector("#wind");
  let pressureElement = document.querySelector("#pressure");
  let iconElement = document.querySelector("#icon");

  console.log(response.data);

  temperatureElement.innerHTML = currentTemperature;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  speedElement.innerHTML = response.data.wind.speed;
  pressureElement.innerHTML = response.data.main.pressure;
  iconElement.innerHTML = response.data.weather[0].icon;
}

function search(city) {
  let apiKey = "6bfa54f242cbb59343d4e58db578dc61";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

search("Mahikeng");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

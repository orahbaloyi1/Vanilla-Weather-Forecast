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
  temperatureElement.innerHTML = currentTemperature;
}

function search(city) {
  let apiKey = "6bfa54f242cbb59343d4e58db578dc61";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

search("Mahikeng");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

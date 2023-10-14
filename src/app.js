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
  return `${day} ${hours}:${minutes}`;
}
formDate();

function handleSubmit(event) {
  event.preventDefault();

  let cityIputElement = document.querySelector("#input-city");
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = cityIputElement.value;
}

function search() {
  let apiKey = "7b2103381278d28203d89c397e41d56e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={New York}&appid={API key}`;
  axios.get(apiUrl).then(displayTemperature);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

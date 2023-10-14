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

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

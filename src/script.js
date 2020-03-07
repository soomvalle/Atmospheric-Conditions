function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#current-temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);

  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.name;

  let descriptionElement = document.querySelector("#current-description");
  descriptionElement.innerHTML = response.data.weather[0].main;

  let humidityElement = document.querySelector("#current-humidity");
  humidityElement.innerHTML = response.data.main.humidity;

  let windElement = document.querySelector("#current-wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday"
  ];

  let day = days[now.getDay()];
  let hour = now.getHours();
  let minute = now.getMinutes();

  if (minute < 10) {
    minute = "0" + minute;
  }

  let timeElement = document.querySelector("#current-time");
  timeElement.innerHTML = `${day},${hour}:${minute}`;
}

let apiKey = "c8637e0cfa28648d49fb4f6afe6af61b";
let tempUnit = `metric`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=${apiKey}&units=${tempUnit}`;

axios.get(apiUrl).then(displayTemperature);

let now = new Date();

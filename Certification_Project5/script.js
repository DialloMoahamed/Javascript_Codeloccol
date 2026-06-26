const citySelect = document.getElementById("city-select");
const getWeatherBtn = document.getElementById("get-weather-btn");

const weatherIcon = document.getElementById("weather-icon");
const mainTemperature = document.getElementById("main-temperature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const weatherMain = document.getElementById("weather-main");
const locationElement = document.getElementById("location");

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`
    );

    return await response.json();
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

async function showWeather(city) {
  const data = await getWeather(city);

  if (data === undefined) {
    alert("Something went wrong, please try again later.");
    return;
  }

  weatherIcon.src = data.weather?.[0]?.icon || "";

  mainTemperature.textContent =
    data.main?.temp ?? "N/A";

  feelsLike.textContent =
    data.main?.feels_like ?? "N/A";

  humidity.textContent =
    data.main?.humidity ?? "N/A";

  wind.textContent =
    data.wind?.speed ?? "N/A";

  windGust.textContent =
    data.wind?.gust ?? "N/A";

  weatherMain.textContent =
    data.weather?.[0]?.main ?? "N/A";

  locationElement.textContent =
    data.name ?? "N/A";
}

getWeatherBtn.addEventListener("click", () => {
  const city = citySelect.value;

  if (!city) return;

  showWeather(city);
});

window.getWeather = getWeather;
window.showWeather = showWeather;
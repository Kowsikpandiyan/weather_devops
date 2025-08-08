const apiKey = 'aeb13d0d929a7982e51044f98a19aa0d'; // ✅ Your working API key

async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const result = document.getElementById('result');

  if (!city) {
    result.textContent = '❌ Please enter a city name!';
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      const name = data.name;
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const humidity = data.main.humidity;
      const wind = data.wind.speed;

      result.innerText =
        `📍 ${name}
🌡️ Temperature: ${temp}°C
☁️ Condition: ${desc}
💧 Humidity: ${humidity}%
🌬️ Wind Speed: ${wind} m/s`;
    } else {
      result.textContent = `❌ ${data.message}`;
    }
  } catch (error) {
    result.textContent = '⚠️ Error fetching weather data.';
    console.error(error);
  }
}

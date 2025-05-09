const apiKey = "aadaf5668c2b64e492e176dab39414af";
const weatherDiv = document.getElementById("weatherResult");

function displayWeather(data) {
  const html = `
    <h3>${data.name}, ${data.sys.country}</h3>
    <p>Nhiệt độ: ${data.main.temp}°C</p>
    <p>Thời tiết: ${data.weather[0].description}</p>
    <p>Độ ẩm: ${data.main.humidity}%</p>
    <p>Gió: ${data.wind.speed} m/s</p>
  `;
  weatherDiv.innerHTML = html;
}

function getWeatherByCity() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) return alert("Vui lòng nhập tên thành phố!");

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=vi`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) displayWeather(data);
      else weatherDiv.innerHTML = `<p class="text-danger">Không tìm thấy thành phố.</p>`;
    })
    .catch(err => weatherDiv.innerHTML = `<p class="text-danger">Lỗi: ${err.message}</p>`);
}

function getWeatherByLocation() {
  if (!navigator.geolocation) {
    alert("Trình duyệt không hỗ trợ định vị.");
    return;
  }

  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=vi`)
      .then(response => response.json())
      .then(data => displayWeather(data))
      .catch(err => weatherDiv.innerHTML = `<p class="text-danger">Lỗi: ${err.message}</p>`);
  });
}

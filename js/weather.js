const API_KEY = "";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const name = data.name;
        const weather = data.weather[0].main;
        const temp = JSON.stringify(data.main.temp);
        const weatherInfo = document.getElementById("weather");
        const cityInfo = document.getElementById("city");
        const tempInfo = document.getElementById("temperature");
        weatherInfo.innerText = weather;
        cityInfo.innerText = name;
        tempInfo.innerText = `${temp}°C`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
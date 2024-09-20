const apiKey = "";
/* insert API key from OpenWeather into the quotation marks in apiKey */
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".cl-search-container input");
const searchBtn = document.querySelector(".cl-search-container button");
const weatherIcon = document.querySelector(".cl-weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".cl-search-error").style.display = "block";
        document.querySelector(".cl-weather-container").style.display = "none";
    } else {

        var data = await response.json();

        document.querySelector(".cl-city-header").innerHTML = data.name;
        document.querySelector(".cl-temp-header").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".cl-humidity-paragraph").innerHTML = data.main.humidity + "%";
        document.querySelector(".cl-wind-paragraph").innerHTML = Math.round(data.wind.speed) + " km/h";
    
        if(data.weather[0].main == "Clear"){
            weatherIcon.src = "assets/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "assets/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "assets/drizzle.png";
        }
        else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "assets/clouds.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "assets/mist.png";
        }
        else if (data.weather[0].main == "Thunderstorm") {
            weatherIcon.src = "assets/thunderstorm.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "assets/snow.png";
        }
    
        document.querySelector(".cl-weather-container").style.display = "block";
        document.querySelector(".cl-search-error").style.display = "none";
    }


}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})

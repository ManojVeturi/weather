const apiKey= "5f9d3c8d1e4c4645e58e056c9bfeb9ac";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if (data.cod === "404") {
        alert("City not found.");
        return;
    }

    console.log(data);

    const place = document.querySelector(".city") ;
    const temperature =document.querySelector(".temper") ;
    const humidity = document.querySelector(".percent");
    const wind = document.querySelector(".kmph");
    
    place.innerText = data.name;
    temperature.innerText = Math.floor(data.main.temp) + "°C";
    humidity.innerText = Math.floor(data.main.humidity) + "%";
    wind.innerText = Math.floor(data.wind.speed) + " m/s";
    }

    searchBtn.addEventListener("click", function(){
        checkWeather(searchBox.value);
    })

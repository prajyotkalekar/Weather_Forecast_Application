// const apiKey = "9dcbd9172a2e260b24062b292b96592f";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon");

// async function checkWeather(city){
//     const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

//     if(response.status == 404)
//     {
//         document.querySelector(".error").style.display = "block";
//         document.querySelector(".weather").style.display = "none";
//     }
//     else
//     {
//         var data = await response.json();

//         document.querySelector(".city").innerHTML = data.name;
//         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "C";
//         document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//         document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

//         if(data.weather[0].main == "Clouds")
//             {
//                 weatherIcon.src = "images/clouds.png";
//             }
//             else if(data.weather[0].main == "Clear")
//             {
//                 weatherIcon.src = "images/clear.png";
//             }
//             else if(data.weather[0].main == "Rain")
//             {
//                 weatherIcon.src = "images/rain.png";
//             }
//             else if(data.weather[0].main == "Drizzle")
//             {
//                 weatherIcon.src = "images/drizzle.png";
//             }
//             else if(data.weather[0].main == "Mist")
//             {
//                 weatherIcon.src = "images/mist.png";
//             }
//             else if(data.weather[0].main == "Snow")
//             {
//                 weatherIcon.src = "images/snow.png";
//             }
        
//             document.querySelector(".weather").computedStyleMap.display = "block";
//             document.querySelector(".error").style.display = "none";
//     } 
// }

// searchBtn.addEventListener("click", () => {
//     checkWeather(searchBox.value);
// });


const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');
const error_message = document.querySelector('.error-message'); 

async function checkWeather(city){
    const api_key = "9dcbd9172a2e260b24062b292b96592f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod == `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none"; 

        console.log("error");
        return;
    } 

    console.log("run");

    location_not_found.style.display = "none";
    weather_body.style.display = "flex";

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/h`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "assets/clear.png";
            break;
        case 'Rain':
            weather_img.src = "assets/rain.png";
            break;
        case 'Mist':
            weather_img.src = "assets/mist.png";
            break;
        case 'Snow':
            weather_img.src = "assets/snow.png";
            break;
        case 'Drizzle':
            weather_img.src = "assets/drizzle.png";
            break;
    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});

// searchBtn.addEventListener('click', ()=>{
//     const city = inputBox.value.trim(); // Get the trimmed value of the input box
//     if (city === "") 
//     {
//         error_message.style.display = "block"; // Display the error message
//         error_message.innerHTML = "Please enter a city name"; // Set the error message text
//         location_not_found.style.display = "none"; // Ensure no previous error message is shown
//         weather_body.style.display = "none"; // Hide the weather info
//     } 
//     else
//     {
//         error_message.style.display = "none"; // Hide the error message
//         checkWeather(city); // Call the function with the city name
//     }
// });
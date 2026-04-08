const inputCity = document.querySelector(".inputCity")
const submit = document.querySelector(".submit")

const cityName = document.querySelector(".city-name")
const temperature = document.querySelector(".temperature")
const condition = document.querySelector(".condition")
const icon = document.querySelector(".weather-icon")

const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind")
const feels = document.querySelector(".feels")
const visibility = document.querySelector(".visibility")

const errorMessage = document.querySelector(".error-message")

const api_key = "aac679675fda466dab4131950260404";

submit.addEventListener("click", ()=>{

const city = inputCity.value.trim()

if(city === ""){
errorMessage.innerText = "Enter city name"
return
}

errorMessage.innerText = "Loading..."

fetch(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`)

.then(response => {

if(!response.ok){
throw new Error("City not found")
}

return response.json()

})

.then(data => {

errorMessage.innerText = ""

cityName.innerText = data.location.name
temperature.innerText = data.current.temp_c + "°C"
condition.innerText = data.current.condition.text

icon.innerHTML = `<img src="${data.current.condition.icon}">`

humidity.innerText = data.current.humidity + "%"
wind.innerText = data.current.wind_kph + " km/h"
feels.innerText = data.current.feelslike_c + "°C"
visibility.innerText = (data.current.vis_km || "N/A") + " km"

})

.catch(error => {

errorMessage.innerText = "⚠️ City not found"

})

})











































// let userInput= document.querySelector('.inputCity');
// let submitBtn = document.querySelector('.submit');
// let errorMessage = document.querySelector(".error-message")


// const api_key = "aac679675fda466dab4131950260404";


// let cityName = document.querySelector(".city-name")
// let temperature = document.querySelector(".temperature")
// let condition = document.querySelector(".Weather-condition")
// let icon = document.querySelector(".Weather-icon")
// let humidity = document.querySelector(".humidity")
// let wind = document.querySelector(".wind-speed")
// let feelsLike = document.querySelector(".feels-like")
// let visibility = document.querySelector(".visibility") 


// submitBtn.addEventListener('click',()=>{
//      const city = userInput.value.trim()
//      if(city != ""){
//      const api = fetch(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`)
     
//      .then(Response => Response.json())
//      .then (data => {
         
// cityName.innerText = data.location.name
// temperature.innerText = data.current.temp_c + "°C"
// condition.innerText = data.current.condition.text

// icon.innerHTML = `<img src="${data.current.condition.icon}">`

// humidity.innerText = data.current.humidity + "%"
// wind.innerText = data.current.wind_kph + " km/h"
// feelsLike.innerText = data.current.feelslike_c + "°C"
// visibility.innerText = data.current.vis_km + " km"

// })

// }

// }) 
     

  
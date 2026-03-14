let city = document.querySelector('.inputCity');
let submitBtn = document.querySelector('.submit');
let cityName = document.querySelector('.city-name');
let temperature = document.querySelector('.temperature');
let Weather= document.querySelector('.Weather-icon');
let details = document.querySelector('.description');




const api_key = "ea8b021707ea9cab1d6c61024be7a521";

submitBtn.addEventListener('click',()=>{
    const userInput = city.value.trim();
    if(userInput != ""){
        const url  = fetch(`http://api.weatherstack.com/current?access_key=ea8b021707ea9cab1d6c61024be7a521&query= ${userInput}`)
    .then(response => response.json())
    .then(data =>{
      temperature.textContent = data.current.temperature;
      cityName.textContent = data.current.cityName;
      Weather.textContent = data.current.Weather-isSecureContext;
      
    })
    


})


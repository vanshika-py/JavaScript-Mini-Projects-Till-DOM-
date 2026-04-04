let userInput= document.querySelector('.InputCity');
let submitBtn = document.querySelector('.Submit');


const api_key = "aac679675fda466dab4131950260404";

submitBtn.addEventListener('click',()=>{
     const city = userInput.value.trim()
     if(city != ""){
     const api = fetch(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=mumbai`)
    })

  const api = fetch(`http://api.weatherapi.com/v1/current.json?key=aac679675fda466dab4131950260404&q=delhi`)
let timer = document.querySelector('.timer');
let start = document.querySelector('.Start');
let pause = document.querySelector('.Pause');
let reset = document.querySelector('.Reset');
let text = document.querySelector('.text');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

let secondsCount = 0;
let minutesCount = 0;
let hoursCount = 0;


start.addEventListener('click', () => {
    let temp = setInterval(() => {
        secondsCount++;
        seconds.textContent = secondsCount;
        if(secondsCount === 60){
            minutesCount++;
            minutes.textContent = minutesCount;
            secondsCount = 0;
        }
        if(minutesCount === 60){
            hoursCount++;
            hours.textContent = hoursCount;
            minutesCount = 0;
        }
},1000)
})


reset.addEventListener('click', () =>{
      clearInterval(temp)
      minutesCount = 0;
      minutes.textContent = minutesCount;
      secondsCount = 0;
      seconds.textContent = secondsCount;
      hoursCount = 0;
      hours.textContent = hoursCount;
})


/*start.addEventListener('click', () => {
    let temp = setInterval(() => {
        secondsCount++; 
     if( secondsCount === 60)
      minutesCount++;
      minutes.textContent = minutesCount;
    if(minutesCount === 60)
        hoursCount++;
        hours.textContent = hoursCount;
    console.log(temp)
})
});*/




 


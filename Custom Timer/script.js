let timer = document.querySelector('.timer');
let start = document.querySelector('.Start');
let pause = document.querySelector('.Pause');
let reset = document.querySelector('.Reset');
let text = document.querySelector('.text');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');



start.addEventListener('click', () => {
    let temp = setInterval(() => {
        secondsCount++; 
     if( secondsCount === 60)
      minutesCount++;
      minutes.textContent = minutesCount;
    if(minutesCount === 60)
        hoursCount++;
        secondsCount = 0;
        hours.textContent = hoursCount;
    console.log(temp)
},1000)
});

 

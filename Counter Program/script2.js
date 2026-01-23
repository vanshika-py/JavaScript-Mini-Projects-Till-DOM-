let initialValue = document.querySelector('.initial-value');
let increaseButton = document.querySelector('.increaseBtn');
let decreaseButton = document.querySelector('.decreaseBtn');

let resetButton = document.querySelector('.resetBtn'); 
let p = document.querySelector('p');


let count = 1;
let timer = null;

increaseButton.addEventListener('click', () => {
    if (timer !== null) return;           
    timer = setInterval(() => {
        count++;
        initialValue.textContent = count; 
        p.textContent = "Running";    
    }, 1000);
});

resetButton.addEventListener('click', () => {
    count = 0;                        
    initialValue.textContent = count;  
    p.textContent = "Reset 🔄";        
    clearInterval(timer);             
    timer = null;                     
});












































.









resetButton.addEventListener('click', () =>{
    count = 0;
    initialValue.textContent = 0;
     p.textContent = "Reset 🔄";
})
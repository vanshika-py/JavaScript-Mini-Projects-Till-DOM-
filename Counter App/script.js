
let increaseButton = document.querySelector('.increaseBtn');
let decreaseButton = document.querySelector('.decreaseBtn');
let resetButton = document.querySelector('.resetBtn'); 

let initialValue = 1;



increaseButton.addEventListener('click', () => {
    let currentValue = initialValue++;
    if(currentValue >=10){
        initialValue = 0;
    } else{
        currentValue
    }
    console.log(`Clicked  ${currentValue} times`);
});



decreaseButton.addEventListener('click', () => {
    let currentValue = initialValue++;
    console.log(`Clicked  ${currentValue} times`);
});


resetButton.addEventListener('click',() =>{
    increaseButton
    console.log(`CURRENT VALUE = ${currentValue}`);
}); 


let initialValue = document.querySelector('.initial-value');
let increaseButton = document.querySelector('.increaseBtn');
let decreaseButton = document.querySelector('.decreaseBtn');
let resetButton = document.querySelector('.resetBtn'); 

initialValue = 1;

increaseButton.addEventListener('click', () => {
    let currentValue = initialValue++;
    console.log(`Clicked  ${currentValue} times`);
});


decreaseButton.addEventListener('click', () => {
    let currentValue = initialValue++;
    console.log(`Clicked  ${currentValue} times`);
});


resetButton.addEventListener('click',() =>{
    let currentValue = 0;
    console.log(`CURRENT VALUE = ${currentValue}`);
})

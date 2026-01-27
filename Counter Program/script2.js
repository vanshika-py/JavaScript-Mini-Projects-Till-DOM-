let initialValue = document.querySelector('.initial-value');
let increaseButton = document.querySelector('.increaseBtn');
let decreaseButton = document.querySelector('.decreaseBtn');

let resetButton = document.querySelector('.resetBtn'); 
let p = document.querySelector('p');


let count = 0;
let temp;

increaseButton.addEventListener('click', () => {
    if(temp == null){
   temp = setInterval(() => {
      count++;
       initialValue.textContent = count;
      console.log(temp)
      },500
    )} 
});



decreaseButton.addEventListener('click', () => {
    clearInterval(temp)
    initialValue.textContent =  count;
    temp = null;
}
)

resetButton.addEventListener('click',() =>{
    clearInterval(temp)
    count = 0;
    initialValue.textContent = count;
})
    















































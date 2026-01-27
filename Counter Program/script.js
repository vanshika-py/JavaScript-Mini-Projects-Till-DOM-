let initialValue = document.querySelector('.initial-value');
let increaseButton = document.querySelector('.increaseBtn');
let decreaseButton = document.querySelector('.decreaseBtn');

let resetButton = document.querySelector('.resetBtn'); 
let p = document.querySelector('p');

let count = 1;

increaseButton.addEventListener('click', () => {
    if(count >= 10){
        alert("Maximum Limit Reached 🚫")
    }else {
        count++;
    }
    initialValue.textContent = count;
    p.textContent = `Clicked ${count} times 🙂`;
})



decreaseButton.addEventListener('click', () => {
  if(count <=  0){
    alert("Minimum Limit Reached ⚠️")
     p.textContent = `Clicked ${count} times <span></span>🙂`;
  } else{
    count--;
  }
  initialValue.textContent = count;
     p.textContent = `Clicked ${count} times 🙂`;
})




resetButton.addEventListener('click', () =>{
    count = 0;
    initialValue.textContent = 0;
     p.textContent = "Reset 🔄";
})

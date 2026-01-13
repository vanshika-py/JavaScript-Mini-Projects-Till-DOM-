let Button = document.querySelector('.Btn');
let modelcontainer = document.querySelector('.model-container');
let closeButton = document.querySelector('.close-button');


Button.addEventListener('click',()=> {
  modelcontainer.style.display = 'flex';
})

closeButton.addEventListener('click', ()=>{
modelcontainer.style.display = 'none'
});

modelcontainer.addEventListener('click',() =>{
  console.log("Back")
})
let Button = document.querySelector('.Btn');
let modelcontainer = document.querySelector('.model-container');
let closeButton = document.querySelector('.close-button');


Button.addEventListener('click',()=> {
  modelcontainer.style.display = 'flex';
})



modelcontainer.addEventListener('click',(event) =>{
  if(event.target.className === 'modelcontainer'){
    modelcontainer.style.display = 'none'
    }
  })

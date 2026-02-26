let taskInput = document.querySelector('#taskInput');
let addbutton = document.querySelector('#addBtn');
let completed = document.querySelector('#completed');
let tasklist = document.querySelector('#taskList');


let taskCount = 0;
let completedCount = 0;


addbutton.addEventListener('click',() =>{
    if(taskInput.value=== "" || taskCount === 10) return;
     taskCount++;

      
     let inputText = taskInput.value;
     let inputlist = document.createElement('li');
     tasklist.appendChild(inputlist);

     let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    inputlist.appendChild(checkbox);

    let textSpan = document.createElement('span');
    textSpan.textContent = inputText;
     inputlist.appendChild(textSpan);


    checkbox.addEventListener('change',() =>{
        if(checkbox.checked === true){
            completedCount++;
            inputlist.style.textDecoration = "line-through";
        }else{
            completedCount--;
            inputlist.style.textDecoration = "none";
        }
          completed.textContent = completedCount;
    })

    taskInput.value= "";

 
    let editbutton = document.createElement('button');
    editbutton.textContent = "✏️";
    inputlist.appendChild(editbutton);

    
    editbutton.addEventListener('click', () => {
    let newValue = prompt("Enter new value");
    if(newValue !== null && newValue.trim() !== ""){
        textSpan.textContent = newValue;
    }

})

        let deletebutton = document.createElement('button');
        deletebutton.textContent = "❌";
        inputlist.appendChild(deletebutton);


        deletebutton.addEventListener('click',() =>{
            inputlist.remove();
        })
        
    });
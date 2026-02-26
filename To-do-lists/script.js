const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const completedText = document.getElementById("completed");


let taskCount = 0;
let completedCount = 0;



addBtn.addEventListener("click", () => {
    if (taskInput.value === "" || taskCount === 10) return;

    taskCount++;

    const li = document.createElement("li");

    li.innerHTML = `
        <div class="task-left">
            <input type="checkbox">
            <span>Task ${taskCount}</span>
        </div>
        <div class="actions">
            <button class="edit">✏️</button>
            <button class="delete">🗑️</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";

    updateProgress();

    const checkbox = li.querySelector("input");
    const taskText = li.querySelector("span");
    const editBtn = li.querySelector(".edit");
    const deleteBtn = li.querySelector(".delete");


    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            taskText.classList.add("completed");
            completedCount++;
        } else {
            taskText.classList.remove("completed");
            completedCount--;
        }
        updateProgress();
    });


    editBtn.addEventListener("click", () => {
        const newText = prompt("Edit task:", taskText.textContent);
        if (newText !== null && newText !== "") {
            taskText.textContent = newText;
        }
    });


    deleteBtn.addEventListener("click", () => {
        if (checkbox.checked) completedCount--;
        taskList.removeChild(li);
        taskCount--;
        updateProgress();
    });
});


function updateProgress() {
    completedText.textContent = completedCount;
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskTemplate = document.getElementById('taskTemplate');

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const newTask = taskTemplate.cloneNode(true);
    newTask.style.display = "flex";
    newTask.removeAttribute('id'); 
    newTask.querySelector('.editInput').value = taskInput.value;

    newTask.querySelector('.delete-btn').addEventListener('click', () => {
        newTask.remove();
    });

    newTask.querySelector('.edit-btn').addEventListener('click', () => {
        const editInput = newTask.querySelector('.editInput');
        editInput.disabled = !editInput.disabled;
        if (!editInput.disabled) {
            editInput.focus();
        }
    });

    taskList.appendChild(newTask);
    taskInput.value = ""; 
}

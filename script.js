document.getElementById("add-task").addEventListener("click", addTask);

function addTask() {
    const title = document.getElementById("task-title").value;
    const description = document.getElementById("task-description").value;
    const deadline = document.getElementById("task-deadline").value;
    const priority = document.getElementById("task-priority").value;
    const category = document.getElementById("task-category").value;

    if (title === "" || deadline === "") {
        alert("Please enter a task title and deadline");
        return;
    }

    const task = {
        title,
        description,
        deadline,
        priority,
        category,
        completed: false,
    };

    addTaskToDOM(task);
}

function addTaskToDOM(task) {
    const taskList = document.getElementById("task-list");
    const taskEle = document.createElement("div");
    taskEle.classList.add("task", task.priority);

    const deadlineDate = new Date(task.deadline);
    const deadlineFormatted = deadlineDate.toLocaleDateString();

    taskEle.innerHTML = `
        <div class="details">
            <strong>${task.title}</strong> (${task.category})
            <p>${task.description}</p>
            <small>Deadline: ${deadlineFormatted}</small>
        </div>
        <div class="actions">
            <button class="complete-task">Complete</button>
        </div>
    `;

    const completeButton = taskEle.querySelector(".complete-task");
    completeButton.addEventListener("click", () => {
        completeTask(taskEle);
    });

    taskList.appendChild(taskEle);
}

function completeTask(taskEle) {
    taskEle.classList.add("completed");
    taskEle.querySelector(".complete-task").remove();

    const completedTaskList = document.getElementById(
        "completed-task-list"
    );
    completedTaskList.appendChild(taskEle);
}
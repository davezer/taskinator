var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listitemEl = document.createElement("li");
    listitemEl.className = "task-item";
    listitemEl.textContent = "This is a new task";
    tasksToDoEl.appendChild(listitemEl);
}

buttonEl.addEventListener("click", createTaskHandler);

 
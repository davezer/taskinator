var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

    event.preventDefault();

    var listitemEl = document.createElement("li");
    listitemEl.className = "task-item";
    listitemEl.textContent = "This is a new task";
    tasksToDoEl.appendChild(listitemEl);
    console.log(event);
}

formEl.addEventListener("submit", createTaskHandler);

 
// Get elements from the DOM
var todoForm = document.getElementById("todoForm");
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

// Add event listener to the form
todoForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var taskText = taskInput.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
    }
});

// Add task to the list
function addTask(taskText) {
    var taskItem = document.createElement("li");
    var taskTextSpan = document.createElement("span");
    taskTextSpan.innerText = taskText;
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    // Add event listener to the delete button
    deleteButton.addEventListener("click", function() {
        taskItem.remove();
    });

    // Add event listener to toggle task status
    taskTextSpan.addEventListener("click", function() {
        taskTextSpan.classList.toggle("completed");
    });
}

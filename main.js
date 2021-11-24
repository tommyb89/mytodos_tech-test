// select input field for later use
const taskField = document.getElementById("todo");
const tasks = document.querySelector(".tasks-list");
const add = document.querySelector(".todo__add");
const taskList = document.querySelector(".tasks-list");

// Get the value from input

// Event listener for the add button
add.addEventListener("click", () => {
  let task = taskField.value;
  taskList.innerHTML += `<li>${task}</li>`;
});

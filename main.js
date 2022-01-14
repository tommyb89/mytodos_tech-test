// select input field for later use
const taskField = document.getElementById("todo");
const taskItem = document.querySelector(".tasks__item");
const add = document.querySelector(".todo__add");
const taskList = document.querySelector(".tasks__list");

// Get the value from input
const addItem = () => {
  let task = taskField.value;
  taskList.innerHTML += `<li class="tasks__item" type="checkbox"><input type="checkbox" />${task}</li>`;
};

// Event listener for the add button
add.addEventListener("click", addItem);

"use strict";

// select input field for later use
var taskField = document.getElementById("todo");
var tasks = document.querySelector(".tasks-list");
var add = document.querySelector(".todo__add");
var taskList = document.querySelector(".tasks-list"); // Get the value from input
// Event listener for the add button

add.addEventListener("click", function () {
  var task = taskField.value;
  taskList.innerHTML += "<li>".concat(task, "</li>");
});
"use strict";

// select input field for later use
var taskField = document.getElementById("todo");
var taskItem = document.querySelector(".tasks__item");
var add = document.querySelector(".todo__add");
var taskList = document.querySelector(".tasks__list"); // Get the value from input

var addItem = function addItem() {
  var task = taskField.value;
  taskList.innerHTML += "<li class=\"tasks__item\">".concat(task, "</li>");
}; // Event listener for the add button


add.addEventListener("click", addItem);
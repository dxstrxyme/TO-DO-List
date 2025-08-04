const todoInput = document.querySelector(".todo__input");
const todoBtn = document.querySelector(".todo__btn");
const todoList = document.querySelector(".todo__list");

todoBtn.addEventListener("click", addTask);
function addTask() {
  if (todoInput.value === "") {
    alert("write text");
  } else {
    let li = document.createElement("li");
    li.innerHTML = todoInput.value;
    todoList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  todoInput.value = "";
  saveData();
}

todoList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveData();
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", todoList.innerHTML);
}

function showData() {
  todoList.innerHTML = localStorage.getItem("data");
}

showData();

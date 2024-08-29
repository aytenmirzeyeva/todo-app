const todoInput = document.querySelector("#todo-input");
const btnAdd = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

function addNewItem() {
  const li = document.createElement("li");
  const todoItemContainer = document.createElement("div");
  todoItemContainer.className = "todo-item-container";

  const circle = document.createElement("div");
  circle.className = "circle";
  circle.innerHTML = `<i class="fa-solid fa-check"></i>`;
  todoItemContainer.appendChild(circle);
  const text = document.createElement("span");
  text.textContent = todoInput.value;
  todoItemContainer.appendChild(text);
  li.appendChild(todoItemContainer);
  const deleteBtn = document.createElement("span");
  deleteBtn.className = "delete-button";
  deleteBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  li.appendChild(deleteBtn);

  todoList.appendChild(li);

  circle.addEventListener("click", () => {
    text.classList.toggle("done");
    circle.classList.toggle("selected");
  });
  deleteBtn.onclick = () => {
    todoList.removeChild(li);
  };
  todoInput.value = "";
}

todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (todoInput.value.trim() == "") return;
    else {
      addNewItem();
    }
  }
});

btnAdd.addEventListener("click", () => {
  if (todoInput.value.trim() == "") return;
  else {
    addNewItem();
  }
});

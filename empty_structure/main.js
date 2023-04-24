const addTodoForm = document.querySelector("#addTodo");
const listgroup = document.querySelector("#list-group");
const todobtn = document.querySelector("button[data-filter='todo']");
const donebtn = document.querySelector("button[data-filter='done']");
const allbtn = document.querySelector("button[data-filter='all']");
const btnAddTodo = document.querySelector("#addTodo button");

let todoList = [];

const destroy = () => {
  const trash = document.querySelectorAll(".bi-trash");
  trash.forEach((el) => {
    el.addEventListener("click", () => {
      el.parentNode.parentNode.remove();
    });
  });
};

const fetchTodo = async () => {
  try {
    const r = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "applicatio/json",
        },
      }
    );
    if (!r.ok) {
      throw new Error("Erreur serveur");
    }
    return r.json();
  } catch (e) {
    console.error(e);
  }
};

fetchTodo().then((els) =>
  els.forEach((el) => {
    todoList.push(el);
    createNewToDo(el.id, el.title, el.completed);
    destroy();
  })
);

const newToDo = (title) => {
  return { userId: 1, id: todoList.length + 1, title: title, completed: false };
};

addTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("#addTodo input");
  todoList.push(newToDo(input.value));
  createNewToDo(todoList.length, input.value);
  destroy();
});

const createNewToDo = (id, title, check = false) => {
  const li = document.createElement("li");
  li.className = "todo list-group-item d-flex align-items-center";
  const input = document.createElement("input");
  let checked;
  if (check) checked = "checked";

  li.innerHTML = `
    <input class="form-check-input" type="checkbox" id="todo-${id}" ${checked} />
    <label class="ms-2 form-check-label" for="todo-${id}">
        ${title}
    </label>
    <label class="ms-auto btn btn-danger btn-sm">
        <i class="bi-trash"> </i>
    </label>
  `;

  listgroup.prepend(li);
};

allbtn.addEventListener("click", () => {
  listgroup.innerHTML = "";
  btnAddTodo.removeAttribute("disabled");
  allbtn.classList.add("active");
  todobtn.classList.remove("active");
  donebtn.classList.remove("active");
  todoList.forEach((el) => {
    createNewToDo(el.id, el.title, el.completed);
    destroy();
  });
});

todobtn.addEventListener("click", () => {
  listgroup.innerHTML = "";
  btnAddTodo.removeAttribute("disabled");
  allbtn.classList.remove("active");
  todobtn.classList.add("active");
  donebtn.classList.remove("active");
  todoList.forEach((el) => {
    if (!el.completed) {
      createNewToDo(el.id, el.title, el.completed);
      destroy();
    }
  });
});

donebtn.addEventListener("click", () => {
  listgroup.innerHTML = "";
  allbtn.classList.remove("active");
  todobtn.classList.remove("active");
  donebtn.classList.add("active");
  todoList.forEach((el) => {
    if (el.completed) {
      createNewToDo(el.id, el.title, el.completed);
      destroy();
    }
  });

  btnAddTodo.setAttribute("disabled", "true");
});

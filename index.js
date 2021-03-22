console.log('to-do-app-homework-mLaurentiu')

const taskListHtml = document.querySelector(".add-task");

document.getElementById("add-task-img").addEventListener("click", getData);

function postData(addTask) {
  const payload = {
    id: "mLaurentiu",
    todo: [
      {
        checked: false,
        item: addTask
      }
    ],
  }

  return fetch('https://simple-json-server-scit.herokuapp.com/todo', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

}

function addingData(addedTask, get) {
  const newTask = {
    checked: false,
     item: addedTask
   };
  get.todo.push(newTask);
  return fetch("https://simple-json-server-scit.herokuapp.com/todo/mLaurentiu", {
    method: "PUT",
     headers: {
      'Content-Type': 'application/json'
     },
    body: JSON.stringify(get)
  });
}
function getData() {
  const addTask = document.getElementById("task-input").value;
  fetch("https://simple-json-server-scit.herokuapp.com/todo/mLaurentiu").then(r => r.json()).then(get => {
      if (get.todo) {
        return addingData(addTask, get);
      } else {
        return postData(addTask);
      }
    })
    .then(() => renderToDoList());
}



function renderToDoList() {
  fetch("https://simple-json-server-scit.herokuapp.com/todo/mLaurentiu")
    .then(r => r.json())
    .then((get) => {
      console.log(get);
      taskListHtml.innerHTML = "";
      for (const element of get.todo) {
         renderToDoTask(element, get);
      }
      
    })

}

function renderToDoTask(element, data) {

  const taskContent = document.createElement("div");
  taskContent.classList.add("all-task-content");
  const checkedTask = document.createElement("input");
  checkedTask.setAttribute("type", "checkbox");

  const taskText = document.createElement("h3");
  
  const deleteTask = document.createElement("img");
  deleteTask.classList.add("delete-task-img")
  deleteTask.setAttribute("src", "bin.svg")
  

  taskContent.appendChild(checkedTask);
  taskContent.appendChild(taskText);
  taskContent.appendChild(deleteTask);
  taskListHtml.appendChild(taskContent);

  taskText.innerText = element.item;

  deleteTask.addEventListener("click", function () {
    taskContent.remove();
    deleteTasks(element.item, data);

  });
  checkedTask.addEventListener("click", function() {
    if (checkedTask.checked === true) {
      element.checked = true;
      return fetch("https://simple-json-server-scit.herokuapp.com/todo/mLaurentiu", {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    } else if (checkedTask.checked === false){
      element.checked = false;
      return fetch("https://simple-json-server-scit.herokuapp.com/todo/mLaurentiu", {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    }
  })
 }

function deleteTasks(item, data) {

  const index = data.todo.findIndex((task) => {
    return task.item === item
  });
  data.todo.splice(index, 1);

  fetch(
    "https://simple-json-server-scit.herokuapp.com/todo/mLaurentiu",
    {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  )
}

document.addEventListener("DOMContentLoaded", onRefresh);


function fetchData() {
  return fetch("https://simple-json-server-scit.herokuapp.com/todo/mLaurentiu")
  
  .then((r) => r.json())
  .then((data) => data);
}

function renderContent(data) {
  
  data.todo.forEach(data => {
    renderToDoList(data);
  });
}
function onRefresh() {
  fetchData()
    .then(data => renderContent(data));
}
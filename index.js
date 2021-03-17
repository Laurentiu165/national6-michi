console.log("To-Do-List Homework");

const toDoInput = document.querySelector(".task-input").value;

const addTaskHtml = document.querySelector(".add-task");

document.getElementById("add-task-img").addEventListener("click", () =>{
  console.log("I click on add")
  if(toDoInput){
    const payload = {
      id: "mLaurentiu",
      todo: [
        {
          checked: false,
          item: toDoInput
        }
      ]
    }
    fetch("https://simple-json-server-scit.herokuapp.com/todo",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    console.log("payload", payload);
  }
})
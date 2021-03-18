console.log("To-Do-List Homework");


const addTaskHtml = document.querySelector(".add-task");

document.getElementById("add-task-img").addEventListener("click", () =>{
  const toDoInput = document.querySelector(".task-input").value;
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

    console.log("Payload", payload);
    console.log("Payload text:", JSON.stringify(payload));

    fetch("https://simple-json-server-scit.herokuapp.com/todo",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then(getData);
  }
  function getData(){
    fetch(`https://simple-json-server-scit.herokuapp.com/todo/mLaurentiu`).then(handleFetchResponse).then(useJSONResponse)

    
  }

  function handleFetchResponse(response) {
    console.log("response", response);
    return response.json();
  }

  function useJSONResponse(json) {
    console.log(json);
    renderArticles(json)
  }

  function renderArticles(articleList) {
    addTaskHtml.innerHTML = "";
    for (const articleData of articleList) {
        console.log(articleData);
        
    }
  }
})
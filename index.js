console.log("JavaScript - Dogs App");

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  window.location = "/";
});

let breeds = document.getElementById("breeds");
function getData() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(handleFetchResponse)
    .then(useJSONResponse);
}

function handleFetchResponse(response) {
  console.log("response", response);
  return response.json();
}

function useJSONResponse(json) {
  console.log(json);
  renderArticles(json);
}

function renderArticles(articleList) {
  for (const articleData of articleList) {
    console.log(articleData);
    renderArticle(articleData);
  }
}
getData();

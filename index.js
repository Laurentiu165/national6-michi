console.log("Course-13-Ajax");

const articleListHtml = document.querySelector(".article-list");

document.getElementById("get-data").addEventListener("click", function(){
  fetch("https://simple-json-server-scit.herokuapp.com/posts").then(handleFetchResponse).then(useJSONResponse);

});

function handleFetchResponse(response){
  console.log("response",response);
  return response.json();
}

function useJSONResponse(json){
  console.log(json);
  renderArticles(json);
}

function renderArticles(articleList){
  articleListHtml.innerText = "";
  for (const articleData of articleList) {
    console.log(articleData);
    renderArticle(articleData);
  }

}


function renderArticle(articleData){
  const article = document.createElement("div");
  const articleTitle = document.createElement("h3");
  const articleContent = document.createElement("p");

  article.appendChild(articleTitle);
  article.appendChild(articleContent);

  articleListHtml.appendChild(article);

  articleTitle.innerText = articleData.title;
  articleContent.innerText = articleData.content;


}
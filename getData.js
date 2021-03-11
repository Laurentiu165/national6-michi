console.log("CRUD Operation Homework");

const articleListHtml = document.querySelector(".article-list");

document.getElementById("get-data").addEventListener("click", getData);

function getData(){
    fetch("https://simple-json-server-scit.herokuapp.com/posts").then(handleFetchResponse).then(useJSONResponse);
    
}
function handleFetchResponse(response){
  console.log("response",response);
  return response.json();
};

function useJSONResponse(json){
  console.log(json);
  renderArticles(json);
};

function renderArticles(articleList){
  articleListHtml.innerText = "";
  for (const articleData of articleList) {
    console.log(articleData);
    renderArticle(articleData);
  }
  
};


function renderArticle(articleData){
  const article = document.createElement("div");
  const articleTitle = document.createElement("h3");
  const articleContent = document.createElement("p");

  article.appendChild(articleTitle);
  article.appendChild(articleContent);
  articleListHtml.appendChild(article);

  articleTitle.innerText = articleData.title;
  articleContent.innerText = articleData.content;

  fetch("https://simple-json-server-scit.herokuapp.com/comments?postId=" + articleData.id).then(handleFetchResponse).then(useJSONResponse);

  function handleFetchResponse(response){
    console.log("response", response);
    return response.json()
  };

  function useJSONResponse(json){
    console.log(json);
    renderComments(json);
  };

  function renderComments(articleCommentsList){
    for(articleComments of articleCommentsList) {
     console.log(articleComments); 
     renderComment(articleComments);
    }
  }
  
  function renderComment(articleComments){
    const articleCommentHtml = document.createElement("div");
    const allComments = document.createElement("div");
    const commentUser = document.createElement("h4");
    const commentContent = document.createElement("p");


    articleCommentHtml.appendChild(allComments);
    allComments.appendChild(commentUser);
    allComments.appendChild(commentContent);
    article.appendChild(articleCommentHtml);

    articleCommentHtml.classList.add("post-comments");
    allComments.classList.add("comments");
    allComments.style.paddingLeft = "20px";

    commentUser.innerText = articleComments.username;
    commentContent.innerText = articleComments.content;


  }


};

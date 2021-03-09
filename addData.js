console.log("Crud operation-CREATE");



document.getElementById("add-article-button").addEventListener("click", function(){

  const articleTitle = document.getElementById("article-title").value;
  console.log("article title", articleTitle);

  const articleContent = document.getElementById("article-content").value;
  console.log("article content", articleContent);

  if(articleTitle && articleContent){
    const payLoad = {
      title: articleTitle,
      content: articleContent
    }
  
    console.log("payLoad:", payLoad);
    console.log("payLoad Text:", JSON.stringify(payLoad));
  
    fetch("https://simple-json-server-scit.herokuapp.com/posts",{
      method: "POST",
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payLoad), 
    });
  }
  
});

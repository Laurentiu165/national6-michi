console.log("JavaScript - Cookies & Local Storage");

console.log(document.cookie);

if(!document.cookie){
  window.location = "/login.html"
}

if (document.cookie){
  const cookiesElements = document.cookie.split("; ");
  console.log(cookiesElements);
  const cookieObj = {}
  for(const element of cookiesElements){
    const [key, value] = element.split("=");
    cookieObj[key] = value;
    console.log(key, value);

  }
  console.log(cookieObj);
  if(!cookieObj.name || !cookieObj.password){
    window.location = "/login.html"

  }
}

document.getElementById("log-out").addEventListener("click", () => {
  document.cookie = "password=123; Expires =Thu, 31 Oct 1990 00:00:00 gtm";
  document.cookie = "name=123; Expires =Thu, 31 Oct 1990 00:00:00 gtm";
  window.location = "/";
})



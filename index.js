console.log("Course 20-BOM(Browser Object Model");

console.log(window.screen);
document.getElementById("open").addEventListener("click", () => {
  window.open("http://google.com")
});

document.getElementById("close").addEventListener("click", () => {
  window.close("http://google.com")
});

window.addEventListener("load", () => {
  console.log("All is loaded");
})

window.addEventListener("resize", (event) => {
  console.log(event);
})

document.getElementById("redirect").addEventListener("click", () => {
  window.location = "https://google.com"
})
console.log("JavaScript- Async Programming");

// async programming:

document.addEventListener("click", onClick);

let counter = 0
function onClick(){
 console.log("Just a click in the app");
 counter++;
 console.log("counter:", counter);
}
console.log("counter:", counter);


setTimeout(function(){
  console.log("this is a code ran after 2 seconds");
}, 2000);

console.log("after first setTimeout");

setTimeout(setTimeoutFunction, 2000);

function setTimeoutFunction(){
  console.log("this is a code ran after 2 seconds", "setTimeoutFunction");
}

console.log("First");

setTimeout(function(){
  console.log("Second");
}, 0);
setTimeout(function(){
  console.log("Third");
}, 1);
console.log("Fourth");
setTimeout(function(){
  console.log("Fifth");
}, 0);


// setInterval(function(){
//   console.log("ping");
// }, 10000);

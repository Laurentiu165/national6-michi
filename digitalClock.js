console.log("JavaScript - Async Programming - Homework");

let divSaver = document.querySelector(".save-time-paragraphs");

let seconds = 0;
const secondsParagraphs = document.querySelectorAll(".seconds p");

let minutes = 0;
const minutesParagraphs = document.querySelectorAll(".minutes p");

let hours = 0;
const hoursParagraphs = document.querySelectorAll(".hours p");


let timer;

document.getElementById("timer-start").addEventListener("click", function(){
  timer = setInterval(function(){
    renderDigits(seconds, secondsParagraphs);
    renderDigits(minutes, minutesParagraphs);
    renderDigits(hours,hoursParagraphs)
    
    seconds++;
    
    if(seconds === 60){
      seconds = 0;
      minutes++;
    }
    
    if(minutes === 60){
      minutes = 0;
      hours++;
    }
    if(hours === 24){
      hours = 0;
    }
  
  }, 10)
});


document.getElementById("timer-stop").addEventListener("click", function(){
  clearInterval(timer);
});

document.getElementById("timer-reset").addEventListener("click", function(){
  seconds = 0;
  minutes = 0;
  hours = 0;
  secondsParagraphs[0].innerText = 0;
  secondsParagraphs[1].innerText = 0;
  
  minutesParagraphs[0].innerText = 0;
  minutesParagraphs[1].innerText = 0;

  hoursParagraphs[0].innerText = 0;
  hoursParagraphs[1].innerText = 0;
  clearInterval(timer);  
});

document.getElementById("timer-save").addEventListener("click", function(){

  let newPara = document.createElement("p");
  divSaver.appendChild(newPara);
  newPara.innerText = "The time is:" + `${hours}:${minutes}:${seconds}`

});


function renderDigits(nr, pList){
  const stringDigits = nr + "";
  const digitList = stringDigits.split('');
  if(digitList.length === 2){
    pList[0].innerText = digitList[0];
    pList[1].innerText = digitList[1];
  }else{
    pList[0].innerText = 0;
    pList[1].innerText = digitList[0];
  }
}





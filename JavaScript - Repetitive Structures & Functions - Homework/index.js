console.log("JavaScript - Repetitive Structures & Functions - Homework");

//-- First Task--
const numbers = getNumbers(-1, -20);


function getNumbers(a , b ) {
  let firstResult= "";
  for(i = a; i >= b; i--){
    firstResult = firstResult + i + " ";
  }
  console.log("Task 1 result is: ", firstResult);

}

//-- Second Task --

const oddNumbers = getOddNumbers(1, 20);


function getOddNumbers(a, b) {
  let secondResult = "";
  for(i = a; i <= b; i++){
    if(i % 2 !== 0){
      secondResult = secondResult + i + " ";
    }
  }
  console.log("Task 2 result is: ", secondResult);
}

// -- Third Task --

const array = [0, -15, 20, 1, 7.5];

let sumArray = 0;
for(let i = 0; i < array.length; i++){
  sumArray = sumArray + array[i];
}

console.log("Task 3 result is: ", sumArray);


//-- Fourth Task --

const arrValues = [2, -7, 20, 21, 5.1, 3];
const biggestNumberInArray = maxNumberInArray(arrValues);

function maxNumberInArray(arrValues) {
  const max = Math.max(...arrValues);
  console.log("Task 4 result is: ", max);
  
};

//-- Fifth Task --

let countArray= {};
let arr = [4, 2, 2, 1, 3, 1, 7, 3, 3];

function countFunc(values) {
  countArray[values] = ++countArray[values] || 1;
};

arr.forEach(countFunc);

console.log("Task 5 result is: ", countArray);




   
 



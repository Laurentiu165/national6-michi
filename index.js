console.log("JavaScript--ES6");

console.log(a);
var a = 6;
a= 7;

let b = 6;
b = 7;
console.log(b);

let c = "A sentence"
console.log(c);
if(true){
  let c = "a word";
  console.log(c);
}
console.log(c);

console.log("-----");

var d = "A sentence"
console.log(d);
if(true){
  var d = "a word";
  console.log(d);
}
console.log(d);


var y = 1;
function increment(){
  var y = 2;
  y++;
  console.log(y);

}
increment();
console.log(y);

console.log("-----");

//named function

function nameFunction(a,b){

}

//anonymous function = expression functions

let anonymous = function(){
  console.log("This is anonymous");
}

anonymous();

// ES6 arrow functions is an anonymous function
//  no parameters

const noParams = () => {
  console.log("This is arrow no parameters function");
}
noParams();

//  with parameters
const withParameters = (a,b) =>{
  return a < b
}
const resultWithParameters = withParameters(3,4)
console.log(resultWithParameters);

//  no curly braces

const noCurly = () => 1 + 1;

const resultCurly = noCurly();
console.log(resultCurly);

//  no parenthesis when you have single parameter

const noParenthesis = a => a + 1;
const resultNoParenthesis = noParenthesis(5);
console.log(resultNoParenthesis);


const array = [2,6,3,1,9,6];
const arrayEven = array.filter(element => element % 2 ? false : true);
console.log(arrayEven);

const arrayOdd = array.filter(element => element % 2);
console.log(arrayOdd);

// ES5 style for the same problem
const arrayEvenES5 = array.filter(function(element){
  return element % 2 ? false : true;
}); 
console.log(arrayEvenES5);


function ourFilter(originalArray, filterFunction){
  const filteredArray = [];
  for (const element of originalArray){
    if(filterFunction(element)){
      console.log("element passed condition", element);
      filteredArray.push(element);
    }
  }

return filteredArray;
}

function isUneven(element){
  console.log(element % 2);
  return element % 2;
}

const resultOurUnevenArray = ourFilter(array, isUneven)
console.log(resultOurUnevenArray);
console.log("Course 18 OOP Game");


class Car {
  constructor(color){
    this.color = color
  }
  startCar(){
    console.log("Start car");
  }
}

class CarWhitElectricWindows extends Car{
  openElectricWindow(windowNr){
    console.log("Opening window ", windowNr);
  }

}


const car1 = new Car("white")
console.log(car1);

const car2 = new CarWhitElectricWindows("black")
console.log(car2);

car2.startCar();
car2.openElectricWindow(3);


class MyArray extends Array{
  printLengthWithJoy(){
    console.log(this.length + " With joy");
  }
}

const myArray1 = new MyArray();
myArray1.push("Abc")
myArray1.push("Abcd")

console.log(myArray1);
myArray1.printLengthWithJoy();
console.log("JavaScript Object Oriented Programming");

const car1 = {
  nrOfWheel: 4,
  color: "red",
  engine: "diesel",
  runningEngine: false,
  turn: function(direction){
    if(this.runningEngine){
      console.log("Th car is turning", direction);

    } else{
      console.log("The car is not turning, turn the engine on");
    }

  },
  startEngine: function(){
    console.log(this);
    console.log("The engine is starting");
    this.runningEngine = true;
  },
};

car1.turn("left");
car1.startEngine();
car1.turn("left");

const car2 = {
  nrOfWheel: 4,
  color: "white",
  engine: "electric",
  runningEngine: false,
  turn: function(direction){
    if(this.runningEngine){
      console.log("Th car is turning", direction);

    } else{
      console.log("The car is not turning, turn the engine on");
    }

  },
  startEngine: function(){
    console.log(this);
    console.log("The engine is starting");
    this.runningEngine = true;
  },
};

car2.turn("left");
car2.startEngine();
car2.turn("left");

// Classes

class Car {
  constructor(color, engine){
    this.__nrOfWheel = 4;
    this.color = color;
    this.engine = engine;
    this.runningEngine = false;
  }

  turn(direction) {
    if(this.runningEngine){
      console.log("Th car is turning", direction);

    } else{
      console.log("The car is not turning, turn the engine on");
    }
  }

  startEngine(){
    console.log(this);
    console.log("The engine is starting");
    this.runningEngine = true;
  }

}

class Bike {

}

const car3 = new Car("yellow", "hybrid");
const car4 = new Car("pink", "petrol")
console.log(car3);
console.log(car3.color);
car3.startEngine();

car3.color = "green";

console.log(car3);
console.log(car4);
console.log(Car.color);
car4.nrOfDoors = 4;
console.log(car4);
console.log(car3);


let vehicle;
const typeOfVehicle = "car"
if(typeOfVehicle === "car"){
  vehicle = new Car("gray", "diesel")
} else{
  vehicle = new Bike();
}



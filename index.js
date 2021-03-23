console.log("Spaceship generator");

let generateSpaceship;
document.getElementById("spaceship").addEventListener("click", function(){
  console.log("New spaceship generated");
  generateSpaceship = new Spaceship();
});
class Spaceship{
  constructor(){
    this.x = 0;
    this.y = 0;
    this.generateSpaceshipHtml();
    this.setMoveSpaceship();
  }
  generateSpaceshipHtml(){
    this.ref = document.createElement("img");
    let spaceshipArray = ["blue-spaceship.png", "red-spaceship.png", "green-spaceship.png"];
    this.ref.src = spaceshipArray[Math.floor(Math.random() * spaceshipArray.length)];
    this.ref.classList.add("spaceship-generated");
    document.body.appendChild(this.ref);
  }
  setMoveSpaceship(){
    document.addEventListener("keydown", (event) => {
      generateSpaceship.moveSpaceship(event.key);
    });
  }

  moveSpaceship(direction){
    if(direction === "ArrowUp"){
      this.y -= 3;
      this.ref.style.transform = `translate(${this.x}px, ${this.y}px`
    }else if(direction === "ArrowDown"){
      this.y += 3;
      this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }else if(direction ==="ArrowRight"){
      this.x += 3;
      this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }else if(direction === "ArrowLeft"){
      this.x -= 3;
      this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
  }  
}

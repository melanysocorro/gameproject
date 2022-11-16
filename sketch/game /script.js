class Character {
  name;
  x;
  y;
  vx = 0;
  vy = 0;
  lx = 0;
  ly = 0;
  constructor(myName, x, y) {
      this.name = myName;
      this.waldo = false;
      this.x = x       
      this.y = y
    
  }
  hit(x, y) {
      let distance = dist(x, y,
          this.x,
          this.y)
      return (distance < 15)
  }
  click() {
      if (this.hit(mouseX, mouseY)) {
          console.log("You clicked me!")
      }
  }
  move() {
      this.x += this.vx;
      this.y += this.vy;
  }
  draw() { // the square and the circle
      fill(255, 143, 199)
      square(this.x, this.y, 30)
      text(this.name, this.x, this.y + 30)
      fill(255, 207, 231)
      circle(this.x + this.lx * 10, this.y + this.ly * 10, 10)
  }
}
class Player extends Character {
  interact() {
      for (let i = 0; i < people.length; i++) {
          if (people[i] !== this) {
              if (dist(this.x + this.lx * 10, this.y + this.ly * 10, people[i].x, people[i].y) < 40) {
                  console.log(people[i].name)
              }
          }
      }
  }
  move() {
      super.move()
      // console.log(keyCode)
      if (keyIsPressed) {
          switch (keyCode) {
              case UP_ARROW:
                  this.vy = -1;
                  this.ly = -1
                  break;
              case DOWN_ARROW:
                  this.vy = 1;
                  this.ly = 1
                  break;
              case LEFT_ARROW:
                  this.vx = -1;
                  this.lx = -1
                  break;
              case RIGHT_ARROW:
                  this.vx = 1;
                  this.lx = 1
                  break;
          }
      }
  }
}

let people = [];

let items = [];

class Item {
x;
y;
name;
yspeed;
ydirection;
tx = 400;
ty = 700;

constructor(itemName, x, y){
  this.name = itemName;
  this.x = x;
  this.y = y;
}

itemMove() {  
  this.y = this.y + yspeed * ydirection
  if (this.y > height || this.y < height){
    ydirection *= -1
  }

}

itemDraw(){
  fill(255)
  text(this.name, this.tx, this.ty + 30)
  circle(this.x,this.y,17)
}

itemCollect(){

}
}



function mousePressed() {
  for (let c of people) {
      c.click()
  }
}
let mainCharacter, playerCharacter
function keyReleased() {
  console.log("Released")
  if (keyCode == UP_ARROW || keyCode == DOWN_ARROW) {
      playerCharacter.vy = 0
  }
  if (keyCode == LEFT_ARROW || keyCode == RIGHT_ARROW) {
      playerCharacter.vx = 0
  }
  if (key == "x") {
      console.log("Interacting")
      playerCharacter.interact()


  }
}



let xspeed = 5; // Speed of the shape
let xdirection = 1; // Left or Right
let yspeed = 10
let ydirection = 0.50
let textDist
function setup() {
  frameRate(100);
  createCanvas(800, 800)
  rectMode(CENTER)
  textAlign(CENTER)

  mainCharacter = new Character("bob", width / 2, height / 2)
  people.push(mainCharacter)
  mainCharacter.x = width / 2;

  playerCharacter = new Player("me", width / 4, height / 2,)
  people.push(playerCharacter)
  playerCharacter.y = height/2

  firstOrb = new Item("first orb", width/2,700)
  items.push(firstOrb)
}

function draw() { 
background(224, 65, 145)
let d = dist(mainCharacter.x, mainCharacter.y, playerCharacter.x, playerCharacter.y)
  if (d < 30 ) {   
  mainCharacter.x = mainCharacter.x + xspeed * xdirection;
  background(0)
  }  
if (mainCharacter.x > width ||mainCharacter.x < width) {
  xdirection *= -1;
}

  
for (let i = 0; i < people.length; i++) {
      people[i].draw()
      people[i].move()
    }
for (let i = 0; i < items.length; i++) {
      items[i].itemDraw()
      items[i].itemMove()}
     
//seperation of functions
  push()
  trigger()
  pop()
  push()
  fall()
  pop()
  push()
  storyText()
  pop()
  circle(mouseX, mouseY, 20);
}

function trigger() {
d = dist(mainCharacter.x, mainCharacter.y, playerCharacter.x, playerCharacter.y)
  if (d < 30){  
  textFont('Courier New',48)
  fill(224, 65, 145)
  text('BIG MISTAKE!', width/2, 200 )} 
}

function fall(){
for (let i = 0; i < people.length; i++) {
  d = dist(mainCharacter.x, mainCharacter.y, playerCharacter.x, playerCharacter.y)
  if (playerCharacter.x >= mainCharacter.x  ){
    playerCharacter.y += 0.5}
}
}

function storyText() {
 textDist = dist(mainCharacter.x, mainCharacter.y, playerCharacter.x, playerCharacter.y)
if(textDist < 65) {
  fill(255)
  text("stop!", 450, height/2)
} else {
  fill(255)
  text("don't come near me!", 500, height/2)
}
}

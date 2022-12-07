let screen = 0;
let level = 1;

//creating the player and NPCs
class Character {
  name;
  color;
  x;
  y;
  vx = 0;
  vy = 0;
  constructor(myName,x,y,characterColor) {
    this.name = myName;
    this.x = x
    this.y = y
    this.w = 15
    this.h = 15
    this.s = 3
    this.color = color(random(252,252),random(140),random(210))
                                          
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }
//each collide helps seperate the level functions to prevent overlapping
  collideOne() {
   if (playerCharacter.x+80 >= this.x && playerCharacter.y > this.y && playerCharacter.x+40 < this.y) { 
     screen = 3
   } else if(level == 2){
    this.x = people.x + xspeed * xdirection; 
   }
   }
  collideTwo() {
   if (playerCharacter.x+70 >= this.x && playerCharacter.y >= this.y  && playerCharacter.x-300 < this.y&& playerCharacter.x-70 <= this.x) { 
     screen = 3
   } else if(level == 3){
    secondNpc.x = people.x + xspeed * xdirection; 
   }
   }
collideThree() {
   if (playerCharacter.x+50 >= this.x && playerCharacter.y >= this.y  && playerCharacter.x-300 < this.y && playerCharacter.x-70 <= this.x) { 
     screen = 3} 
    else if(level == 4){
    thirdNpc.x = people.x + xspeed * xdirection; 
    thirdNpc2.x = people.x + xspeed * xdirection; 
    thirdNpc3.x = people.x + xspeed * xdirection; 
 
     } 
  }
collideFour() {
   if (playerCharacter.x+70 >= this.x-50&& playerCharacter.y >= this.y  && playerCharacter.x-300 < this.y&& playerCharacter.x+1 <= this.x) { 
     screen = 3} 
    else if(level == 5){
    fourthNpc.x = people.x + xspeed * xdirection; 
    fourthNpc2.x = people.x + xspeed * xdirection; 

   }
  }
collideFive() {
   if (playerCharacter.x+70 >= this.x && playerCharacter.y >= this.y  && playerCharacter.x-300 < this.y&& playerCharacter.x+1 <= this.x) { 
     screen = 3} 
    else if(level == 6){
    fifthNpc.x = people.x + xspeed * xdirection; 
    fifthNpc2.x = people.x + xspeed * xdirection; 
    fifthNpc3.x = people.x + xspeed * xdirection

   }
  }


  draw() {
  noStroke()
  //head
  fill(255, 181, 135)
  rect(this.x,this.y,70,70,6)
  fill(255)
  text(this.name, this.x+12, this.y + 93)
  //legs
  fill(255, 181, 135)
  rect(this.x+15,this.y+65,this.w,this.h,this.s)
  rect(this.x+47,this.y+65,this.w,this.h,this.s)
  fill(0)
  ellipse(this.x+25,this.y+27,this.s+7)
  ellipse(this.x+50,this.y+27,this.s+7)
 
    
  //clothes
  fill(this.color)
  rect(this.x+3,this.y+60,this.w+60,this.s+7)
  //fill(204, 49, 111)
  ellipse(this.x+25,this.y+50,this.w)
  ellipse(this.x+50,this.y+50,this.w)
  rect(this.x,this.y+48,this.w+55,this.s)
  
   //hair
  fill(0)
  ellipse(this.x+25,this.y+10,this.w+20,this.h+5)
  ellipse(this.x+55,this.y+10,this.w+20,this.h+5)
  rect(this.x,this.y,this.w+61,this.h,this.s+2)
  rect(this.x,this.y,this.w-5,this.h+55,this.s+2)
  rect(this.x+70,this.y,this.w-5,this.h+55,this.s+2)


  }
  
}
class Player extends Character {
}


//creating the common sense items 
class Item {
  name;
  ix;
  iy;
  constructor(itemName,x,y,itemColor) {
    this.name = itemName
    this.ix = x
    this.iy = y
    this.iw = 20
    this.color = color(random(252,252),random(140),random(210))
  
  }
  draw(){
    fill(this.color)
    circle(this.ix,this.iy,this.iw)
    textStyle(BOLD)
    text(this.name, this.ix-40, this.iy + 25)
  }
  //each collide is divided by level like the character class to prevent overlapping
  collideOne(){
  if (playerCharacter.y <= this.iy && playerCharacter.x <= this.ix+this.iw  && playerCharacter.x >= this.ix-80 ) {  
     this.ix = collectible.ix + xspeed * xdirection;
     level = 2  
     }}
    collideTwo(){
  if (playerCharacter.y <= this.iy && playerCharacter.x <= this.ix+this.iw  && playerCharacter.x >= this.ix-80  ) {  
     secondCs.ix = collectible.ix + xspeed * xdirection;
     level = 3  
  }}
   collideThree(){
  if (playerCharacter.y <= this.iy && playerCharacter.x <= this.ix+this.iw  && playerCharacter.x >= this.ix-80 ) {  
     thirdCs.ix = collectible.ix + xspeed * xdirection;
     level = 4
 }}
  
 collideFour(){
  if (playerCharacter.y <= this.iy && playerCharacter.x <= this.ix+this.iw  && playerCharacter.x >= this.ix-80 ) {  
     fourthCs.ix = collectible.ix + xspeed * xdirection;
     level = 5
 }}
 collideFive(){
  if (playerCharacter.y <= this.iy && playerCharacter.x <= this.ix+this.iw  && playerCharacter.x >= this.ix-80 ) {  
     fifthCs.ix = collectible.ix + xspeed * xdirection;
     screen = 4
 }}

}
let collectible = [];
let people = [];
let xspeed = 5
let xspeed1 = 5
let xspeed2 = 5
let xdirection = 1;
let ground ={
  x:1,
  y:540,
  width: 700,
}
let gravity = 1
let jumping = false;
 
//this is to map the clouds
let clouds = [
  {x: 80,
   y: 40,
   w:40,
   h:30,
   s:5},
  {x:50,
   y:60,
   w:100,
   h:30,
   s:5},
  {x:20,
   y:80,
   w:160,
   h:40,
   s:5},
  {x:330,
   y: 80,
   w:40,
   h:30,
   s:5},
  {x:300,
   y:100,
   w:100,
   h:30,
   s:5},
  {x:270,
   y:120,
   w:160,
   h:40,
   s:5},
    {x: 580,
   y:40,
   w:40,
   h:30,
   s:5},
  {x:550,
   y:60,
   w:100,
   h:30,
   s:5},
  {x:520,
   y:80,
   w:160,
   h:40,
   s:5},
  {x: 830,
   y: 80,
   w:40,
   h:30,
   s:5},
  {x:800,
   y:100,
   w:100,
   h:30,
   s:5},
  {x:770,
   y:120,
   w:160,
   h:40,
   s:5}
]

//declaring all characters and collectibles in setup, they will each be called in their seperate functions
function setup() {
  createCanvas(700, 700);
  playerCharacter = new Player("this is you", 10, height/1.5);
    people.push(playerCharacter);
    primaryNpc = new Character("nc person", width/2 ,height/1.5);
   firstCs = new Item ("common sense", width/1.2, 400);
   collectible.push(firstCs);
   firstCs1 = new Item ("common sense", width/1.2, 400);
    secondCs = new Item ("common sense", width/1.2, 200);
    thirdCs = new Item ("common sense", 95, 260);
    fourthCs = new Item ("common sense", width/1.12, 260);
    fifthCs = new Item ("common sense", 70, 250);
    secondNpc = new Character("nc person", width/3,height/1.5)
    thirdNpc = new Character("hesitant :(", 350,170)
    thirdNpc2 = new Character("nc person", width/4,height/1.5)
    thirdNpc3 = new Character("nc person", width/1.6,height/1.5)
    fourthNpc = new Character("nc person", width/4,height/1.5)
    fourthNpc2 = new Character("nc person", width/1.6,height/1.5)
    fifthNpc = new Character("hesitant :(", width/3,height/1.5)
    fifthNpc2 = new Character("hesitant :(", width/4,340)
    fifthNpc3 = new Character("hesitant :(", width/1.6,340) 
   
    }

//basis for level one and function declaration
function draw() {
  background(245, 202, 195);
  fill(242, 132, 130)
  rect(ground.x,ground.y,ground.width)
  fill(153, 83, 83)
  textSize(15)
  text("level one", 10, 690)   
  textSize(12)

   fill(255, 92, 138) 
    textSize(20)
    text('➜', 450,500)
    text('➜', 510,407)
    textSize(15)
    textStyle(BOLDITALIC)
    text('collect common sense to continue!', 255,405)
    textSize(15)
    textStyle(BOLDITALIC)
    text('do not touch me!', 480,497)
    textSize(11)

    
    for (let i = 0; i < collectible.length; i++){
     collectible[i].draw();
     collectible[i].collideOne();
     
    firstCs.draw();
    firstCs.collideOne();
   } 
        for(let i = 0; i < clouds.length; i++){
        drawCloud(clouds[i])}
  
push();
instructionScreen();
pop()
       for (let i = 0; i < people.length; i++) {
        people[i].draw();
        people[i].move();
        playerCharacter.draw()
       // people[i].collideOne();

        primaryNpc.collideOne();
        primaryNpc.draw();
    
  
   
        
    }

 


  
push();
startScreen();
pop();
push()
levelTwo();
pop()
push()
levelThree();
pop()
push()
levelFour();
pop()
push()
levelFive();
pop()
push()
endScreen();
pop()
push()
jumpInfo();
pop()
  
 


     


//controls for player
   if (keyIsDown(LEFT_ARROW)) {
    playerCharacter.x -= 10; 
    playerCharacter.x = constrain(playerCharacter.x , 0, width);

  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerCharacter.x += 10;
    playerCharacter.x = constrain(playerCharacter.x , 0, 620);
  

  }}

 function keyPressed() { 
  if (jumping === false && key == ' ') {
    playerCharacter.vy -= 15 ;
    jumping = true 
    console.log(jumping)
    
  
  }}
  //basic physics for the jump effect
function jumpInfo(){
  playerCharacter.y += playerCharacter.vy
  playerCharacter.vy += gravity
  if (playerCharacter.y > ground.y - 80  && playerCharacter.x <= ground.width) {
				playerCharacter.y = ground.y - 73;
                playerCharacter.vy = 0;
                jumping = false
  		       }
  

}
 
    

//drawing and moving clouds 
function drawCloud(clouds) {
 fill(253, 255, 219)  
 rect(clouds.x%1000,clouds.y,clouds.w,clouds.h,clouds.s) //modulo 1000 causes clouds to create the way they appear on the canvas
  clouds.x += 1
  }

//start screen display
function startScreen(){
  if(screen == 0){
  background(247, 237, 226)
  fill(255)
  textAlign(CENTER);
  textSize(24)
  fill(132, 165, 157)
  text('*･ﾟ✧* HANDS OFF: A GAME ON CONSENT *･ﾟ✧*',width/2, height/2)
  textSize(14)
  text('YOU MAY CLICK TO START', width/2, height/1.8);
  console.log("start")
  }
  
  
	}

//instruction screen display
function instructionScreen(){
  if (screen==1){
    fill(247, 237, 226,)
    rect(100,100,width/1.3,height/2,10)
    textSize(24)
    fill(132, 165, 157)
    textStyle(BOLD)
    text('HOW TO PLAY:',width/2.5,150)
    textStyle(NORMAL)
    textSize(15)
    text('THIS IS A GAME ABOUT CONSENT.\nYOU CANNOT TOUCH NON-CONSENTING PEOPLE. \nCOLLECT COMMON SENSE TO WIN.  ',width/5,200)
    textSize(25)
    text('✿',width/2,275)
    textStyle(BOLDITALIC)
    textSize(15)
    text('MOVE LEFT: ⬅ LEFT ARROW ',width/5,310)
    text('MOVE RIGHT: RIGHT ARROW ⮕',width/5,340)
    text('JUMP: SPACE BAR  ⎵',width/5,370)
    textStyle(BOLD)
    textSize(13)
    text('YOU MAY CLICK TO CONTINUE',width/2.7,430) 
 console.log("instructions")
  }
 

}
// end screens display
function endScreen(){
  if (screen==3){
	    background(132,165,157)
		textAlign(CENTER);
        fill(247, 237, 226)
        textSize(24)
		text(" YOU WERE PEPPER SPRAYED!\nYOU CREEP, SHAME ON YOU!\n ( ´•︵•` )", width/2, height/2)
        textSize(14)
 
  }
  
  if(screen==4){
   background(224, 27, 113)
		textAlign(CENTER);
        fill(247, 237, 226)
        textSize(24)
		text(" *･ﾟ✧*:･ﾟ\nCONGRATS, YOU HAVE COMMON SENSE!\nYOU ARE OFFICIALLY A RESPECTABLE HUMAN BEING!\n*･ﾟ✧*:･ﾟ", width/2, height/2)
        textSize(14)
  }
  }
//for screens that need to be clicked to continue
function mousePressed(){
	if(screen==0){
  	screen=1} else
      if(screen==1){
       screen=2}  
      
}




//levels are divded in functions
 function levelTwo(){
  if(level == 2){
  
  let jumpBlock =  [{
  x1:40,
  y1:400,
  w1:150,
  h1:30,
  r1:5
},
 {
  x2:400,
  y2:250,
  w2:150,
  h2:30,
  r2:5
 }       ]   
    background(233, 237, 201)
    fill(204, 213, 174)
    rect(ground.x,ground.y,ground.width)
    fill(142, 148, 123)
    circle(680,680,20)
    textSize(15)
    text("level two", 10, 690) 
    textSize(11)
    
     for (let i = 0; i < collectible.length; i++){
     collectible[i].draw();
     collectible[i].collideTwo();
     secondCs.draw()
     secondCs.collideTwo()
     }
    
for(let i = 0; i < jumpBlock.length; i++){
fill(163, 177, 138)
rect(jumpBlock[i].x1, jumpBlock[i].y1,jumpBlock[i].w1,jumpBlock[i].h1,jumpBlock[i].r1);
rect(jumpBlock[i].x2, jumpBlock[i].y2,jumpBlock[i].w2,jumpBlock[i].h2,jumpBlock[i].r2)}
    
  for (let i = 0; i < people.length; i++) {
           people[i].draw()
          // people[i].collideTwo()
          secondNpc.draw()
          secondNpc.collideTwo()
        }
    for(let i = 0; i < clouds.length; i++){
        drawCloud(clouds[i])}
    
secondNpc.x = secondNpc.x + xspeed;
  if(secondNpc.x > width - 80 || secondNpc.x < 4){
    xspeed = -xspeed;
   }



    for(let i = 0; i < jumpBlock.length; i++){
       if (playerCharacter.y > jumpBlock[i].y1 - 80  && playerCharacter.x <= jumpBlock[i].x1+jumpBlock[i].w1-20 && playerCharacter.x >= jumpBlock[i].x1-jumpBlock[i].w1 && playerCharacter.y  <= jumpBlock[i].y1-jumpBlock[i].h1) {
				playerCharacter.y = jumpBlock[i].y1 - 80;
                playerCharacter.vy = 0;
                jumping = false
  		       }}
  for(let i = 0; i < jumpBlock.length; i++){
       if (playerCharacter.y > jumpBlock[i].y2 - 80  && playerCharacter.x <= jumpBlock[i].x2+jumpBlock[i].w2 && playerCharacter.x >= jumpBlock[i].x2-jumpBlock[i].w2+80&& playerCharacter.y  <= jumpBlock[i].y2-jumpBlock[i].h2) {
				playerCharacter.y = jumpBlock[i].y2 - 80;
                playerCharacter.vy = 0;
                jumping = false
  		       }

}}}
   
function levelThree(){
if(level == 3){
    let jumpBlock =  [{
  x1:546,
  y1:400,
  w1:150,
  h1:30,
  r1:5
},
 {
  x2:300,
  y2:250,
  w2:250,
  h2:30,
  r2:5
 },
  {
  x3:200,
  y3:400,
  w3:100,
  h3:30,
  r3:5 
  },               
  {
  x4:50,
  y4:300,
  w4:100,
  h4:30,
  r4:5 
  }                 
        ] 
  
  background(184, 190, 221)
  fill(155, 160, 189)
  rect(ground.x,ground.y,ground.width)
  fill(86, 88, 105)
  circle(680,680,20)
  circle(655,680,20)
  textSize(15)
  text("level three", 10, 690)   
  textSize(11)
   for (let i = 0; i < collectible.length; i++){
     collectible[i].draw();
     collectible[i].collideThree();
    thirdCs.draw();
    thirdCs.collideThree()   
   };
    
  for(let i = 0; i < jumpBlock.length; i++){
fill(98, 106, 149)
rect(jumpBlock[i].x1, jumpBlock[i].y1,jumpBlock[i].w1,jumpBlock[i].h1,jumpBlock[i].r1);
rect(jumpBlock[i].x2, jumpBlock[i].y2,jumpBlock[i].w2,jumpBlock[i].h2,jumpBlock[i].r2)
rect(jumpBlock[i].x3, jumpBlock[i].y3,jumpBlock[i].w3,jumpBlock[i].h3,jumpBlock[i].r3)
rect(jumpBlock[i].x4, jumpBlock[i].y4,jumpBlock[i].w4,jumpBlock[i].h4,jumpBlock[i].r4)}
  
    for (let i = 0; i < people.length; i++) {
          people[i].draw()
        //  people[i].collideThree()
          thirdNpc.draw()
          thirdNpc.collideThree()
          thirdNpc2.draw()
          thirdNpc2.collideThree()
          thirdNpc3.draw()
          thirdNpc3.collideThree()
        }
    for(let i = 0; i < clouds.length; i++){
        drawCloud(clouds[i])}
  
  thirdNpc.x = thirdNpc.x + xspeed/2
  if(thirdNpc.x > width - 210 || thirdNpc.x < 300){
    xspeed = -xspeed;}
  
  thirdNpc2.x = thirdNpc2.x + xspeed1;
  if(thirdNpc2.x > width - 450 || thirdNpc2.x < 4){
    xspeed1 = -xspeed1;}
  
    thirdNpc3.x = thirdNpc3.x + xspeed2;
  if(thirdNpc3.x > width - 100 || thirdNpc3.x < 400){
    xspeed2 = -xspeed2;}
  


for(let i = 0; i < jumpBlock.length; i++){
       if (playerCharacter.y > jumpBlock[i].y1 - 80  && playerCharacter.x <= jumpBlock[i].x1+jumpBlock[i].w1-20 && playerCharacter.x >= jumpBlock[i].x1-jumpBlock[i].w1+80 && playerCharacter.y  <= jumpBlock[i].y1-jumpBlock[i].h1) {
				playerCharacter.y = jumpBlock[i].y1 - 80;
                playerCharacter.vy = 0;
                jumping = false
  		       }}
  for(let i = 0; i < jumpBlock.length; i++){
       if (playerCharacter.y > jumpBlock[i].y2 - 80  && playerCharacter.x <= jumpBlock[i].x2+jumpBlock[i].w2-30 && playerCharacter.x >= jumpBlock[i].x2&& playerCharacter.y  <= jumpBlock[i].y2-jumpBlock[i].h2) {
				playerCharacter.y = jumpBlock[i].y2 - 80; 
                 playerCharacter.vy = 0;
                jumping = false
  		       }}
  for(let i = 0; i < jumpBlock.length; i++){
       if (playerCharacter.y > jumpBlock[i].y3 - 80  && playerCharacter.x <= jumpBlock[i].x3+jumpBlock[i].w3-40 && playerCharacter.x >= jumpBlock[i].x3-jumpBlock[i].w3+40 && playerCharacter.y  <= jumpBlock[i].y3-jumpBlock[i].h3) {
				playerCharacter.y = jumpBlock[i].y3 - 80;
                playerCharacter.vy = 0;
                jumping = false
  		       }}
  for(let i = 0; i < jumpBlock.length; i++){
       if (playerCharacter.y > jumpBlock[i].y4 - 80  && playerCharacter.x <= jumpBlock[i].x4+jumpBlock[i].w4 && playerCharacter.x >= jumpBlock[i].x4-jumpBlock[i].w4&& playerCharacter.y  <= jumpBlock[i].y4-jumpBlock[i].h4) {
				playerCharacter.y = jumpBlock[i].y4 - 80;
                playerCharacter.vy = 0;
                jumping = false		       }}

}}

function levelFour(){
if(level == 4){
    let jumpBlock =  [{
  x1:370,
  y1:300,
  w1:50,
  h1:30,
  r1:5
},
 {
  x2:280,
  y2:220,
  w2:50,
  h2:30,
  r2:5
 },
  {
  x3:170,
  y3:280,
  w3:50,
  h3:30,
  r3:5 
  },               
  {
  x4:50,
  y4:420,
  w4:50,
  h4:30,
  r4:5 
  },                
  {
  x5:450,
  y5:200,
  w5:50,
  h5:30,
  r5:5 
  }, 
  {
  x6:600,
  y6:300,
  w6:50,
  h6:30,
  r6:5 
  }  ] 
    
  background(241,195,172)
  fill(243, 169, 132)
  rect(ground.x,ground.y,ground.width)
  fill(163, 115, 91)
  circle(680,680,20)
  circle(655,680,20)
  circle(630,680,20)
  textSize(15)
  text("level four", 10, 690)   
  textSize(11)
   for (let i = 0; i < collectible.length; i++){
     collectible[i].draw();
     collectible[i].collideFour();
    fourthCs.draw();
    fourthCs.collideFour()   
   }
  
  for(let i = 0; i < jumpBlock.length; i++){
fill(249, 132, 74)
  rect(jumpBlock[i].x1, jumpBlock[i].y1,jumpBlock[i].w1,jumpBlock[i].h1,jumpBlock[i].r1);
// rect(jumpBlock[i].x2, jumpBlock[i].y2,jumpBlock[i].w2,jumpBlock[i].h2,jumpBlock[i].r2)
rect(jumpBlock[i].x3, jumpBlock[i].y3,jumpBlock[i].w3,jumpBlock[i].h3,jumpBlock[i].r3)
rect(jumpBlock[i].x4, jumpBlock[i].y4,jumpBlock[i].w4,jumpBlock[i].h4,jumpBlock[i].r4)
rect(jumpBlock[i].x5, jumpBlock[i].y5,jumpBlock[i].w5,jumpBlock[i].h5,jumpBlock[i].r5)
rect(jumpBlock[i].x6, jumpBlock[i].y6,jumpBlock[i].w6,jumpBlock[i].h6,jumpBlock[i].r6)
}
;
    
    for (let i = 0; i < people.length; i++) {
          people[i].draw()
          people[i].collideFour()
          fourthNpc.draw()
          fourthNpc.collideFour()
          fourthNpc2.draw()
          fourthNpc2.collideFour()
        }
    for(let i = 0; i < clouds.length; i++){
        drawCloud(clouds[i])}
  
  fourthNpc.x = fourthNpc.x + xspeed;
  if(fourthNpc.x > width - 450 || fourthNpc.x < 4){
    xspeed = -xspeed;}
  
    fourthNpc2.x = fourthNpc2.x + xspeed2;
  if(fourthNpc2.x > width - 100 || fourthNpc2.x < 400){
    xspeed2 = -xspeed2;}
  


for(let i = 0; i < jumpBlock.length; i++){
       if (playerCharacter.y > jumpBlock[i].y1 - 80  && playerCharacter.x <= jumpBlock[i].x1+jumpBlock[i].w1-20 && playerCharacter.x >= jumpBlock[i].x1-jumpBlock[i].w1 && playerCharacter.y  <= jumpBlock[i].y1-jumpBlock[i].h1) {
				playerCharacter.y = jumpBlock[i].y1 - 80;
                playerCharacter.vy = 0;
                jumping = false
  		       }}

  for(let i = 0; i < jumpBlock.length; i++){
       if (playerCharacter.y > jumpBlock[i].y3 - 80  && playerCharacter.x <= jumpBlock[i].x3+jumpBlock[i].w3 && playerCharacter.x >= jumpBlock[i].x3-jumpBlock[i].w3 && playerCharacter.y  <= jumpBlock[i].y3-jumpBlock[i].h3) {
				playerCharacter.y = jumpBlock[i].y3 - 80;
                playerCharacter.vy = 0;
                jumping = false
  		       }}
  for(let i = 0; i < jumpBlock.length; i++){
       if (playerCharacter.y > jumpBlock[i].y4 - 80  && playerCharacter.x <= jumpBlock[i].x4+jumpBlock[i].w4 && playerCharacter.x >= jumpBlock[i].x4-jumpBlock[i].w4&& playerCharacter.y  <= jumpBlock[i].y4-jumpBlock[i].h4) {
				playerCharacter.y = jumpBlock[i].y4 - 80;
                playerCharacter.vy = 0;
                jumping = false		       }}
  
for(let i = 0; i < jumpBlock.length; i++){
       if (playerCharacter.y > jumpBlock[i].y5 - 80  && playerCharacter.x <= jumpBlock[i].x5+jumpBlock[i].w5 && playerCharacter.x >= jumpBlock[i].x5-jumpBlock[i].w5&& playerCharacter.y  <= jumpBlock[i].y5-jumpBlock[i].h5) {
				playerCharacter.y = jumpBlock[i].y5 - 80;
                playerCharacter.vy = 0;
                jumping = false		       }}

  for(let i = 0; i < jumpBlock.length; i++){
       if (playerCharacter.y > jumpBlock[i].y6 - 80  && playerCharacter.x <= jumpBlock[i].x6+jumpBlock[i].w6 && playerCharacter.x >= jumpBlock[i].x6-jumpBlock[i].w6 && playerCharacter.y  <= jumpBlock[i].y6-jumpBlock[i].h6) {
				playerCharacter.y = jumpBlock[i].y6 - 80;
                playerCharacter.vy = 0;
                jumping = false		       }}
  
  
}}

function levelFive(){
if(level == 5){
    let jumpBlock =  [{
  x1:10,
  y1:300,
  w1:150,
  h1:30,
  r1:5
},

{
  x2:150,
  y2:420,
  w2:400,
  h2:30,
  r2:5
},     
   ] 
    
  background(187, 222, 251)
  fill(144, 202, 249)
  rect(ground.x,ground.y,ground.width)
  fill(95, 133, 163)
  circle(680,680,20)
  circle(655,680,20)
  circle(630,680,20)
  circle(605,680,20)
  textSize(15)
  text("level five", 10, 690)
  textSize(11)
   for (let i = 0; i < collectible.length; i++){
     collectible[i].draw();
     collectible[i].collideFive();
    fifthCs.draw();
    fifthCs.collideFive()   
   }
  
  for(let i = 0; i < jumpBlock.length; i++){
fill(100, 181, 246)
  rect(jumpBlock[i].x1, jumpBlock[i].y1,jumpBlock[i].w1,jumpBlock[i].h1,jumpBlock[i].r1);
rect(jumpBlock[i].x2, jumpBlock[i].y2,jumpBlock[i].w2,jumpBlock[i].h2,jumpBlock[i].r2)

}
    
    for (let i = 0; i < people.length; i++) {
          people[i].draw()
          people[i].collideFive()
          fifthNpc.draw()
          fifthNpc2.draw()
          fifthNpc3.draw()
          fifthNpc.collideFive()
          fifthNpc2.collideFive()
          fifthNpc3.collideFive()
        }
    for(let i = 0; i < clouds.length; i++){
        drawCloud(clouds[i])}

  fifthNpc.x = fifthNpc.x + xspeed;
  if(fifthNpc.x > width - 80 || fifthNpc.x < 4){
    xspeed = -xspeed;}
  
    fifthNpc2.x = fifthNpc2.x + xspeed1/2;
  if(fifthNpc2.x > width - 450 || fifthNpc2.x < 150){
    xspeed1 = -xspeed1;}

    fifthNpc3.x = fifthNpc3.x + xspeed2/3;
  if(fifthNpc3.x > width - 250 || fifthNpc3.x < 350){
    xspeed2 = -xspeed2;}
  


for(let i = 0; i < jumpBlock.length; i++){
       if (playerCharacter.y > jumpBlock[i].y1 - 80  && playerCharacter.x <= jumpBlock[i].x1+jumpBlock[i].w1-20 && playerCharacter.x >= jumpBlock[i].x1-jumpBlock[i].w1 && playerCharacter.y  <= jumpBlock[i].y1-jumpBlock[i].h1) {
				playerCharacter.y = jumpBlock[i].y1 - 80;
                playerCharacter.vy = 0;
                jumping = false
  		       }}

  for(let i = 0; i < jumpBlock.length; i++){
       if (playerCharacter.y > jumpBlock[i].y2 - 80  && playerCharacter.x <= jumpBlock[i].x2+jumpBlock[i].w2-20 && playerCharacter.x >= jumpBlock[i].x2-jumpBlock[i].w2 + 300 && playerCharacter.y  <= jumpBlock[i].y2-jumpBlock[i].h2) {
				playerCharacter.y = jumpBlock[i].y2 - 80;
                playerCharacter.vy = 0;
                jumping = false
  		       }}

  
}}


















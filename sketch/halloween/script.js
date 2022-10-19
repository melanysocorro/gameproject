//Goal: make a pumpkin with words changing and staying on canvas per click
let halloweenWords = []
let words;
let word;


function setup() {
   words =  ["boo!","ghosts!","ghouls!","spooky!","terror!", "witches!","evil!","happy halloween!"]
  word = random(words)
  createCanvas(windowWidth, windowHeight);
  halloweenWords.push({text:word,x:60,y:60});
}

function draw() {
  noStroke()
  background(0);
  drawPumpkin();
  //text(halloweenWords[i], mouseX,mouseY)
  
for(let i = 0;i<halloweenWords.length;i++){
  
text(halloweenWords[i].text,halloweenWords[i].x,halloweenWords[i].y)
}

if (mouseIsPressed===true) {
halloweenWords[halloweenWords.length-1].text = random(words)
 halloweenWords[halloweenWords.length-1].x = mouseX;
 halloweenWords[halloweenWords.length-1].y = mouseY;}

}
//   i = i + 1;
  
//   if (i == halloweenWords.length) {
//     i = 0
//   }
// }

function mouseReleased () {
halloweenWords.push({text:word,x:mouseX,y:mouseY})
}

function drawPumpkin() {
  fill(171, 104, 29)
  rect(190,165,20,50)
  fill(227, 127, 14)
  ellipse(150,350,275,300) //body1
  ellipse(250,350,275,300) //body2
  fill(252, 186, 3)
  ellipse(140,300,30,30) //eye1
  ellipse(255,300,30,30) //eye2
  ellipse(200,400,110,100) //mouth
}

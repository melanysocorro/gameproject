function setup() {
  createCanvas(400, 400);
} 

function draw() {
  background('purple');
  noStroke()
  fill('yellow')
  arc(200,200,80,80,0,PI + QUARTER_PI*2)
  square(260,220,10);
  square(280,220,10);
  square(300,220,10);
  square(320,220,10);
  square(340,220,10);
  square(340,200,10);
  square(340,180,10);
  square(340,160,10);
  square(360,160,10);
  square(360,140,10);
  square(360,120,10);
  square(380,120,10);
  fill('pink')
  ellipse(100,100,60,80)
  ellipse(120,120,25,80)
  ellipse(110,120,20,80)
  ellipse(100,120,20,80)
  ellipse(90,120,20,80)
  ellipse(80,120,25,80)
  fill(255)
  ellipse(90,100,15,15)
  ellipse(110,100,15,15)
}
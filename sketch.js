var s;
var grid = 20;
var w,h;
var f;

function setup() {
  createCanvas(650,650);
  
  s = new snake;

  frameRate(5);

  w = floor(width / grid);
  h = floor(height / grid);
  
  food();
}

function food(){
  var x = floor(random(w));
  var y = floor(random(h));
  f = createVector(x,y);
}

function keyPressed(){
  if(keyCode === 37){
    s.direct(-1,0);
  }
  
  else if(keyCode === 38){
    s.direct(0,-1);
  }

  else if(keyCode === 39){
    s.direct(1,0);
  }

  else if(keyCode === 40){
    s.direct(0,1);
  }
}

/*
left arrow	37
up arrow	38
right arrow	39
down arrow	40
*/

function draw() {
  background(0);

  s.display();
  s.move();

  if (s.eat(f)) {
    food();
  }

  if (s.gameover()) {
    stroke(0);
    strokeWeight(4);
    textSize(20);
    text("END GAME",325,325);
    background(255);    
  }

  noStroke();
  fill(255,0,0);
  rect(f.x,f.y,30,30);
  
  drawSprites();
}


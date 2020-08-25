var snake;
var grid = 20;
var food;
var w;
var h;

function setup() {
  createCanvas(400, 400);
  w = floor(width / grid);
  h = floor(height / grid);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  var x = floor(random(w));
  var y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } 
  else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } 
  else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } 
  else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } 
  else if (key == ' ') {
    snake.grow();
  }

}

function draw() {
  scale(grid);
  background(0);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();

  if (snake.endGame()) {    
    background(255, 0, 0);
    text("You Lost",200,200);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}




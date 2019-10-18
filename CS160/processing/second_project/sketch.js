function setup() {
  createCanvas(800, 500);
  }
  function draw() {
  if (mouseIsPressed) {
    c = color(random(0,255), random())
  fill(0);
  } 
  else {
  fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
  }
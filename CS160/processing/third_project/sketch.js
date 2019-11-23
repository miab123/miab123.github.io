let t = 0; // time variable

function setup() {
  createCanvas(1500, 600);
  noStroke();
  fill(color(random(0,255),random(0,255),random(0,255)));
}

function draw() {
  background(10, 10); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 10) {
    for (let y = 0; y <= height; y = y + 40) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -8 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -8 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 10 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 5); // draw particle
    }
  }

  t = t + 0.01; // update time
}
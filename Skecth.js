let cor;
let x;
let y;

function setup() {
  createCanvas(600, 600);
  background("black");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  x = 300;
  y = 300;
}

function draw() {
  fill(cor);
  circle(x, y, 50);

  if (mouseX < x) {
    x = x - 1;
  }

  if (mouseX > x) {
    x = x + 1;
  }

  if (mouseY < y) {
    y--;
  }

  if (mouseY > y) {
    y++;
  }

  if (mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
}

// Depending on x-coordinate
function setup() {
  createCanvas(340, 340);
}

function draw() {
  var a = random(360)
  colorMode(HSB)
  stroke(a, random(100),random(100))
  line(a, random(height), random(width), random(height));
}
// if the range could be up to 360 even if the boundary of the canvas is 340?

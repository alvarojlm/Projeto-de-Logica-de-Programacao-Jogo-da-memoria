var x1 = 100;
var x2 = 100;
var x3 = 100;
var x4 = 100;
var x5 = 100;
var x6 = 200;
var v1 = 3;

function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(0, 255, 0);
  rect(x1, 20, 60, 60);
  x1 = x1 + v1;
if (x1 > 800) {
    x1 = 100;
  v1 =v1+5
  
  }
  circle(x2, 140, 35, 60, 60);
  x2 = x2 + 10;
  if (x2 > 800) {
    x2 = 100;
  }
    
   triangle( x6, 180, x6+100, 100, x6+200, 180)
  x6 = x6+2
  if (x6 > 800)
x6=100  

function setup() {

 createCanvas(900,900);

}
function draw() {
  background(0, 255, 0);
  fill(51);
  rect(-1,-1,900,250);
  rect(50,300,350,250);
  rect(50,600,350,250);
  rect(500,300,350,250);
  rect(500,600,350,250);
  fill(0);
  rect(mouseX,mouseY,55,55);
}

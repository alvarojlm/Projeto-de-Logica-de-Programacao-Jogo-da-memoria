/*
 Equipe:
 Alvaro Jose Lucena Marinho - subturma D
 Tassio Araujo de Lima - subturma D
 Etapa 1
 */
var x1 = 100;
var x2 = 175;
var x3 = 100;
var v1 = 3.45;
var v2 = 3;
var v3 = 2.55;

function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(0, 255, 0);
  rect(x1, 80, 220, 220);
  x1 = x1 + v1;
if (x1 > 800) {
    x1 = 50;
  v1 =v1 + 1;
  
  }
  circle(x2, 480, 110);
  x2 = x2 + v2;
  if (x2 > 800) {
    x2 = 50;
    v2 = v2 +1;
  }
    
   triangle( x3, 813, x3+110, 630, x3+220, 813)
  x3 = x3+v3
  if (x3 > 800){
  x3=50;
  v3= v3 + 1.2;
  }
}

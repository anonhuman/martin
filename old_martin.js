
function setup() {
  createCanvas(400, 400);
}

var silly = 25;

var yloc = 0

function draw() {

  stroke(200);
  fill(255, 255, 183);
  rect(-1, yloc ,width, silly);
  
  point (25, (yloc+ 25));
  fill(255, 184, 163);
  rect(-1, (yloc + 25) ,width, silly);
  
  point (25, (yloc + 50));
  fill(208, 253, 247);
  rect(-1, (yloc + 50) ,width, silly);
     
  
  noStroke();
  fill(150);
  ellipse(25, yloc, 3,3);
  ellipse(25, (yloc + 25), 3,3);
  ellipse(25, (yloc + 50), 3,3);
  ellipse(375, yloc, 3,3);
  ellipse(375, (yloc + 25), 3,3);
  ellipse(375, (yloc + 50), 3,3);
  yloc = yloc + 75;
  loop();

}
     

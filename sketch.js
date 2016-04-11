//color values
var value = {
  r:60,
  g:50,
  b:30,
}

function setup(){
  createCanvas(400, 400);
  background(255);
}

function draw() {
//loop for rectangles
for(var yloc = 0; yloc <= height; yloc = yloc + 75){
  stroke(200);
  fill(216, value.g, 178);
  rect(-1, yloc, width, 25);
  
  fill(value.r, 196, 175);
  rect(-1, (yloc + 25), width, 25);
  
  fill(191, 193, value.b);
  rect(-1, (yloc + 50), width, 25);
}

//loop for dots
for(var yloc = 0; yloc <=height; yloc = yloc + 25){  
  noStroke();
  fill(200);
  ellipse(25, yloc, 3,3);
  ellipse(375, yloc, 3,3);
}
}

//changes the value of the colors based on mouse movement


//function with the same skeleton, with parameters in the parentheses, 
function mouseMoved(){

//I am wondering if I can condense this into one if/conditional statement?  
//function colorstuff(value.r, value.g, value.b){  //tbc
  
  
  value.r = value.r + 1; 
  if (value.r > 255) {
    value.r = 60;
} 
  value.g = value.g + 1;
  if (value.g > 255) {
    value.g = 50;
    
  }
  value.b = value.b + 1;
  if (value.b > 255) {
    value.b = 30;
  }
}
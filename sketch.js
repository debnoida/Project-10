var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  btn_red = createButton("Click to change into red");
  btn_green = createButton("click to change into green");

  btn_red.mousePressed(red_bgr);
  btn_green.mousePressed(green_bgr);
}

function draw() {
  background(r,g,b);
}

function red_bgr() {
  r = 255;
  g = 0;
  b = 0;

}

function green_bgr() {
  r = 0;
  g = 255;
  b = 0;
}






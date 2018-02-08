var h;
var m;
var s;
var secondsPerHour;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function getTime() {
  h = hour();
  m = minute();
  s = second();
  secondsPerHour = (m*60) + s;
}

function draw() {
  translate(windowWidth/2, windowHeight/2);
  getTime();
  var col = map(secondsPerHour, 0, 3600, 0, 360);
  colorMode(HSB);
  background(col, 100,100);
  textSize(120);
  fill(0);
  if (s >= 10) {
    text(h + ":" + m + ":" + s, 0,0);
  } else {
    text(h + ":" + m + ":0" + s, 0,0);
  }
}
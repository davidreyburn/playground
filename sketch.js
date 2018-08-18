var colorSwitch = 0;
var lines = 0;
var lineCount = 16;
var paletteCount = 0;

function preload() {
  palettes = loadJSON('4-color-palettes.json');
}

// The statements in the setup() function
// execute once when the program begins
function setup() {
  createCanvas(windowWidth, windowHeight);  // Size must be the first statement
  frameRate(30);
  lines = [...Array(lineCount).keys()].map(i => height*.71 + (i*i));
}
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {
  background(palettes[colorSwitch].colors[1]);   // Set the background to black
  fill(palettes[colorSwitch].colors[3]);
  noStroke();
  ellipse(width*.85, height*.2, height*.4, height*.4);
  for (i=0;i<lineCount;i++) {
    var distance =  lines[i] - (height*.71);
    lines[i] = lines[i] + 1+abs(distance)/80;
    if (lines[i] > height) {
      lines[i] = height*.71;
    }
  }

  stroke(palettes[colorSwitch].colors[0]);
  line(0, height*.71, width, height*.71);
  for (i = 0; i < lineCount; i++) {
    line(0, lines[i], width, lines[i]);
  }
}

function mouseReleased() {
    if (colorSwitch == Object.keys(palettes).length-1) {
      colorSwitch = 0;
    } else colorSwitch++;
  }

function lfo(theta,amplitude) {
    var x = sin(theta) * amplitude;
    theta = theta + 0.01;
    if (theta > 2 * PI) {
      theta = 0.0;
    }
    return abs(x);
}

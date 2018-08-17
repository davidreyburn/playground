var colorSwitch = 0;
var lines = 0;
var paletteCount = 0;

function preload() {
  palettes = loadJSON('4-color-palettes.json');
}

// The statements in the setup() function
// execute once when the program begins
function setup() {
  createCanvas(windowWidth, windowHeight);  // Size must be the first statement
  frameRate(30);
  lines = [height-1, height-36, height-71, height-106, height-141, height-176, height-211];
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

  for (i=0;i<7;i++) {
    lines[i]++;
    if (lines[i] > height) {
      lines[i] = height*.71;
    }
  }

  stroke(palettes[colorSwitch].colors[0]);
  for (i = 0; i < 7; i++) {
    line(0, lines[i], width, lines[i]);
  }
}

function mousePressed() {
    if (colorSwitch == Object.keys(palettes).length-1) {
      colorSwitch = 0;
    } else colorSwitch++;
  }

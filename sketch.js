var y = 100;

function preload() {
  data = '4-color-palettes.json';
  palettes = loadJSON(data);
}

// The statements in the setup() function
// execute once when the program begins
function setup() {
  createCanvas(windowWidth, windowHeight);  // Size must be the first statement

  stroke(palettes[1].colors[0]);     // Set line drawing color to white
  frameRate(30);
}
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {
  background(palettes[1].colors[3]);   // Set the background to black

  y = y - 1;
  if (y < height*.4) {
    y = 0;
  }
  for (i = 0, i < 0, i++) {
    line(0, (i*5)+y, width, (i*5)+y);
  }
}
